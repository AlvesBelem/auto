import { redirect } from "next/navigation";

import { requireAdminSession } from "@/lib/auth/session";
import { db } from "@/lib/prisma";
import SubscribeCard from "../../components/subscribe-card";

const BillingPage = async () => {
  const session = await requireAdminSession();
  const restaurant = await db.restaurant.findUnique({
    where: { id: session.restaurantId },
  });
  if (!restaurant) return redirect("/admin/login");

  if (restaurant.subscriptionStatus === "ACTIVE") {
    return redirect("/admin");
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">Ative sua assinatura</h1>
        <p className="text-sm text-slate-500">
          Seu período de avaliação terminou. Conclua sua assinatura para continuar usando o painel.
        </p>
      </div>
      <SubscribeCard />
    </div>
  );
};

export default BillingPage;

