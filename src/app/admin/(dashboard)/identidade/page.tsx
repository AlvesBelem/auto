import { requireAdminSession } from "@/lib/auth/session";
import { db } from "@/lib/prisma";

import AppearanceForm from "../../components/appearance-form";

const IdentityPage = async () => {
  const session = await requireAdminSession();

  const restaurant = await db.restaurant.findUnique({
    where: { id: session.restaurantId },
  });

  if (!restaurant) return null;

  return (
    <div className="w-full bg-slate-50 px-4 sm:px-6 py-8">
      <div className="w-full max-w-none bg-white rounded-2xl shadow-sm p-6 sm:p-8">
        <div className="mb-8 sm:mb-10 text-center space-y-2">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Identidade Visual</h1>
          <p className="text-slate-500 max-w-md mx-auto">
            Atualize as cores, textos e imagens que representam o seu restaurante.
          </p>
        </div>

        <div className="w-full mt-4 sm:mt-6">
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
            asCard={false}
            imageKeys={["avatarImageUrl"]}
            messagingEditableInSheet
          />
        </div>
      </div>
    </div>
  );
};

export default IdentityPage;
