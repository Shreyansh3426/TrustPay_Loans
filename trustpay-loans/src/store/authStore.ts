import { create } from "zustand";
import { persist } from "zustand/middleware";

type Role =
  | "user"
  | "admin"
  | "dsa";

interface AuthState {
  isAuthenticated: boolean;
  role: Role | null;
  name: string | null;

  login: (
    role: Role,
    name: string
  ) => void;

  logout: () => void;
}

export const useAuthStore =
  create<AuthState>()(
    persist(
      (set) => ({
        isAuthenticated: false,
        role: null,
        name: null,

        login: (
          role,
          name
        ) =>
          set({
            isAuthenticated: true,
            role,
            name,
          }),

        logout: () =>
          set({
            isAuthenticated: false,
            role: null,
            name: null,
          }),
      }),
      {
        name: "trustpay-auth",
      }
    )
  );