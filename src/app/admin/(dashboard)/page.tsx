import { CalendarCheck, LayoutDashboard, Store } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { requireAdminSession } from "@/lib/auth/session";
import { db } from "@/lib/prisma";

const brDateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const formatDate = (date?: Date | null) => {
  return date ? brDateFormatter.format(date) : "--";
};

const AdminOverviewPage = async () => {
  const session = await requireAdminSession();

  const restaurant = await db.restaurant.findUnique({
    where: { id: session.restaurantId },
  });

  if (!restaurant) return null;

  const planStatusLabel = restaurant.subscriptionStatus.toLowerCase().replace("_", " ");

  return (
    <div className="space-y-12">
      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        {/* Card: Boas-vindas e status */}
        <Card className="border-slate-200">
          <CardContent className="space-y-6 p-6">
            <div className="flex items-start gap-3">
              <span className="rounded-xl bg-slate-900/5 p-2">
                <LayoutDashboard className="h-5 w-5 text-slate-700" />
              </span>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-700">
                  Bem-vindo ao painel
                </p>
                <p className="text-sm text-slate-500">
                  Consulte o status do plano e acesse rapidamente a landing e o acompanhamento de pedidos.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Status do plano */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Status da assinatura
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {planStatusLabel}
                </p>
                <p className="text-xs text-slate-500">
                  Última ativação: {formatDate(restaurant.planActivatedAt)}
                </p>
              </div>

              {/* Término do trial */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                  <CalendarCheck className="h-4 w-4" /> Trial termina em
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {formatDate(restaurant.trialEndsAt)}
                </p>
                <p className="text-xs text-slate-500">
                  Após essa data a cobrança passa a ser automática.
                </p>
              </div>
            </div>

            {/* Ações rápidas */}
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a
                  href={`/${restaurant.slug}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver landing pública
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href={`/${restaurant.slug}/orders`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Acompanhar pedidos
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Card: Info do restaurante */}
        <Card className="border-slate-200 bg-white">
          <CardContent className="space-y-4 p-6">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
              <Store className="h-4 w-4" /> Restaurante
            </p>
            <div className="space-y-1">
              <p className="text-lg font-semibold text-slate-900">
                {restaurant.name}
              </p>
              <p className="text-sm text-slate-500">
                /{restaurant.slug}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default AdminOverviewPage;
