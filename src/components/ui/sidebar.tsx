"use client";

import { ChevronsLeftIcon, ChevronsRightIcon,MenuIcon } from "lucide-react";
import Link from "next/link";
import React, {
  type ButtonHTMLAttributes,
  createContext,
  type HTMLAttributes,
  type ReactNode,
  useContext,
  useState,
} from "react";

import { cn } from "@/lib/utils";


/* --- CONTEXT --- */

interface SidebarContextValue {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }
  return context;
};

interface SidebarProviderProps {
  children: ReactNode;
  defaultCollapsed?: boolean;
}

export const SidebarProvider = ({
  children,
  defaultCollapsed = false,
}: SidebarProviderProps) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      <div className="flex min-h-screen w-full bg-slate-100">{children}</div>
    </SidebarContext.Provider>
  );
};

/* --- MAIN COMPONENT --- */

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
  collapsible?: boolean;
}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, collapsible = true, ...props }, ref) => {
    const { collapsed } = useSidebar();
    return (
      <aside
        ref={ref}
        data-collapsed={collapsible ? collapsed : undefined}
        className={cn(
          "group hidden md:flex flex-col border-r border-slate-200 bg-white shadow-sm transition-all duration-200",
          collapsible && collapsed ? "w-[72px]" : "w-72",
          className
        )}
        {...props}
      />
    );
  }
);
Sidebar.displayName = "Sidebar";

/* --- STRUCTURE COMPONENTS --- */

export const SidebarInset = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex w-full flex-1 flex-col", className)} {...props} />
));
SidebarInset.displayName = "SidebarInset";

export const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { collapsed } = useSidebar();
  return (
    <div
      ref={ref}
      className={cn(
        "px-4 py-6",
        className
      )}
      {...props}
    >
      {!collapsed ? (
        <>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            ServeFlow Dashboard
          </p>
          <p className="text-lg font-semibold text-slate-900 mt-1">
            marcelo&#39;s
          </p>
          <p className="text-xs text-slate-500">Plano: trialing</p>
        </>
      ) : (
        <div className="flex justify-center">
          {/* Ícone colapsado opcional, se quiser */}
        </div>
      )}
    </div>
  );
});
SidebarHeader.displayName = "SidebarHeader";

export const SidebarContent = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-6", className)}
    {...props}
  />
));
SidebarContent.displayName = "SidebarContent";

export const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-5 py-4", className)} {...props} />
));
SidebarFooter.displayName = "SidebarFooter";

/* --- NAVIGATION --- */

export const SidebarNav = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    className={cn("flex flex-col gap-2 text-sm font-medium", className)}
    {...props}
  />
));
SidebarNav.displayName = "SidebarNav";

interface SidebarNavItemProps {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  label: string;
  isActive?: boolean;
}

export const SidebarNavItem = ({
  icon: Icon,
  href,
  label,
  isActive,
}: SidebarNavItemProps) => {
  const { collapsed } = useSidebar();

  return (
    <Link
      href={href}
      className={cn(
        "relative flex items-center rounded-lg transition-all duration-200",
        collapsed
          ? "w-11 h-11 mx-auto justify-center"
          : "gap-3 px-4 py-2 w-full",
        isActive
          ? "bg-slate-900 text-white"
          : "text-slate-600 hover:bg-slate-100"
      )}
    >
      {Icon && <Icon className="h-5 w-5" />}
      {!collapsed && <span className="text-sm truncate">{label}</span>}
      {isActive && collapsed && (
        <span className="absolute left-0 top-1 bottom-1 w-1 bg-slate-900 rounded-r" />
      )}
    </Link>
  );
};

/* --- TRIGGERS --- */

interface SidebarTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const SidebarTrigger = ({
  className,
  icon: Icon,
  ...props
}: SidebarTriggerProps) => {
  const { collapsed, setCollapsed } = useSidebar();
  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-100",
        className
      )}
      onClick={() => setCollapsed(!collapsed)}
      {...props}
    >
      {Icon ? (
        <Icon className="h-4 w-4" />
      ) : collapsed ? (
        <ChevronsRightIcon className="h-4 w-4" />
      ) : (
        <ChevronsLeftIcon className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle Sidebar</span>
    </button>
  );
};

interface SidebarMobileTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const SidebarMobileTrigger = ({
  className,
  icon: Icon = MenuIcon,
  "aria-label": ariaLabel = "Open menu",
  ...props
}: SidebarMobileTriggerProps) => (
  <button
    type="button"
    className={cn(
      "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 md:hidden",
      className
    )}
    aria-label={ariaLabel}
    {...props}
  >
    <Icon className="h-5 w-5" />
  </button>
);
