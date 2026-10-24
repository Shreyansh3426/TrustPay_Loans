import {
  Bell,
  Moon,
  Shield,
  LogOut,
} from "lucide-react";

export default function AdminSettings() {
  return (
    <div className="space-y-8">

      <div className="bg-gradient-to-r from-[#001A4D] to-[#002B7F] rounded-3xl p-8 text-white shadow-xl">
        <h1 className="text-4xl font-bold">
          Admin Settings
        </h1>
      </div>

      <div className="space-y-4">

        <SettingItem
          icon={<Bell />}
          title="Notifications"
        />

        <SettingItem
          icon={<Moon />}
          title="Appearance"
        />

        <SettingItem
          icon={<Shield />}
          title="Security"
        />

        <SettingItem
          icon={<LogOut />}
          title="Logout"
        />

      </div>

    </div>
  );
}

function SettingItem({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-6 shadow-md flex items-center gap-4 cursor-pointer hover:shadow-xl transition-all">
      {icon}

      <span className="dark:text-white">
        {title}
      </span>
    </div>
  );
}