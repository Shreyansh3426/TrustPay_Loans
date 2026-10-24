import { create } from "zustand";

interface Notification {
  id: number;
  title: string;
  time: string;
}

interface NotificationState {
  notifications: Notification[];

  addNotification: (
    title: string
  ) => void;

  removeNotification: (
    id: number
  ) => void;
}

export const useNotificationStore =
  create<NotificationState>(
    (set) => ({
      notifications: [
        {
          id: 1,
          title: "Welcome to TrustPay",
          time: "Just now",
        },
      ],

      addNotification: (
        title
      ) =>
        set((state) => ({
          notifications: [
            {
              id: Date.now(),
              title,
              time: "Just now",
            },
            ...state.notifications,
          ],
        })),

      removeNotification: (
        id
      ) =>
        set((state) => ({
          notifications:
            state.notifications.filter(
              (n) => n.id !== id
            ),
        })),
    })
  );