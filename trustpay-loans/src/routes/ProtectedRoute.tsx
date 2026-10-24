import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

interface Props {
  children: React.ReactNode;
  allowedRole:
    | "user"
    | "admin"
    | "dsa";
}

export default function ProtectedRoute({
  children,
  allowedRole,
}: Props) {
  const {
    isAuthenticated,
    role,
  } = useAuthStore();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  if (role !== allowedRole) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return <>{children}</>;
}