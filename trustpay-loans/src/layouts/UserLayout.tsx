import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  Upload,
  ClipboardList,
  User,
  Bell,
  Search,
  Settings,
  Moon,
  Sun,
} from "lucide-react";

import NotificationDrawer from "../components/NotificationDrawer";
import UserMenu from "../components/UserMenu";
import SupportWidget from "../components/SupportWidget";
import { useThemeStore } from "../store/themeStore";

export default function UserLayout() {
  const darkMode = useThemeStore(
    (state) => state.darkMode
  );

  const toggleTheme = useThemeStore(
    (state) => state.toggleTheme
  );

  const [notificationsOpen, setNotificationsOpen] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-[#F4F7FC] dark:bg-[#020b1a] text-slate-900 dark:text-white">
      <div className="flex">

        {/* Sidebar */}
        <aside
          className="
          hidden
          md:flex
          md:flex-col
          w-72
          bg-[#001A4D]
          text-white
          min-h-screen
          "
        >
          {/* Logo */}
          <div className="px-8 pt-8 pb-6 border-b border-blue-900">
            <div className="flex justify-center">
              <div className="relative w-[120px] h-[90px]">

                <div
                  className="
                  absolute
                  top-0
                  left-0
                  w-16
                  h-16
                  border-l-4
                  border-t-4
                  border-white
                  "
                />

                <div
                  className="
                  absolute
                  bottom-0
                  right-0
                  w-16
                  h-16
                  border-r-4
                  border-b-4
                  border-white
                  "
                />

                <div
                  className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  text-white
                  text-xl
                  font-bold
                  "
                  style={{
                    fontFamily: "Georgia, serif",
                  }}
                >
                  Trustpay
                </div>

              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">

            <NavItem
              to="/dashboard"
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
            />

            <NavItem
              to="/apply-loan"
              icon={<FileText size={20} />}
              text="Apply Loan"
            />

            <NavItem
              to="/documents"
              icon={<Upload size={20} />}
              text="Documents"
            />

            <NavItem
              to="/loan-status"
              icon={<ClipboardList size={20} />}
              text="Loan Status"
            />

            <NavItem
              to="/profile"
              icon={<User size={20} />}
              text="Profile"
            />

            <NavItem
              to="/notifications"
              icon={<Bell size={20} />}
              text="Notifications"
            />

            <NavItem
              to="/settings"
              icon={<Settings size={20} />}
              text="Settings"
            />

          </nav>

        </aside>

        {/* Main Content */}
        <main className="flex-1">

          {/* Top Bar */}
          <div
            className="
            bg-white
            dark:bg-slate-900
            border-b
            border-slate-300
            dark:border-slate-700
            px-8
            py-5
            flex
            justify-between
            items-center
            sticky
            top-0
            z-20
            "
          >

            {/* Search */}
            <div
              className="
              flex
              items-center
              gap-3
              bg-white
              dark:bg-slate-900
              border
              border-slate-300
              dark:border-slate-700
              rounded-xl
              px-4
              py-3
              shadow-sm
              w-[340px]
              "
            >
              <Search
                size={18}
                className="text-slate-400"
              />

              <input
                type="text"
                placeholder="Search..."
                className="
                flex-1
                outline-none
                bg-transparent
                text-slate-900
                dark:text-white
                "
              />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">

              {/* Notifications */}
              <button
                onClick={() =>
                  setNotificationsOpen(true)
                }
                className="
                bg-white
                dark:bg-slate-900
                border
                border-slate-300
                dark:border-slate-700
                p-3
                rounded-xl
                shadow-sm
                transition
                "
              >
                <Bell
                  size={20}
                  className="text-slate-700 dark:text-white"
                />
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="
                bg-white
                dark:bg-slate-900
                border
                border-slate-300
                dark:border-slate-700
                p-3
                rounded-xl
                shadow-sm
                transition
                "
              >
                {darkMode ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>

              {/* User Avatar */}
              <div className="relative">

                <button
                  onClick={() =>
                    setMenuOpen(!menuOpen)
                  }
                  className="
                  bg-[#001A4D]
                  text-white
                  w-11
                  h-11
                  rounded-full
                  flex
                  items-center
                  justify-center
                  font-semibold
                  "
                >
                  S
                </button>

                <UserMenu open={menuOpen} />

              </div>

            </div>

          </div>

          {/* Page Content */}
          <div className="p-8">
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

      <SupportWidget />

    </div>
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
      rounded-xl
      text-white
      hover:bg-[#002B7F]
      transition
      "
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}
