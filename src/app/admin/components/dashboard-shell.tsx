"use client";

import {
  EyeIcon,
  Images,
  LayoutDashboard,
  LogOutIcon,
  MenuIcon,
  PaletteIcon,
  ShoppingBag,
  UserCircleIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { type ReactNode, useEffect, useState } from "react";

import { logoutAdmin } from "@/app/admin/actions/auth";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Sidebar,
  SidebarHeader,
  SidebarInset,
  SidebarNav,
  SidebarNavItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

interface DashboardShellProps {
  children: ReactNode;
  restaurant: {
    name: string;
    slug: string;
    subscriptionStatus: string;
    planActivatedAt: Date | null;
    trialEndsAt: Date | null;
  };
  admin: {
    email: string;
    displayName: string;
  };
}

const navItems = [
  { href: "/admin", label: "Visão geral", icon: LayoutDashboard },
  { href: "/admin/identidade", label: "Identidade visual", icon: UserCircleIcon },
  { href: "/admin/paleta", label: "Paleta de cores", icon: PaletteIcon },
  { href: "/admin/fotos", label: "Fotos do restaurante", icon: Images },
  { href: "/admin/cardapio", label: "Cardápio e produtos", icon: ShoppingBag },
];

const SidebarTitle = ({ restaurant, planStatusLabel }: Pick<DashboardShellProps, "restaurant"> & { planStatusLabel: string }) => {
  const { collapsed } = useSidebar();

  return (
    <SidebarHeader className="border-b border-slate-200 px-4 py-6">
      {!collapsed ? (
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            ServeFlow Dashboard
          </p>
          <p className="text-lg font-semibold text-slate-900">
            {restaurant.name}
          </p>
          <p className="text-xs text-slate-500">
            Plano: {planStatusLabel}
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-center h-10">
          <LayoutDashboard className="h-5 w-5 text-slate-400" />
        </div>
      )}
    </SidebarHeader>
  );
};

const DashboardShell = ({ children, restaurant, admin }: DashboardShellProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const planStatusLabel = restaurant.subscriptionStatus.toLowerCase().replace("_", " ");

  // Gate: se o trial acabou e não está ativo, força a tela de assinatura
  useEffect(() => {
    if (!restaurant.trialEndsAt) return;
    const ended = new Date(restaurant.trialEndsAt).getTime() < Date.now();
    const active = restaurant.subscriptionStatus === "ACTIVE";
    if (ended && !active && pathname !== "/admin/assinatura") {
      router.replace("/admin/assinatura");
    }
  }, [restaurant.trialEndsAt, restaurant.subscriptionStatus, pathname, router]);

  return (
    <SidebarProvider>
      {/* Sidebar Desktop */}
      <Sidebar collapsible className="hidden md:flex">
        <SidebarTitle restaurant={restaurant} planStatusLabel={planStatusLabel} />
        <SidebarNav className="flex flex-col gap-1 px-2 pt-4">
          {navItems.map(({ href, label, icon: Icon }) => (
            <SidebarNavItem
              key={href}
              href={href}
              icon={Icon}
              label={label}
              isActive={pathname === href}
            />
          ))}
        </SidebarNav>
      </Sidebar>

      {/* Main Wrapper */}
      <SidebarInset>
        {/* Topbar */}
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-none items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              {/* Desktop toggle */}
              <SidebarTrigger className="hidden md:inline-flex" />

              {/* Mobile menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-xl border-slate-200"
                    aria-label="Abrir menu"
                  >
                    <MenuIcon className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 space-y-6">
                  <SheetHeader>
                    <SheetTitle>ServeFlow Dashboard</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-2">
                    {navItems.map(({ href, label, icon: Icon }) => (
                      <Button
                        key={href}
                        asChild
                        variant={pathname === href ? "default" : "ghost"}
                        className="justify-start gap-3 rounded-xl text-slate-600 hover:bg-slate-900/5"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Link href={href}>
                          <Icon className="h-4 w-4" />
                          {label}
                        </Link>
                      </Button>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>

              {/* Restaurante info (topbar) */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  ServeFlow Dashboard
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  {restaurant.name}
                </p>
                <p className="text-xs text-slate-500">
                  Plano: {planStatusLabel}
                </p>
              </div>
            </div>

            {/* Topbar actions */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-500 md:flex">
                <UserCircleIcon className="h-4 w-4 text-slate-400" />
                <div className="flex flex-col">
                  <span className="font-medium text-slate-700">
                    {admin.displayName || "Administrador"}
                  </span>
                  <span>{admin.email}</span>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="gap-2 rounded-xl border-slate-200 bg-white text-slate-600 hover:bg-slate-900/5"
              >
                <Link
                  href={`/${restaurant.slug}/menu?consumptionMethod=DINE_IN`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <EyeIcon className="h-4 w-4" />
                  Ver cardápio
                </Link>
              </Button>
              <form action={logoutAdmin}>
                <Button
                  type="submit"
                  variant="default"
                  className="gap-2 rounded-xl bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
                >
                  <LogOutIcon className="h-4 w-4" />
                  Sair
                </Button>
              </form>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="mx-auto w-full max-w-none space-y-12 px-4 py-8 md:space-y-16 md:px-6 lg:px-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardShell;
