import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import AppRoutes from "./routes/AppRoutes";
import { useThemeStore } from "./store/themeStore";

export default function App() {
  const darkMode =
    useThemeStore(
      (state) => state.darkMode
    );

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      darkMode
    );
  }, [darkMode]);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}