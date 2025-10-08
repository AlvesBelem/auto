import { requireAdminSession } from "@/lib/auth/session";
import { db } from "@/lib/prisma";

import AppearanceForm from "../../components/appearance-form";

const PalettePage = async () => {
  const session = await requireAdminSession();
  const restaurant = await db.restaurant.findUnique({ where: { id: session.restaurantId } });
  if (!restaurant) {
    return null;
  }
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">Paleta de cores</h1>
        <p className="text-sm text-slate-500">
          Defina as cores principais utilizadas na landing, no totem e nas telas de pedidos.
        </p>
      </div>
      <AppearanceForm
        initialValues={{
          primaryColor: restaurant.primaryColor,
          secondaryColor: restaurant.secondaryColor,
          accentColor: restaurant.accentColor,
          surfaceColor: restaurant.surfaceColor,
          heroTitle: restaurant.heroTitle ?? "",
          heroSubtitle: restaurant.heroSubtitle ?? "",
          menuWelcomeTitle: restaurant.menuWelcomeTitle ?? "",
          menuWelcomeMessage: restaurant.menuWelcomeMessage ?? "",
          avatarImageUrl: restaurant.avatarImageUrl,
          coverImageUrl: restaurant.coverImageUrl,
        }}
        showMessaging={false}
        showImages={false}
        showColors
      />
    </div>
  );
};

export default PalettePage;
