import { useState } from "react";
import {
  Users,
  CheckCircle,
  Clock3,
  IndianRupee,
  Search,
} from "lucide-react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("All Status");

  const applications = [
    {
      id: 1,
      name: "Rahul Sharma",
      amount: "₹5,00,000",
      status: "Approved",
    },
    {
      id: 2,
      name: "Priya Singh",
      amount: "₹8,50,000",
      status: "Pending",
    },
    {
      id: 3,
      name: "Aman Verma",
      amount: "₹12,00,000",
      status: "Review",
    },
    {
      id: 4,
      name: "Neha Gupta",
      amount: "₹4,50,000",
      status: "Approved",
    },
  ];

  const filteredApplications =
    applications.filter((app) => {
      const matchesSearch =
        app.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesStatus =
        statusFilter === "All Status"
          ? true
          : app.status === statusFilter;

      return (
        matchesSearch &&
        matchesStatus
      );
    });

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
          Admin Dashboard
        </h1>

        <p className="mt-2 text-blue-100">
          Manage applications,
          approvals and loan
          operations.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <StatCard
          icon={<Users size={26} />}
          title="Applications"
          value="1,245"
        />

        <StatCard
          icon={
            <CheckCircle size={26} />
          }
          title="Approved"
          value="876"
        />

        <StatCard
          icon={<Clock3 size={26} />}
          title="Pending Review"
          value="245"
        />

        <StatCard
          icon={
            <IndianRupee size={26} />
          }
          title="Disbursed"
          value="₹12.4 Cr"
        />
      </div>

      {/* Search */}
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
        <div className="flex flex-col md:flex-row gap-4">

          <div
            className="
            flex
            items-center
            gap-3
            border
            border-slate-300
            dark:border-slate-700
            rounded-xl
            px-4
            py-3
            flex-1
            "
          >
            <Search
              size={18}
              className="text-slate-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              placeholder="Search applications..."
              className="
              flex-1
              bg-transparent
              outline-none
              dark:text-white
              "
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(
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
            px-4
            py-3
            "
          >
            <option>
              All Status
            </option>

            <option>
              Approved
            </option>

            <option>
              Pending
            </option>

            <option>
              Review
            </option>

            <option>
              Rejected
            </option>
          </select>

        </div>
      </div>

      {/* Applications */}
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
        <h2
          className="
          text-2xl
          font-bold
          mb-6
          dark:text-white
          "
        >
          Recent Applications
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr
                className="
                border-b
                border-slate-200
                dark:border-slate-700
                "
              >
                <th className="text-left py-4">
                  Applicant
                </th>

                <th className="text-left py-4">
                  Loan Amount
                </th>

                <th className="text-left py-4">
                  Status
                </th>

                <th className="text-left py-4">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>

              {filteredApplications.length >
              0 ? (
                filteredApplications.map(
                  (app) => (
                    <tr
                      key={app.id}
                      className="
                      border-b
                      border-slate-100
                      dark:border-slate-800
                      hover:bg-slate-50
                      dark:hover:bg-slate-800
                      transition
                      "
                    >
                      <td className="py-4 dark:text-white">
                        {app.name}
                      </td>

                      <td className="py-4 dark:text-white">
                        {app.amount}
                      </td>

                      <td className="py-4">
                        <span
                          className={`
                          px-3
                          py-1
                          rounded-full
                          text-sm
                          font-medium
                          ${
                            app.status ===
                            "Approved"
                              ? "bg-green-100 text-green-700"
                              : app.status ===
                                "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                          }
                        `}
                        >
                          {app.status}
                        </span>
                      </td>

                      <td className="py-4">
                        <Link
                          to={`/admin/review/${app.id}`}
                          className="
                          bg-[#001A4D]
                          hover:bg-[#002B7F]
                          text-white
                          px-4
                          py-2
                          rounded-xl
                          inline-block
                          hover:scale-105
                          transition-all
                          "
                        >
                          Review
                        </Link>
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="
                    py-8
                    text-center
                    text-slate-500
                    "
                  >
                    No applications found
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* Bottom Stats */}
      <div className="grid md:grid-cols-2 gap-6">
        <MetricCard
          title="Approval Rate"
          value="70%"
          color="text-green-600"
        />

        <MetricCard
          title="Processing Time"
          value="2.4 Days"
          color="text-blue-600"
        />
      </div>
    </motion.div>
  );
}

function StatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
      <div className="text-[#001A4D] dark:text-blue-400 mb-4">
        {icon}
      </div>

      <p className="text-slate-500 dark:text-slate-400">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-2 dark:text-white">
        {value}
      </h2>
    </div>
  );
}

function MetricCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-8 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
      <p className="text-slate-500 dark:text-slate-400">
        {title}
      </p>

      <h2 className={`text-5xl font-bold mt-4 ${color}`}>
        {value}
      </h2>
    </div>
  );
}