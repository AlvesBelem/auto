import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import { getAdminSession } from "@/lib/auth/session";
import { db } from "@/lib/prisma";

import DashboardShell from "../components/dashboard-shell";

interface AdminDashboardLayoutProps {
  children: ReactNode;
}

const AdminDashboardLayout = async ({
  children,
}: AdminDashboardLayoutProps) => {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const [restaurant, admin] = await Promise.all([
    db.restaurant.findUnique({
      where: { id: session.restaurantId },
      select: {
        name: true,
        slug: true,
        subscriptionStatus: true,
        planActivatedAt: true,
        trialEndsAt: true,
      },
    }),
    db.restaurantAdmin.findUnique({
      where: { id: session.adminId },
      select: {
        email: true,
        displayName: true,
      },
    }),
  ]);

  if (!restaurant) {
    redirect("/admin/login");
  }

  return (
    <DashboardShell
      admin={{
        email: admin?.email ?? "",
        displayName: admin?.displayName ?? "Administrador",
      }}
      restaurant={restaurant}
    >
      {children}
    </DashboardShell>
  );
};

export default AdminDashboardLayout;
