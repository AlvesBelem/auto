import { requireAdminSession } from "@/lib/auth/session";
import { db } from "@/lib/prisma";

import MenuManager from "../../components/menu-manager";

const MenuPage = async () => {
  const session = await requireAdminSession();
  const categories = await db.menuCategory.findMany({
    where: { restaurantId: session.restaurantId },
    orderBy: { createdAt: "asc" },
    include: {
      products: {
        orderBy: { createdAt: "desc" },
      },
    },
  });
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">Cardapio e produtos</h1>
        <p className="text-sm text-slate-500">
          Organize categorias, cadastre novos itens e mantenha precos sempre atualizados.
        </p>
      </div>
      <MenuManager categories={categories} />
    </div>
  );
};

export default MenuPage;
