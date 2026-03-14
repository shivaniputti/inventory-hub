import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  Grid3X3,
  ShoppingCart,
  Truck,
  Users,
  UserCircle,
  LogOut,
  ChevronLeft,
  Search,
  Bell,
  Menu,
} from "lucide-react";

interface AppShellProps {
  children: React.ReactNode;
}

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Products", icon: Package, active: false },
  { label: "Categories", icon: Grid3X3, active: false },
  { label: "Orders", icon: ShoppingCart, active: false },
  { label: "Suppliers", icon: Truck, active: false },
  { label: "Users", icon: Users, active: false },
  { label: "Profile", icon: UserCircle, active: false },
];

const AppShell = ({ children }: AppShellProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative z-50 h-full flex flex-col bg-sidebar transition-all duration-300 ${
          collapsed ? "w-[68px]" : "w-64"
        } ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 h-16 border-b border-sidebar-border">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary">
            <Package className="h-5 w-5 text-sidebar-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <h1 className="font-display font-bold text-sm text-sidebar-primary-foreground truncate">
                Inventory MS
              </h1>
              <p className="text-[10px] text-sidebar-muted">Smart Stock Manager</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                item.active
                  ? "bg-sidebar-accent text-sidebar-primary-foreground font-medium"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
              }`}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Bottom actions */}
        <div className="p-3 border-t border-sidebar-border space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors">
            <LogOut className="h-4 w-4 shrink-0" />
            {!collapsed && <span>Logout</span>}
          </button>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
          >
            <ChevronLeft className={`h-4 w-4 transition-transform ${collapsed ? "rotate-180" : ""}`} />
            {!collapsed && <span>Collapse</span>}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="h-16 flex items-center justify-between px-4 lg:px-6 border-b border-border bg-card">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-accent"
            >
              <Menu className="h-5 w-5 text-muted-foreground" />
            </button>
            <div className="hidden sm:flex items-center gap-2 bg-accent rounded-lg px-3 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search inventory..."
                className="bg-transparent text-sm outline-none w-48 text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-accent transition-colors">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-critical" />
            </button>
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
              A
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppShell;
