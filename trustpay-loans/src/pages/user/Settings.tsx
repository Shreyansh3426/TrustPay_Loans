import {
  Bell,
  Shield,
  Moon,
  Sun,
  LogOut,
} from "lucide-react";

import { useThemeStore } from "../../store/themeStore";

export default function Settings() {
  const darkMode = useThemeStore(
    (state) => state.darkMode
  );

  const toggleTheme = useThemeStore(
    (state) => state.toggleTheme
  );

  return (
    <div className="space-y-8 bg-slate-50 dark:bg-[#050816] rounded-3xl p-2">

      {/* Header */}
      <div
        className="
        bg-gradient-to-r
        from-[#001A4D]
        to-[#002B7F]
        rounded-3xl
        p-8
        text-white
        shadow-xl
        "
      >
        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="text-blue-100 mt-2">
          Manage your preferences and account settings.
        </p>
      </div>

      {/* Settings Cards */}
      <div className="space-y-4">

        <SettingItem
          icon={<Bell />}
          title="Notifications"
          subtitle="Manage alerts and reminders"
        />

        <SettingItem
          icon={<Shield />}
          title="Security"
          subtitle="Password and account protection"
        />

        {/* Theme Toggle */}
        <div
          className="
          bg-slate-100
          dark:bg-[#0f172a]
          border
          border-slate-200
          dark:border-slate-700
          rounded-3xl
          p-6
          shadow-md
          flex
          items-center
          justify-between
          "
        >
          <div className="flex items-center gap-4">

            <div className="text-[#001A4D] dark:text-blue-400">
              {darkMode ? (
                <Moon />
              ) : (
                <Sun />
              )}
            </div>

            <div>

              <h3 className="font-semibold text-slate-900 dark:text-white">
                Theme
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Switch between light and dark mode
              </p>

            </div>

          </div>

          <button
            onClick={toggleTheme}
            className="
            bg-gradient-to-r
            from-[#001A4D]
            to-[#0047CC]
            text-white
            px-5
            py-2
            rounded-xl
            hover:scale-105
            transition-all
            "
          >
            {darkMode
              ? "Dark"
              : "Light"}
          </button>

        </div>

        <SettingItem
          icon={<LogOut />}
          title="Logout"
          subtitle="Sign out of your account"
          danger
        />

      </div>

    </div>
  );
}

function SettingItem({
  icon,
  title,
  subtitle,
  danger = false,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  danger?: boolean;
}) {
  return (
    <div
      className="
      bg-slate-100
      dark:bg-[#0f172a]
      border
      border-slate-200
      dark:border-slate-700
      rounded-3xl
      p-6
      shadow-md
      flex
      items-center
      gap-4
      hover:shadow-xl
      hover:-translate-y-1
      transition-all
      "
    >
      <div
        className={
          danger
            ? "text-red-500"
            : "text-[#001A4D] dark:text-blue-400"
        }
      >
        {icon}
      </div>

      <div>

        <h3
          className={
            danger
              ? "font-semibold text-red-500"
              : "font-semibold text-slate-900 dark:text-white"
          }
        >
          {title}
        </h3>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>

      </div>

    </div>
  );
}
