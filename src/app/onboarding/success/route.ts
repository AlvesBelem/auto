import { NextResponse } from "next/server";
import Stripe from "stripe";

import { createAdminSession } from "@/lib/auth/session";
import { db } from "@/lib/prisma";

import {
  type Prisma,
  SubscriptionStatus,
} from "../../../../generate";

const stripeClient = () => {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Missing STRIPE_SECRET_KEY environment variable");
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-02-24.acacia",
  });
};

const mapStatus = (status?: Stripe.Subscription.Status): SubscriptionStatus => {
  switch (status) {
    case "trialing":
      return "TRIALING";
    case "active":
      return "ACTIVE";
    case "past_due":
      return "PAST_DUE";
    case "canceled":
    case "incomplete_expired":
    case "unpaid":
      return "CANCELED";
    default:
      return "PENDING";
  }
};

const toDate = (seconds?: number | null) =>
  seconds ? new Date(seconds * 1000) : undefined;

const finalizeOnboarding = async (sessionId: string) => {
  const stripe = stripeClient();
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["subscription"],
  });

  const restaurantId = session.metadata?.restaurantId;
  if (!restaurantId) {
    return { error: "Restaurante nao localizado." } as const;
  }

  const existingRestaurant = await db.restaurant.findUnique({ where: { id: restaurantId } });
  if (!existingRestaurant) {
    return { error: "Restaurante nao encontrado." } as const;
  }

  const subscriptionReference = session.subscription;
  let subscription: Stripe.Subscription | null = null;

  if (subscriptionReference && typeof subscriptionReference === "object") {
    subscription = subscriptionReference as Stripe.Subscription;
  } else if (typeof subscriptionReference === "string") {
    subscription = await stripe.subscriptions.retrieve(subscriptionReference);
  }

  const stripeCustomerId =
    typeof session.customer === "string"
      ? session.customer
      : session.customer?.id ?? undefined;

  const stripeSubscriptionId =
    subscription?.id ??
    (typeof subscriptionReference === "string" ? subscriptionReference : undefined);

  const updateData: Prisma.RestaurantUpdateInput = {
    subscriptionStatus: mapStatus(subscription?.status ?? "trialing"),
  };

  if (stripeCustomerId) {
    updateData.stripeCustomerId = stripeCustomerId;
  }
  if (stripeSubscriptionId) {
    updateData.stripeSubscriptionId = stripeSubscriptionId;
  }
  const trialEnd = toDate(subscription?.trial_end ?? null);
  if (trialEnd) {
    updateData.trialEndsAt = trialEnd;
  }
  if (!existingRestaurant.planActivatedAt) {
    updateData.planActivatedAt = new Date();
  }

  await db.restaurant.update({
    where: { id: restaurantId },
    data: updateData,
  });

  const admin = await db.restaurantAdmin.findFirst({
    where: { restaurantId },
    orderBy: { createdAt: "asc" },
  });

  if (admin) {
    await createAdminSession({ adminId: admin.id, restaurantId });
  }

  return { success: true } as const;
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const sessionId = url.searchParams.get("session_id");
  if (!sessionId) {
    return NextResponse.redirect(new URL("/?checkout=invalid", url));
  }

  const result = await finalizeOnboarding(sessionId);
  if ("error" in result && result.error) {
    return NextResponse.redirect(
      new URL(`/?checkout_error=${encodeURIComponent(result.error)}`, url),
    );
  }

  return NextResponse.redirect(new URL("/admin", url));
}
