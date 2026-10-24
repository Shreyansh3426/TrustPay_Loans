import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  Users,
  Bell,
  Search,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";

import NotificationDrawer from "../components/NotificationDrawer";
import { useThemeStore } from "../store/themeStore";
import AdminMenu from "../components/AdminMenu";
import AdminBottomNav from "../components/AdminBottomNav";

export default function AdminLayout() {
  const [notificationsOpen, setNotificationsOpen] =
    useState(false);

  const [adminMenuOpen, setAdminMenuOpen] =
    useState(false);

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const darkMode = useThemeStore(
    (state) => state.darkMode
  );

  const toggleTheme = useThemeStore(
    (state) => state.toggleTheme
  );

  return (
    <div
      className="
      min-h-screen
      bg-slate-50
      dark:bg-[#050816]
      text-slate-900
      dark:text-white
      "
    >
      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          className="
          fixed
          inset-0
          bg-black/50
          z-40
          md:hidden
          "
        />
      )}

      <div className="flex">

        {/* Desktop Sidebar */}
        <aside
          className="
          hidden
          md:flex
          w-72
          min-h-screen
          bg-[#001A4D]
          text-white
          flex-col
          sticky
          top-0
          "
        >
          <SidebarContent />
        </aside>

        {/* Mobile Sidebar */}
        <aside
          className={`
          fixed
          top-0
          left-0
          h-screen
          w-72
          bg-[#001A4D]
          text-white
          z-50
          transform
          transition-transform
          duration-300
          md:hidden
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
          `}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() =>
                setSidebarOpen(false)
              }
            >
              <X />
            </button>
          </div>

          <SidebarContent />
        </aside>

        {/* Main */}
        <main className="flex-1 min-h-screen">

          {/* Topbar */}
          <header
            className="
            sticky
            top-0
            z-30
            bg-white/90
            dark:bg-slate-900/90
            backdrop-blur-xl
            border-b
            border-slate-200
            dark:border-slate-800
            "
          >
            <div
              className="
              px-4
              md:px-8
              py-4
              flex
              items-center
              justify-between
              "
            >
              <div className="flex items-center gap-4">

                {/* Mobile Menu */}
                <button
                  onClick={() =>
                    setSidebarOpen(true)
                  }
                  className="
                  md:hidden
                  p-2
                  rounded-xl
                  border
                  border-slate-300
                  dark:border-slate-700
                  "
                >
                  <Menu size={20} />
                </button>

                {/* Search */}
                <div
                  className="
                  hidden
                  md:flex
                  items-center
                  gap-3
                  bg-white
                  dark:bg-slate-800
                  border
                  border-slate-300
                  dark:border-slate-700
                  rounded-2xl
                  px-4
                  py-3
                  w-[350px]
                  "
                >
                  <Search
                    size={18}
                    className="text-slate-400"
                  />

                  <input
                    placeholder="Search..."
                    className="
                    flex-1
                    bg-transparent
                    outline-none
                    "
                  />
                </div>
              </div>

              {/* Right */}
              <div className="flex items-center gap-3">

                {/* Notifications */}
                <button
                  onClick={() =>
                    setNotificationsOpen(true)
                  }
                  className="
                  relative
                  p-3
                  rounded-2xl
                  bg-white
                  dark:bg-slate-800
                  border
                  border-slate-300
                  dark:border-slate-700
                  shadow-sm
                  "
                >
                  <Bell size={18} />

                  <span
                    className="
                    absolute
                    -top-1
                    -right-1
                    w-5
                    h-5
                    rounded-full
                    bg-red-500
                    text-white
                    text-xs
                    flex
                    items-center
                    justify-center
                    "
                  >
                    4
                  </span>
                </button>

                {/* Theme */}
                <button
                  onClick={toggleTheme}
                  className="
                  p-3
                  rounded-2xl
                  bg-white
                  dark:bg-slate-800
                  border
                  border-slate-300
                  dark:border-slate-700
                  "
                >
                  {darkMode ? (
                    <Sun size={18} />
                  ) : (
                    <Moon size={18} />
                  )}
                </button>

                {/* Admin Profile */}
                <div className="relative">

                  <button
                    onClick={() =>
                      setAdminMenuOpen(
                        !adminMenuOpen
                      )
                    }
                    className="
                    w-11
                    h-11
                    rounded-full
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    flex
                    items-center
                    justify-center
                    text-white
                    font-bold
                    shadow-lg
                    "
                  >
                    A
                  </button>

                  <AdminMenu
                    open={adminMenuOpen}
                  />

                </div>

              </div>
            </div>
          </header>

          {/* Page */}
<div
  className="
  p-4
  md:p-8
  pb-28
  md:pb-8
  "
>
  <Outlet />
</div>

        </main>

      </div>

      <NotificationDrawer
  open={notificationsOpen}
  onClose={() =>
    setNotificationsOpen(false)
  }
/>

<AdminBottomNav />
    </div>
  );
}

function SidebarContent() {
  return (
    <>
      <div className="p-8 border-b border-blue-900">
        <h1 className="text-2xl font-bold">
          TrustPay Admin
        </h1>

        <p className="text-blue-200 mt-1">
          Control Center
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">

        <NavItem
          to="/admin"
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
        />

        <NavItem
          to="/admin/applications"
          icon={<FileText size={20} />}
          text="Applications"
        />

        <NavItem
          to="/admin/analytics"
          icon={<BarChart3 size={20} />}
          text="Analytics"
        />

        <NavItem
          to="/admin/dsa"
          icon={<Users size={20} />}
          text="DSA Management"
        />

      </nav>
    </>
  );
}

function NavItem({
  to,
  icon,
  text,
}: {
  to: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <Link
      to={to}
      className="
      flex
      items-center
      gap-3
      px-4
      py-4
      rounded-2xl
      hover:bg-[#002B7F]
      transition-all
      duration-300
      "
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}