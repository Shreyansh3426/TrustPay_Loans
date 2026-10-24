import {
  Bell,
  CheckCircle,
  Trash2,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { useNotificationStore } from "../store/notificationStore";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function NotificationDrawer({
  open,
  onClose,
}: Props) {
  const notifications = useNotificationStore(
    (state) => state.notifications
  );

  const removeNotification = useNotificationStore(
    (state) => state.removeNotification
  );

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
            fixed
            inset-0
            bg-black/40
            backdrop-blur-sm
            z-40
            "
          />

          {/* Drawer */}

          <motion.div
            initial={{ x: 450 }}
            animate={{ x: 0 }}
            exit={{ x: 450 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
            }}
            className="
            fixed
            top-0
            right-0
            h-screen
            w-full
            max-w-md
            bg-white
            dark:bg-slate-900
            border-l
            border-slate-200
            dark:border-slate-700
            shadow-2xl
            z-50
            flex
            flex-col
            "
          >
            {/* Header */}

            <div
              className="
              flex
              items-center
              justify-between
              px-6
              py-5
              border-b
              border-slate-200
              dark:border-slate-700
              "
            >
              <div className="flex items-center gap-3">

                <div
                  className="
                  w-11
                  h-11
                  rounded-xl
                  bg-blue-100
                  dark:bg-blue-900/30
                  flex
                  items-center
                  justify-center
                  "
                >
                  <Bell
                    size={22}
                    className="text-blue-600"
                  />
                </div>

                <div>

                  <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                    Notifications
                  </h2>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {notifications.length} notification(s)
                  </p>

                </div>

              </div>

              <button
                onClick={onClose}
                className="
                w-10
                h-10
                rounded-xl
                hover:bg-slate-100
                dark:hover:bg-slate-800
                flex
                items-center
                justify-center
                transition
                "
              >
                <X className="text-slate-700 dark:text-white" />
              </button>
            </div>

            {/* Notifications */}

            <div
              className="
              flex-1
              overflow-y-auto
              p-5
              space-y-4
              "
            >
              {notifications.length === 0 ? (
                <div
                  className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  h-full
                  text-center
                  "
                >
                  <Bell
                    size={60}
                    className="text-slate-300 dark:text-slate-700 mb-4"
                  />

                  <h3 className="text-lg font-semibold text-slate-700 dark:text-white">
                    No Notifications
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400 mt-2">
                    You're all caught up.
                  </p>
                </div>
              ) : (
                notifications.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    whileHover={{ scale: 1.02 }}
                    className="
                    bg-slate-50
                    dark:bg-slate-800
                    rounded-2xl
                    border
                    border-slate-200
                    dark:border-slate-700
                    p-5
                    shadow-sm
                    "
                  >
                    <div className="flex justify-between gap-4">

                      <div className="flex gap-4">

                        <div
                          className="
                          w-11
                          h-11
                          rounded-xl
                          bg-green-100
                          dark:bg-green-900/30
                          flex
                          items-center
                          justify-center
                          "
                        >
                          <CheckCircle
                            size={22}
                            className="text-green-600"
                          />
                        </div>

                        <div>

                          <h3 className="font-semibold text-slate-800 dark:text-white">
                            {item.title}
                          </h3>

                          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                            {item.time}
                          </p>

                        </div>

                      </div>

                      <button
                        onClick={() =>
                          removeNotification(item.id)
                        }
                        className="
                        w-10
                        h-10
                        rounded-xl
                        hover:bg-red-100
                        dark:hover:bg-red-900/30
                        flex
                        items-center
                        justify-center
                        transition
                        "
                      >
                        <Trash2
                          size={18}
                          className="text-red-500"
                        />
                      </button>

                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}