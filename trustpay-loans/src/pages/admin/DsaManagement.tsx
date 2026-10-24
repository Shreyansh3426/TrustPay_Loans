import { Users, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";

const dsas = [
  {
    id: 1,
    name: "ABC Finance",
    applications: 120,
    approvals: 78,
    commission: "₹1,25,000",
  },
  {
    id: 2,
    name: "XYZ Capital",
    applications: 98,
    approvals: 65,
    commission: "₹98,000",
  },
  {
    id: 3,
    name: "Trust Partners",
    applications: 75,
    approvals: 52,
    commission: "₹80,000",
  },
];

export default function DsaManagement() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="space-y-8"
    >
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
          DSA Management
        </h1>

        <p className="mt-2 text-blue-100">
          Manage partners and commissions.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">

        <Card
          title="Total DSAs"
          value="32"
          icon={<Users />}
        />

        <Card
          title="Applications"
          value="1,240"
          icon={<Users />}
        />

        <Card
          title="Commission Paid"
          value="₹12.4L"
          icon={<IndianRupee />}
        />

      </div>

      {/* Table */}
      <div
        className="
        bg-white
        dark:bg-slate-900
        border
        border-slate-300
        dark:border-slate-800
        rounded-3xl
        overflow-hidden
        shadow-md
        "
      >
        <table className="w-full">

          <thead>
            <tr
              className="
              bg-slate-50
              dark:bg-slate-800
              "
            >
              <th className="p-5 text-left">
                DSA Name
              </th>

              <th className="p-5 text-left">
                Applications
              </th>

              <th className="p-5 text-left">
                Approvals
              </th>

              <th className="p-5 text-left">
                Commission
              </th>
            </tr>
          </thead>

          <tbody>

            {dsas.map((dsa) => (
              <tr
                key={dsa.id}
                className="
                border-t
                border-slate-200
                dark:border-slate-700
                hover:bg-slate-50
                dark:hover:bg-slate-800
                transition
                "
              >
                <td className="p-5 dark:text-white">
                  {dsa.name}
                </td>

                <td className="p-5 dark:text-white">
                  {dsa.applications}
                </td>

                <td className="p-5 dark:text-white">
                  {dsa.approvals}
                </td>

                <td className="p-5 font-semibold text-green-600">
                  {dsa.commission}
                </td>
              </tr>
            ))}

          </tbody>

        </table>
      </div>
    </motion.div>
  );
}

function Card({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
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
      hover:-translate-y-2
      hover:shadow-xl
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

      <h3 className="text-3xl font-bold mt-2 dark:text-white">
        {value}
      </h3>
    </div>
  );
}