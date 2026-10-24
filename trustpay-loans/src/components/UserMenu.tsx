import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Settings,
  LogOut,
} from "lucide-react";

import { useAuthStore } from "../store/authStore";

interface Props {
  open: boolean;
}

export default function UserMenu({
  open,
}: Props) {
  const navigate = useNavigate();

  const logout = useAuthStore(
    (state) => state.logout
  );

  if (!open) return null;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div
      className="
      absolute
      right-0
      top-14
      w-60
      bg-slate-100
      dark:bg-[#0f172a]
      border
      border-slate-200
      dark:border-slate-700
      rounded-2xl
      shadow-xl
      overflow-hidden
      z-50
      text-slate-900
      dark:text-white
      "
    >
      <Link
        to="/profile"
        className="
        flex
        items-center
        gap-3
        p-4
        hover:bg-slate-200
        dark:hover:bg-slate-800
        "
      >
        <User size={18} />
        Profile
      </Link>

      <Link
        to="/settings"
        className="
        flex
        items-center
        gap-3
        p-4
        hover:bg-slate-200
        dark:hover:bg-slate-800
        "
      >
        <Settings size={18} />
        Settings
      </Link>

      <button
        onClick={handleLogout}
        className="
        w-full
        flex
        items-center
        gap-3
        p-4
        text-red-600
        hover:bg-red-100
        dark:hover:bg-red-950/30
        text-left
        "
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
}