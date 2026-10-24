import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useAuthStore } from "../store/authStore";

interface Props {
  open: boolean;
}

export default function AdminMenu({
  open,
}: Props) {
  const navigate = useNavigate();

  const logout = useAuthStore(
    (state) => state.logout
  );

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: -15,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -15,
            scale: 0.95,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
          absolute
          right-0
          top-16
          w-64
          rounded-2xl
          overflow-hidden
          border
          border-slate-200
          dark:border-slate-700
          bg-white
          dark:bg-slate-900
          shadow-2xl
          z-50
          "
        >
          {/* Header */}

          <div
            className="
            px-5
            py-4
            border-b
            border-slate-200
            dark:border-slate-700
            "
          >
            <h3 className="font-bold text-slate-800 dark:text-white">
              Admin
            </h3>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              admin@trustpay.com
            </p>
          </div>

          {/* Profile */}

          <Link
            to="/admin/profile"
            className="
            flex
            items-center
            gap-3
            px-5
            py-4
            text-slate-700
            dark:text-white
            hover:bg-slate-100
            dark:hover:bg-slate-800
            transition
            "
          >
            <User size={18} />
            <span>Profile</span>
          </Link>

          {/* Settings */}

          <Link
            to="/admin/settings"
            className="
            flex
            items-center
            gap-3
            px-5
            py-4
            text-slate-700
            dark:text-white
            hover:bg-slate-100
            dark:hover:bg-slate-800
            transition
            "
          >
            <Settings size={18} />
            <span>Settings</span>
          </Link>

          {/* Logout */}

          <button
            onClick={handleLogout}
            className="
            w-full
            flex
            items-center
            gap-3
            px-5
            py-4
            text-red-600
            hover:bg-red-50
            dark:hover:bg-red-900/20
            transition
            "
          >
            <LogOut size={18} />

            <span>Logout</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}