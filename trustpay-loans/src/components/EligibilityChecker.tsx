import { useState } from "react";
import { CheckCircle } from "lucide-react";
import {
  parseIndianAmount,
  formatIndianCurrency,
} from "../utils/amount";

export default function EligibilityChecker() {
  const [income, setIncome] =
    useState("");

  const [emi, setEmi] =
    useState("");

  const [eligible, setEligible] =
    useState<number | null>(
      null
    );

  const calculateEligibility =
    () => {
      const monthlyIncome =
        parseIndianAmount(
          income
        ) || 0;

      const currentEmi =
        parseIndianAmount(
          emi
        ) || 0;

      const result =
        monthlyIncome * 40 -
        currentEmi * 12;

      setEligible(
        result > 0 ? result : 0
      );
    };

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
        Eligibility Checker
      </h2>

      <p className="text-slate-500 dark:text-slate-400 mt-2">
        Supports 25L, 2.5cr, 25 lakh etc.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-6">

        <div>
          <input
            value={income}
            onChange={(e) =>
              setIncome(
                e.target.value
              )
            }
            placeholder="Monthly Income"
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
            income
          ) && (
            <p className="mt-2 text-green-600 text-sm">
              {formatIndianCurrency(
                parseIndianAmount(
                  income
                )!
              )}
            </p>
          )}
        </div>

        <div>
          <input
            value={emi}
            onChange={(e) =>
              setEmi(
                e.target.value
              )
            }
            placeholder="Current EMI"
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
            emi
          ) && (
            <p className="mt-2 text-green-600 text-sm">
              {formatIndianCurrency(
                parseIndianAmount(
                  emi
                )!
              )}
            </p>
          )}
        </div>

      </div>

      <button
        onClick={
          calculateEligibility
        }
        className="
        mt-6
        bg-gradient-to-r
        from-[#001A4D]
        to-[#0047CC]
        text-white
        px-6
        py-3
        rounded-xl
        hover:scale-105
        transition-all
        "
      >
        Check Eligibility
      </button>

      {eligible !== null && (
        <div
          className="
          mt-6
          bg-green-50
          dark:bg-green-900/20
          border
          border-green-200
          dark:border-green-800
          rounded-2xl
          p-5
          "
        >
          <div className="flex gap-3 items-center">

            <CheckCircle className="text-green-600" />

            <div>

              <p className="text-slate-500 dark:text-slate-400">
                Estimated Eligibility
              </p>

              <h3 className="text-3xl font-bold text-green-700 dark:text-green-400">
                {formatIndianCurrency(
                  eligible
                )}
              </h3>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}