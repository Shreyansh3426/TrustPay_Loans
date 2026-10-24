import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  FileText,
} from "lucide-react";

const applications = [
  {
    id: 1,
    name: "Rahul Sharma",
    type: "Personal Loan",
    amount: "₹5,00,000",
    status: "Approved",
    date: "14 Jun 2026",
  },
  {
    id: 2,
    name: "Priya Singh",
    type: "Home Loan",
    amount: "₹25,00,000",
    status: "Pending",
    date: "15 Jun 2026",
  },
  {
    id: 3,
    name: "Aman Verma",
    type: "Business Loan",
    amount: "₹12,00,000",
    status: "Review",
    date: "15 Jun 2026",
  },
  {
    id: 4,
    name: "Neha Gupta",
    type: "Education Loan",
    amount: "₹8,00,000",
    status: "Approved",
    date: "16 Jun 2026",
  },
];

export default function Applications() {
  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("All");

  const filtered =
    applications.filter((app) => {
      const matchSearch =
        app.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchStatus =
        status === "All"
          ? true
          : app.status === status;

      return (
        matchSearch &&
        matchStatus
      );
    });

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
          Applications
        </h1>

        <p className="mt-2 text-blue-100">
          Review and manage all loan applications.
        </p>
      </div>

      {/* Search + Filter */}
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
              placeholder="Search applications..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="
              flex-1
              outline-none
              bg-transparent
              dark:text-white
              "
            />
          </div>

          <select
            value={status}
            onChange={(e) =>
              setStatus(
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
            <option>All</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Review</option>
          </select>

        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">

        <StatCard
          title="Total"
          value="1,245"
        />

        <StatCard
          title="Approved"
          value="876"
        />

        <StatCard
          title="Pending"
          value="245"
        />

        <StatCard
          title="Review"
          value="124"
        />

      </div>

      {/* Desktop Table */}
<div
  className="
  hidden
  lg:block
  bg-white
  dark:bg-slate-900
  border
  border-slate-300
  dark:border-slate-800
  rounded-3xl
  shadow-md
  overflow-hidden
  "
>
  <div className="overflow-x-auto">

    <table className="w-full">

      <thead>
        <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">

          <th className="p-5 text-left">
            Applicant
          </th>

          <th className="p-5 text-left">
            Loan Type
          </th>

          <th className="p-5 text-left">
            Amount
          </th>

          <th className="p-5 text-left">
            Date
          </th>

          <th className="p-5 text-left">
            Status
          </th>

          <th className="p-5 text-left">
            Action
          </th>

        </tr>
      </thead>

      <tbody>

        {filtered.map(
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
              <td className="p-5 dark:text-white">
                {app.name}
              </td>

              <td className="p-5 dark:text-white">
                {app.type}
              </td>

              <td className="p-5 dark:text-white">
                {app.amount}
              </td>

              <td className="p-5 dark:text-white">
                {app.date}
              </td>

              <td className="p-5">

                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-medium
                    ${
                      app.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : app.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }
                  `}
                >
                  {app.status}
                </span>

              </td>

              <td className="p-5">

                <Link
                  to={`/admin/review/${app.id}`}
                  className="
                  bg-[#001A4D]
                  hover:bg-[#002B7F]
                  text-white
                  px-4
                  py-2
                  rounded-xl
                  inline-flex
                  items-center
                  gap-2
                  hover:scale-105
                  transition-all
                  "
                >
                  <FileText size={16} />
                  Review
                </Link>

              </td>

            </tr>
          )
        )}

      </tbody>

    </table>

  </div>
</div>

{/* Mobile Cards */}
<div className="lg:hidden space-y-4">

  {filtered.map((app) => (
    <div
      key={app.id}
      className="
      bg-white
      dark:bg-slate-900
      border
      border-slate-300
      dark:border-slate-800
      rounded-3xl
      p-5
      shadow-md
      "
    >
      <div className="flex justify-between items-start">

        <div>

          <h3 className="font-bold text-lg dark:text-white">
            {app.name}
          </h3>

          <p className="text-slate-500 text-sm">
            {app.type}
          </p>

        </div>

        <span
          className={`
          px-3
          py-1
          rounded-full
          text-sm
          font-medium
          ${
            app.status === "Approved"
              ? "bg-green-100 text-green-700"
              : app.status === "Pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-blue-100 text-blue-700"
          }
          `}
        >
          {app.status}
        </span>

      </div>

      <div className="mt-4">

        <p className="text-2xl font-bold dark:text-white">
          {app.amount}
        </p>

        <p className="text-slate-500 text-sm mt-1">
          {app.date}
        </p>

      </div>

      <Link
        to={`/admin/review/${app.id}`}
        className="
        mt-5
        w-full
        bg-[#001A4D]
        hover:bg-[#002B7F]
        text-white
        py-3
        rounded-2xl
        flex
        items-center
        justify-center
        gap-2
        transition-all
        "
      >
        <FileText size={18} />
        Review Application
      </Link>

    </div>
  ))}

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
      transition-all
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
