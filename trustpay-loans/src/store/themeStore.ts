import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  darkMode: boolean;
  toggleTheme: () => void;
  setDarkMode: (
    value: boolean
  ) => void;
}

export const useThemeStore =
  create<ThemeState>()(
    persist(
      (set) => ({
        darkMode: false,

        toggleTheme: () =>
          set((state) => ({
            darkMode:
              !state.darkMode,
          })),

        setDarkMode: (
          value
        ) =>
          set({
            darkMode: value,
          }),
      }),
      {
        name:
          "trustpay-theme",
      }
    )
  );