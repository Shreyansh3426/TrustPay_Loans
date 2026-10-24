import { Routes, Route } from "react-router-dom";

// Auth
import Welcome from "../pages/auth/Welcome";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// Layouts
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";

// User Pages
import UserDashboard from "../pages/user/UserDashboard";
import ApplyLoan from "../pages/user/ApplyLoan";
import Documents from "../pages/user/Documents";
import LoanStatus from "../pages/user/LoanStatus";
import Profile from "../pages/user/Profile";
import Settings from "../pages/user/Settings";
import Notifications from "../pages/user/Notifications";

// Admin Pages
import AdminDashboard from "../pages/admin/AdminDashboard";
import Applications from "../pages/admin/Applications";
import ApplicationReview from "../pages/admin/ApplicationReview";
import Analytics from "../pages/admin/Analytics";
import DsaManagement from "../pages/admin/DsaManagement";
import AdminSettings from "../pages/admin/AdminSettings";
import AdminProfile from "../pages/admin/AdminProfile";

// DSA Pages
import DsaDashboard from "../pages/dsa/DsaDashboard";

// Auth Guard
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        element={
          <ProtectedRoute allowedRole="user">
            <UserLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/apply-loan" element={<ApplyLoan />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/loan-status" element={<LoanStatus />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
      </Route>

      <Route
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/applications" element={<Applications />} />
        <Route path="/admin/review/:id" element={<ApplicationReview />} />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
        <Route path="/admin/dsa" element={<DsaManagement />} />
      </Route>

      <Route
        path="/dsa"
        element={
          <ProtectedRoute allowedRole="dsa">
            <DsaDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}