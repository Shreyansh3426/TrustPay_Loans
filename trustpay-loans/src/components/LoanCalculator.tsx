import { useState } from "react";
import {
  parseIndianAmount,
  formatIndianCurrency,
} from "../utils/amount";

export default function LoanCalculator() {
  const [amount, setAmount] =
    useState("");

  const [rate, setRate] =
    useState("");

  const [tenure, setTenure] =
    useState("");

  const calculateEMI = () => {
    const parsedAmount =
      parseIndianAmount(amount);

    const P = parsedAmount || 0;
    const R =
      Number(rate) / 12 / 100;
    const N = Number(tenure);

    if (!P || !R || !N)
      return 0;

    return Math.round(
      (P *
        R *
        Math.pow(1 + R, N)) /
        (Math.pow(1 + R, N) - 1)
    );
  };

  const emi = calculateEMI();

  return (
    <div
      className="
      bg-white
      dark:bg-slate-900
      border
      border-slate-200
      dark:border-slate-800
      rounded-3xl
      p-8
      shadow-sm
      "
    >
      <h2 className="text-2xl font-bold text-[#001A4D] dark:text-white">
        EMI Calculator
      </h2>

      <p className="text-slate-500 dark:text-slate-400 mt-2">
        Supports 25L, 2.5cr, 25 lakh, crore etc.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <div>
          <input
            placeholder="Loan Amount"
            value={amount}
            onChange={(e) =>
              setAmount(
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
            rounded-xl
            p-4
            "
          />

          {parseIndianAmount(
            amount
          ) && (
            <p className="mt-2 text-green-600 text-sm">
              {formatIndianCurrency(
                parseIndianAmount(
                  amount
                )!
              )}
            </p>
          )}
        </div>

        <input
          placeholder="Interest %"
          value={rate}
          onChange={(e) =>
            setRate(
              e.target.value
            )
          }
          className="
          border
          border-slate-300
          dark:border-slate-700
          dark:bg-slate-800
          dark:text-white
          rounded-xl
          p-4
          "
        />

        <input
          placeholder="Months"
          value={tenure}
          onChange={(e) =>
            setTenure(
              e.target.value
            )
          }
          className="
          border
          border-slate-300
          dark:border-slate-700
          dark:bg-slate-800
          dark:text-white
          rounded-xl
          p-4
          "
        />

      </div>

      <div
        className="
        mt-6
        bg-gradient-to-r
        from-[#001A4D]
        to-[#0047CC]
        text-white
        rounded-2xl
        p-6
        "
      >
        <p>Estimated EMI</p>

        <h3 className="text-4xl font-bold mt-2">
          {formatIndianCurrency(
            emi
          )}
        </h3>
      </div>
    </div>
  );
}