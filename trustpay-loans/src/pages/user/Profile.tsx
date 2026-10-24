import {
  User,
  Mail,
  Phone,
  CreditCard,
  ShieldCheck,
  Building,
  Edit,
} from "lucide-react";

export default function Profile() {
  return (
    <div className="space-y-8 text-slate-900 dark:text-white bg-slate-50 dark:bg-[#050816] rounded-3xl p-2">

      {/* Header */}
      <div
        className="
        bg-gradient-to-r
        from-[#001A4D]
        to-[#002B7F]
        rounded-3xl
        p-8
        text-white
        shadow-xl
        "
      >
        <div className="flex flex-col md:flex-row md:items-center gap-6">

          <div
            className="
            w-24
            h-24
            rounded-full
            bg-white
            text-[#001A4D]
            flex
            items-center
            justify-center
            shadow-lg
            "
          >
            <User size={40} />
          </div>

          <div>

            <h1 className="text-4xl font-bold">
              Rahul Sharma
            </h1>

            <p className="text-blue-100 mt-2">
              Premium Customer
            </p>

          </div>

        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">

        <StatCard
          title="Credit Score"
          value="782"
        />

        <StatCard
          title="Loans Active"
          value="1"
        />

        <StatCard
          title="KYC Status"
          value="Verified"
        />

      </div>

      {/* Details */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* Personal Information */}
        <div
          className="
          bg-slate-100
          dark:bg-[#0f172a]
          border
          border-slate-200
          dark:border-slate-700
          rounded-3xl
          p-8
          shadow-md
          hover:shadow-xl
          transition-all
          "
        >
          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Personal Information
            </h2>

            <button className="hover:text-blue-500 transition">
              <Edit size={18} />
            </button>

          </div>

          <div className="space-y-5">

            <InfoRow
              icon={<User size={18} />}
              label="Full Name"
              value="Rahul Sharma"
            />

            <InfoRow
              icon={<Mail size={18} />}
              label="Email"
              value="rahul@email.com"
            />

            <InfoRow
              icon={<Phone size={18} />}
              label="Phone"
              value="+91 9876543210"
            />

          </div>

        </div>

        {/* Bank Details */}
        <div
          className="
          bg-slate-100
          dark:bg-[#0f172a]
          border
          border-slate-200
          dark:border-slate-700
          rounded-3xl
          p-8
          shadow-md
          hover:shadow-xl
          transition-all
          "
        >
          <h2 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
            Bank Details
          </h2>

          <div className="space-y-5">

            <InfoRow
              icon={<Building size={18} />}
              label="Bank"
              value="HDFC Bank"
            />

            <InfoRow
              icon={<CreditCard size={18} />}
              label="Account"
              value="XXXX XXXX 4582"
            />

            <InfoRow
              icon={<ShieldCheck size={18} />}
              label="KYC"
              value="Verified"
            />

          </div>

        </div>

      </div>

      {/* Loan History */}
      <div
        className="
        bg-slate-100
        dark:bg-[#0f172a]
        border
        border-slate-200
        dark:border-slate-700
        rounded-3xl
        p-8
        shadow-md
        "
      >
        <h2 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
          Loan History
        </h2>

        <div className="space-y-4">

          <HistoryRow
            loan="Personal Loan"
            amount="₹5,00,000"
            status="Approved"
          />

          <HistoryRow
            loan="Education Loan"
            amount="₹3,00,000"
            status="Closed"
          />

        </div>

      </div>

    </div>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div
      className="
      bg-slate-100
      dark:bg-[#0f172a]
      border
      border-slate-200
      dark:border-slate-700
      rounded-3xl
      p-6
      shadow-md
      hover:-translate-y-1
      hover:shadow-xl
      hover:border-blue-500
      transition-all
      "
    >
      <p className="text-slate-500 dark:text-slate-400">
        {title}
      </p>

      <h3 className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">
        {value}
      </h3>
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
    <div className="flex gap-4 items-center">

      <div className="text-[#001A4D] dark:text-blue-400">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {label}
        </p>

        <p className="font-medium text-slate-800 dark:text-white">
          {value}
        </p>
      </div>

    </div>
  );
}

function HistoryRow({
  loan,
  amount,
  status,
}: {
  loan: string;
  amount: string;
  status: string;
}) {
  return (
    <div
      className="
      flex
      justify-between
      items-center
      border
      border-slate-200
      dark:border-slate-700
      rounded-xl
      p-4
      hover:border-blue-500
      transition-all
      "
    >
      <div>

        <p className="font-medium text-slate-900 dark:text-white">
          {loan}
        </p>

        <p className="text-slate-500 dark:text-slate-400 text-sm">
          {amount}
        </p>

      </div>

      <span
        className="
        bg-green-100
        dark:bg-green-900/30
        text-green-700
        dark:text-green-400
        px-3
        py-1
        rounded-full
        text-sm
        "
      >
        {status}
      </span>
    </div>
  );
}
