import {
  User,
  Mail,
  Shield,
  Phone,
} from "lucide-react";

export default function AdminProfile() {
  return (
    <div className="space-y-8">

      <div className="bg-gradient-to-r from-[#001A4D] to-[#002B7F] rounded-3xl p-8 text-white shadow-xl">
        <h1 className="text-4xl font-bold">
          Admin Profile
        </h1>

        <p className="text-blue-100 mt-2">
          Manage your account information.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-8 shadow-md">

        <div className="flex items-center gap-6">

          <div className="w-24 h-24 rounded-full bg-[#001A4D] text-white flex items-center justify-center text-3xl font-bold">
            A
          </div>

          <div>
            <h2 className="text-3xl font-bold dark:text-white">
              Admin User
            </h2>

            <p className="text-slate-500">
              Super Administrator
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <InfoRow
            icon={<User size={18} />}
            label="Name"
            value="Admin User"
          />

          <InfoRow
            icon={<Mail size={18} />}
            label="Email"
            value="admin@trustpay.com"
          />

          <InfoRow
            icon={<Phone size={18} />}
            label="Phone"
            value="+91 9876543210"
          />

          <InfoRow
            icon={<Shield size={18} />}
            label="Role"
            value="Administrator"
          />

        </div>

      </div>

    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4 items-center border border-slate-200 dark:border-slate-700 rounded-2xl p-5">
      <div className="text-blue-500">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">
          {label}
        </p>

        <p className="font-semibold dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );
}