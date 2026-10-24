
import {
  CheckCircle2,
  Clock3,
  IndianRupee,
  Calendar,
  FileCheck,
} from "lucide-react";

export default function LoanStatus() {
  const steps = [
    {
      title: "Application Submitted",
      date: "10 Jun 2026",
      done: true,
    },
    {
      title: "Documents Verified",
      date: "11 Jun 2026",
      done: true,
    },
    {
      title: "Credit Assessment",
      date: "12 Jun 2026",
      done: true,
    },
    {
      title: "Bank Review",
      date: "In Progress",
      done: false,
    },
    {
      title: "Loan Disbursement",
      date: "Pending",
      done: false,
    },
  ];

  return (
    <div className="space-y-8">

      {/* Hero */}
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
          Loan Tracker
        </h1>

        <p className="text-blue-100 mt-2">
          Monitor your loan application progress in real time.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">

        <StatusCard
          icon={
            <IndianRupee
              size={28}
            />
          }
          title="Loan Amount"
          value="₹5,00,000"
        />

        <StatusCard
          icon={
            <Calendar
              size={28}
            />
          }
          title="Expected Approval"
          value="18 Jun"
        />

        <StatusCard
          icon={
            <FileCheck
              size={28}
            />
          }
          title="Current Status"
          value="Under Review"
          green
        />

      </div>

      {/* Progress */}
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
        <div className="flex justify-between mb-4">

          <h2 className="font-bold text-xl dark:text-white">
            Application Progress
          </h2>

          <span className="font-semibold dark:text-white">
            68%
          </span>

        </div>

        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">

          <div
            className="
            h-4
            rounded-full
            bg-gradient-to-r
            from-[#001A4D]
            to-[#0047CC]
            transition-all
            duration-1000
            "
            style={{
              width: "68%",
            }}
          />

        </div>

      </div>

      {/* Timeline */}
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
        <h2 className="text-2xl font-bold mb-8 dark:text-white">
          Application Timeline
        </h2>

        <div className="space-y-8">

          {steps.map(
            (
              step,
              index
            ) => (
              <div
                key={
                  step.title
                }
                className="flex gap-5"
              >
                <div className="flex flex-col items-center">

                  {step.done ? (
                    <CheckCircle2
                      size={30}
                      className="text-green-500"
                    />
                  ) : (
                    <Clock3
                      size={30}
                      className="text-amber-500"
                    />
                  )}

                  {index !==
                    steps.length -
                      1 && (
                    <div
                      className="
                      w-[2px]
                      h-16
                      bg-slate-200
                      dark:bg-slate-700
                      mt-2
                      "
                    />
                  )}

                </div>

                <div>

                  <h3 className="font-semibold text-lg dark:text-white">
                    {step.title}
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400 mt-1">
                    {step.date}
                  </p>

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}

function StatusCard({
  icon,
  title,
  value,
  green = false,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  green?: boolean;
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
      hover:-translate-y-1
      hover:shadow-xl
      hover:border-blue-500
      transition-all
      "
    >
      <div
        className={
          green
            ? "text-green-500 mb-3"
            : "text-[#001A4D] dark:text-blue-400 mb-3"
        }
      >
        {icon}
      </div>

      <p className="text-slate-500 dark:text-slate-400">
        {title}
      </p>

      <h3
        className={
          green
            ? "text-2xl font-bold mt-2 text-green-500"
            : "text-3xl font-bold mt-2 dark:text-white"
        }
      >
        {value}
      </h3>
    </div>
  );
}
