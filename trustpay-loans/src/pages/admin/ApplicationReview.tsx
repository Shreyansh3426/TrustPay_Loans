import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  IndianRupee,
  CheckCircle,
  XCircle,
  FileText,
  Shield,
  Briefcase,
} from "lucide-react";

export default function ApplicationReview() {
  const [notes, setNotes] =
    useState("");

  const [status, setStatus] =
    useState("Under Review");

  return (
    <div className="space-y-8">

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
        <h1 className="text-4xl font-bold">
          Application Review
        </h1>

        <p className="mt-2 text-blue-100">
          Review applicant information before approval.
        </p>
      </div>

      {/* Status Summary */}
      <div className="grid md:grid-cols-4 gap-6">

        <SummaryCard
          title="Application ID"
          value="#TP-1024"
        />

        <SummaryCard
          title="Requested Loan"
          value="₹5,00,000"
        />

        <SummaryCard
          title="Credit Score"
          value="785"
        />

        <SummaryCard
          title="Status"
          value={status}
        />

      </div>

      {/* Applicant Info */}
      <div
        className="
        bg-white
        dark:bg-slate-900
        border
        border-slate-300
        dark:border-slate-800
        rounded-3xl
        p-8
        shadow-md
        "
      >
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Applicant Details
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <InfoCard
            icon={<User size={20} />}
            label="Name"
            value="Rahul Sharma"
          />

          <InfoCard
            icon={<Phone size={20} />}
            label="Phone"
            value="+91 9876543210"
          />

          <InfoCard
            icon={<Mail size={20} />}
            label="Email"
            value="rahul@gmail.com"
          />

          <InfoCard
            icon={<IndianRupee size={20} />}
            label="Requested Amount"
            value="₹5,00,000"
          />

          <InfoCard
            icon={<Briefcase size={20} />}
            label="Employment"
            value="Software Engineer"
          />

          <InfoCard
            icon={<Shield size={20} />}
            label="KYC Status"
            value="Verified"
          />

        </div>

      </div>

      {/* Documents */}
      <div
        className="
        bg-white
        dark:bg-slate-900
        border
        border-slate-300
        dark:border-slate-800
        rounded-3xl
        p-8
        shadow-md
        "
      >
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Uploaded Documents
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <DocumentItem
            name="Aadhaar Card"
          />

          <DocumentItem
            name="PAN Card"
          />

          <DocumentItem
            name="Salary Slip"
          />

          <DocumentItem
            name="Bank Statement"
          />

        </div>

      </div>

      {/* Risk Assessment */}
      <div
        className="
        bg-white
        dark:bg-slate-900
        border
        border-slate-300
        dark:border-slate-800
        rounded-3xl
        p-8
        shadow-md
        "
      >
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Risk Assessment
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <RiskCard
            title="Credit Score"
            value="785"
          />

          <RiskCard
            title="Debt Ratio"
            value="18%"
          />

          <RiskCard
            title="Employment"
            value="Salaried"
          />

        </div>

      </div>

      {/* Admin Notes */}
      <div
        className="
        bg-white
        dark:bg-slate-900
        border
        border-slate-300
        dark:border-slate-800
        rounded-3xl
        p-8
        shadow-md
        "
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-white">
          Admin Notes
        </h2>

        <textarea
          value={notes}
          onChange={(e) =>
            setNotes(
              e.target.value
            )
          }
          placeholder="Add review notes..."
          className="
          w-full
          h-40
          border
          border-slate-300
          dark:border-slate-700
          dark:bg-slate-800
          dark:text-white
          rounded-2xl
          p-4
          resize-none
          "
        />
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4">

        <button
          onClick={() =>
            setStatus(
              "Approved"
            )
          }
          className="
          bg-green-600
          hover:bg-green-700
          text-white
          px-8
          py-4
          rounded-xl
          font-semibold
          flex
          items-center
          gap-2
          hover:scale-105
          transition-all
          "
        >
          <CheckCircle size={20} />
          Approve Loan
        </button>

        <button
          onClick={() =>
            setStatus(
              "Rejected"
            )
          }
          className="
          bg-red-600
          hover:bg-red-700
          text-white
          px-8
          py-4
          rounded-xl
          font-semibold
          flex
          items-center
          gap-2
          hover:scale-105
          transition-all
          "
        >
          <XCircle size={20} />
          Reject Loan
        </button>

      </div>

    </div>
  );
}

function SummaryCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div
      className="
      bg-white
      dark:bg-slate-900
      border
      border-slate-300
      dark:border-slate-800
      rounded-3xl
      p-6
      shadow-md
      "
    >
      <p className="text-slate-500 dark:text-slate-400">
        {title}
      </p>

      <h3 className="text-2xl font-bold mt-2 dark:text-white">
        {value}
      </h3>
    </div>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className="
      border
      border-slate-200
      dark:border-slate-700
      rounded-2xl
      p-5
      "
    >
      <div className="flex items-center gap-2 text-[#001A4D] dark:text-blue-400">
        {icon}
        <span className="font-medium">
          {label}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-bold dark:text-white">
        {value}
      </h3>
    </div>
  );
}

function DocumentItem({
  name,
}: {
  name: string;
}) {
  return (
    <div
      className="
      border
      border-slate-200
      dark:border-slate-700
      rounded-2xl
      p-4
      flex
      justify-between
      items-center
      "
    >
      <div>
        <p className="dark:text-white">
          {name}
        </p>

        <p className="text-green-600 text-sm">
          Verified
        </p>
      </div>

      <button
        className="
        bg-[#001A4D]
        text-white
        px-3
        py-2
        rounded-xl
        text-sm
        hover:bg-[#002B7F]
        transition
        "
      >
        <FileText size={16} />
      </button>
    </div>
  );
}

function RiskCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div
      className="
      bg-slate-50
      dark:bg-slate-800
      border
      border-slate-200
      dark:border-slate-700
      rounded-2xl
      p-5
      "
    >
      <p className="text-slate-500 dark:text-slate-400">
        {title}
      </p>

      <h3 className="text-3xl font-bold mt-2 dark:text-white">
        {value}
      </h3>
    </div>
  );
}
