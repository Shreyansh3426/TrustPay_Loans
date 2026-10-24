import { useState } from "react";
import {
  Briefcase,
  Home,
  GraduationCap,
  Building2,
} from "lucide-react";

export default function ApplyLoan() {
  const [selectedLoan, setSelectedLoan] =
    useState("Personal Loan");

  const [loanAmount, setLoanAmount] =
    useState("");

  const [monthlyIncome, setMonthlyIncome] =
    useState("");

  const loans = [
    {
      name: "Personal Loan",
      icon: <Briefcase size={32} />,
      amount: "Up to ₹25 Lakhs",
    },
    {
      name: "Home Loan",
      icon: <Home size={32} />,
      amount: "Up to ₹2 Crore",
    },
    {
      name: "Business Loan",
      icon: <Building2 size={32} />,
      amount: "Up to ₹50 Lakhs",
    },
    {
      name: "Education Loan",
      icon: <GraduationCap size={32} />,
      amount: "Up to ₹40 Lakhs",
    },
  ];

  const parseIndianAmount = (
    value: string
  ): number | null => {
    if (!value) return null;

    const input = value
      .toLowerCase()
      .trim()
      .replace(/,/g, "");

    let multiplier = 1;

    if (
      input.includes("crore") ||
      input.includes("crores") ||
      input.includes("cr")
    ) {
      multiplier = 10000000;
    } else if (
      input.includes("lakh") ||
      input.includes("lakhs") ||
      input.endsWith("l")
    ) {
      multiplier = 100000;
    } else if (
      input.includes("thousand") ||
      input.endsWith("k")
    ) {
      multiplier = 1000;
    }

    const numericPart = parseFloat(
      input.replace(/[^\d.]/g, "")
    );

    if (isNaN(numericPart))
      return null;

    const amount =
      numericPart * multiplier;

    if (amount < 0)
      return null;

    if (amount > 1000000000)
      return null;

    return amount;
  };

  const formatIndianCurrency = (
    amount: number
  ) => {
    return new Intl.NumberFormat(
      "en-IN",
      {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }
    ).format(amount);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">

      {/* Header */}
      <div
        className="
        bg-gradient-to-r
        from-[#001A4D]
        to-[#002B7F]
        rounded-3xl
        p-8
        shadow-xl
        text-white
        "
      >
        <h1 className="text-4xl font-bold">
          Apply For Loan
        </h1>

        <p className="text-blue-100 mt-2">
          Fast approvals. Minimal paperwork.
        </p>
      </div>

      {/* Loan Types */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {loans.map((loan) => (
          <div
            key={loan.name}
            onClick={() =>
              setSelectedLoan(
                loan.name
              )
            }
            className={`
              cursor-pointer
              rounded-3xl
              p-6
              border
              shadow-md
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-xl

              ${
                selectedLoan ===
                loan.name
                  ? "bg-[#001A4D] text-white border-[#001A4D]"
                  : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-800 dark:text-white"
              }
            `}
          >
            <div className="mb-4">
              {loan.icon}
            </div>

            <h3 className="font-bold text-xl">
              {loan.name}
            </h3>

            <p
              className={`mt-2 text-sm ${
                selectedLoan ===
                loan.name
                  ? "text-blue-200"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              {loan.amount}
            </p>
          </div>
        ))}

      </div>

      {/* Form */}
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
          {selectedLoan}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            placeholder="Full Name"
            className="
            border
            border-slate-300
            dark:border-slate-700
            dark:bg-slate-800
            dark:text-white
            rounded-2xl
            p-4
            "
          />

          <input
            placeholder="Phone Number"
            className="
            border
            border-slate-300
            dark:border-slate-700
            dark:bg-slate-800
            dark:text-white
            rounded-2xl
            p-4
            "
          />

          <input
            placeholder="Email Address"
            className="
            border
            border-slate-300
            dark:border-slate-700
            dark:bg-slate-800
            dark:text-white
            rounded-2xl
            p-4
            "
          />

          <div>
            <input
              placeholder="Monthly Income (50k, 1l etc)"
              value={monthlyIncome}
              onChange={(e) =>
                setMonthlyIncome(
                  e.target.value
                )
              }
              className="
              w-full
              border
              border-slate-300
              dark:border-slate-700
              dark:bg-slate-800
              dark:text-white
              rounded-2xl
              p-4
              "
            />

            {parseIndianAmount(
              monthlyIncome
            ) && (
              <p className="mt-2 text-green-600 text-sm">
                {formatIndianCurrency(
                  parseIndianAmount(
                    monthlyIncome
                  )!
                )}
              </p>
            )}
          </div>

          <div>
            <input
              placeholder="Loan Amount (25L, 2.5cr, 50k)"
              value={loanAmount}
              onChange={(e) =>
                setLoanAmount(
                  e.target.value
                )
              }
              className="
              w-full
              border
              border-slate-300
              dark:border-slate-700
              dark:bg-slate-800
              dark:text-white
              rounded-2xl
              p-4
              "
            />

            {parseIndianAmount(
              loanAmount
            ) && (
              <p className="mt-2 text-green-600 text-sm font-medium">
                {formatIndianCurrency(
                  parseIndianAmount(
                    loanAmount
                  )!
                )}
              </p>
            )}
          </div>

          <select
            className="
            border
            border-slate-300
            dark:border-slate-700
            dark:bg-slate-800
            dark:text-white
            rounded-2xl
            p-4
            "
          >
            <option>12 Months</option>
            <option>24 Months</option>
            <option>36 Months</option>
            <option>60 Months</option>
          </select>

        </div>

        <button
          className="
          mt-8
          bg-gradient-to-r
          from-[#001A4D]
          to-[#0047CC]
          text-white
          px-8
          py-4
          rounded-2xl
          font-semibold
          hover:scale-105
          transition-all
          duration-300
          "
        >
          Continue Application →
        </button>

      </div>

      {/* Eligibility */}
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
        <h2 className="text-2xl font-bold text-[#001A4D] dark:text-white">
          Estimated Eligibility
        </h2>

        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Based on your profile,
          you may be eligible for
          loans up to:
        </p>

        <h3 className="text-4xl font-bold mt-4 text-green-600">
          ₹15,00,000
        </h3>
      </div>

    </div>
  );
}
