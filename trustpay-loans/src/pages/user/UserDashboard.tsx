import {
  CreditCard,
  IndianRupee,
  Clock,
  CheckCircle,
  ArrowRight,
  FileText,
  Upload,
  Headphones,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import LoanChart from "../../components/LoanChart";
import LoanCalculator from "../../components/LoanCalculator";
import EligibilityChecker from "../../components/EligibilityChecker";

export default function UserDashboard() {
  const navigate = useNavigate();

  const openSupport = () => {
    const button = document.querySelector(
      "[data-support-trigger]"
    ) as HTMLButtonElement | null;

    button?.click();
  };

  return (
    <div className="space-y-8 bg-slate-50 dark:bg-[#050816] rounded-3xl p-2">

      {/* Welcome Banner */}
      <div
        className="
        bg-gradient-to-r
        from-[#001A4D]
        to-[#002B7F]
        rounded-3xl
        p-8
        shadow-xl
        text-white
        transition-all
        duration-300
        hover:shadow-2xl
        "
      >
        <p className="text-blue-200 mb-2">
          Welcome Back
        </p>

        <h1 className="text-4xl font-bold">
          Shreyansh
        </h1>

        <p className="mt-3 text-blue-100">
          Manage loans, documents, repayments and
          applications from one place.
        </p>

        <button
          onClick={() =>
            navigate("/loan-status")
          }
          className="
          mt-6
          bg-white
          text-[#001A4D]
          px-5
          py-3
          rounded-xl
          font-semibold
          flex
          items-center
          gap-2
          hover:scale-105
          transition-all
          duration-300
          "
        >
          View Loan Details
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">

        <Card
          icon={<CreditCard />}
          title="Active Loans"
          value="1"
        />

        <Card
          icon={<IndianRupee />}
          title="Loan Amount"
          value="₹5,00,000"
        />

        <Card
          icon={<Clock />}
          title="Next EMI"
          value="₹12,500"
        />

        <Card
          icon={<CheckCircle />}
          title="Status"
          value="Approved"
        />

      </div>

      {/* Quick Actions */}
      <div>

        <h2 className="text-xl font-semibold mb-4 dark:text-white">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <ActionCard
            icon={<FileText size={22} />}
            title="Apply Loan"
            onClick={() =>
              navigate("/apply-loan")
            }
          />

          <ActionCard
            icon={<Upload size={22} />}
            title="Upload Documents"
            onClick={() =>
              navigate("/documents")
            }
          />

          <ActionCard
            icon={<Clock size={22} />}
            title="Track Loan"
            onClick={() =>
              navigate("/loan-status")
            }
          />

          <ActionCard
            icon={<Headphones size={22} />}
            title="Support"
            onClick={openSupport}
          />

        </div>

      </div>

      {/* Smart Loan Tools */}
      <div>

        <h2 className="text-xl font-semibold mb-4 dark:text-white">
          Smart Loan Tools
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">

          <LoanCalculator />

          <EligibilityChecker />

        </div>

      </div>

      {/* Progress */}
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
        <div className="flex justify-between mb-4">

          <h2 className="text-xl font-semibold dark:text-white">
            Loan Progress
          </h2>

          <span className="font-semibold dark:text-white">
            68%
          </span>

        </div>

        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">

          <div
            className="
            h-full
            bg-gradient-to-r
            from-[#001A4D]
            to-[#0047CC]
            rounded-full
            w-[68%]
            transition-all
            duration-1000
            "
          />

        </div>

      </div>

      {/* Chart */}
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
        transition-all
        duration-300
        hover:scale-[1.01]
        "
      >
        <LoanChart />
      </div>

    </div>
  );
}

function Card({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
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
      hover:-translate-y-2
      hover:shadow-xl
      hover:border-blue-600
      transition-all
      duration-300
      "
    >
      <div className="text-[#001A4D] dark:text-blue-400 mb-4">
        {icon}
      </div>

      <p className="text-slate-500 dark:text-slate-400">
        {title}
      </p>

      <h3 className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">
        {value}
      </h3>
    </div>
  );
}

function ActionCard({
  icon,
  title,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="
      bg-slate-100
      dark:bg-[#0f172a]
      border
      border-slate-200
      dark:border-slate-700
      rounded-2xl
      p-6
      text-left
      shadow-md
      hover:-translate-y-2
      hover:shadow-xl
      hover:border-blue-600
      dark:hover:bg-slate-800
      transition-all
      duration-300
      "
    >
      <div className="text-[#001A4D] dark:text-blue-400 mb-3">
        {icon}
      </div>

      <h3 className="font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>
    </button>
  );
}