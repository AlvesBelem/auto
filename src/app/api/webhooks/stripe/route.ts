import { SubscriptionStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import Stripe from "stripe";

import { db } from "@/lib/prisma";

const stripeClient = () => {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Missing Stripe secret key");
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-02-24.acacia",
  });
};

const mapSubscriptionStatus = (status: Stripe.Subscription.Status): SubscriptionStatus => {
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

const syncSubscription = async (subscription: Stripe.Subscription) => {
  const restaurantIdentifiers = [
    subscription.metadata?.restaurantId ? { id: subscription.metadata.restaurantId } : null,
    subscription.id ? { stripeSubscriptionId: subscription.id } : null,
    typeof subscription.customer === "string"
      ? { stripeCustomerId: subscription.customer as string }
      : null,
  ].filter(Boolean) as Array<{ id?: string; stripeSubscriptionId?: string; stripeCustomerId?: string }>;

  for (const identifier of restaurantIdentifiers) {
    const restaurant = await db.restaurant.findFirst({ where: identifier });
    if (!restaurant) {
      continue;
    }

    const updateData = {
      subscriptionStatus: mapSubscriptionStatus(subscription.status),
      stripeSubscriptionId: subscription.id,
      stripePriceId: subscription.items.data[0]?.price?.id,
    } as Parameters<typeof db.restaurant.update>[0]["data"];

    if (typeof subscription.customer === "string") {
      updateData.stripeCustomerId = subscription.customer;
    }

    if (subscription.trial_end) {
      updateData.trialEndsAt = new Date(subscription.trial_end * 1000);
    }

    if (!restaurant.planActivatedAt && ["trialing", "active"].includes(subscription.status)) {
      updateData.planActivatedAt = new Date();
    }

    await db.restaurant.update({
      where: { id: restaurant.id },
      data: updateData,
    });
    return;
  }
};

const markSubscriptionStatus = async (subscriptionId: string, status: SubscriptionStatus) => {
  const restaurant = await db.restaurant.findUnique({
    where: { stripeSubscriptionId: subscriptionId },
  });
  if (!restaurant) {
    return;
  }
  await db.restaurant.update({
    where: { id: restaurant.id },
    data: { subscriptionStatus: status },
  });
};

export async function POST(request: Request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Missing Stripe secret key");
  }

  const stripe = stripeClient();

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.error();
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET_KEY;
  if (!webhookSecret) {
    throw new Error("Missing Stripe webhook secret key");
  }

  const text = await request.text();
  const event = stripe.webhooks.constructEvent(text, signature, webhookSecret);

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const orderId = session.metadata?.orderId;
      const restaurantId = session.metadata?.restaurantId;

      if (orderId) {
        const order = await db.order.update({
          where: { id: Number(orderId) },
          data: { status: "PAYMENT_CONFIRMED" },
          include: {
            restaurant: { select: { slug: true } },
          },
        });
        revalidatePath(`/${order.restaurant.slug}/orders`);
      } else if (restaurantId) {
        const subscriptionId = session.subscription;
        if (typeof subscriptionId === "string") {
          const subscription = await stripe.subscriptions.retrieve(subscriptionId);
          await syncSubscription(subscription);
        }

        if (typeof session.customer === "string") {
          await db.restaurant.update({
            where: { id: restaurantId },
            data: { stripeCustomerId: session.customer },
          }).catch(() => undefined);
        }
      }

      break;
    }
    case "charge.failed": {
      const charge = event.data.object as Stripe.Charge;
      const orderId = charge.metadata?.orderId;
      if (orderId) {
        const order = await db.order.update({
          where: { id: Number(orderId) },
          data: { status: "PAYMENT_FAILED" },
          include: {
            restaurant: { select: { slug: true } },
          },
        });
        revalidatePath(`/${order.restaurant.slug}/orders`);
      }
      break;
    }
    case "customer.subscription.created":
    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      await syncSubscription(subscription);
      break;
    }
    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      await markSubscriptionStatus(subscription.id, "CANCELED");
      break;
    }
    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      if (invoice.subscription && typeof invoice.subscription === "string") {
        await markSubscriptionStatus(invoice.subscription, "PAST_DUE");
      }
      break;
    }
    default:
      break;
  }

  return NextResponse.json({
    received: true,
  });
}
