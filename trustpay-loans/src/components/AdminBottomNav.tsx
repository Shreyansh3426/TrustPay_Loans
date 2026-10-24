import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  User,
} from "lucide-react";

export default function AdminBottomNav() {
  const navItems = [
    {
      to: "/admin",
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    {
      to: "/admin/applications",
      icon: FileText,
      label: "Apps",
    },
    {
      to: "/admin/analytics",
      icon: BarChart3,
      label: "Analytics",
    },
    {
      to: "/admin/profile",
      icon: User,
      label: "Profile",
    },
  ];

  return (
    <div
      className="
      fixed
      bottom-0
      left-0
      right-0
      md:hidden
      z-50

      bg-white/95
      dark:bg-slate-900/95

      backdrop-blur-xl

      border-t
      border-slate-200
      dark:border-slate-800

      h-20
      "
    >
      <div className="grid grid-cols-4 h-full">

        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `
                flex
                flex-col
                items-center
                justify-center
                gap-1
                transition-all
                ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-500 dark:text-slate-400"
                }
                `
              }
            >
              <Icon size={22} />

              <span className="text-xs font-medium">
                {item.label}
              </span>
            </NavLink>
          );
        })}

      </div>
    </div>
  );
}