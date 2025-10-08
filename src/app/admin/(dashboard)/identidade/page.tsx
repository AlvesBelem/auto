import { requireAdminSession } from "@/lib/auth/session";
import { db } from "@/lib/prisma";

import AppearanceForm from "../../components/appearance-form";

const IdentityPage = async () => {
  const session = await requireAdminSession();

  const restaurant = await db.restaurant.findUnique({
    where: { id: session.restaurantId },
  });

  if (!restaurant) {
    return null;
  }

  return (
    <div className="flex justify-center px-4 py-10">
      <div className="w-full max-w-4xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-slate-900">
            Identidade visual
          </h1>
          <p className="text-sm text-slate-500">
            Atualize textos e imagens que apresentam seu restaurante.
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
          showMessaging
          showImages
          showColors={false}
        />
      </div>
    </div>
  );
};

export default IdentityPage;
