import { motion } from "framer-motion";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const applicationData = [
  { month: "Jan", value: 120 },
  { month: "Feb", value: 180 },
  { month: "Mar", value: 240 },
  { month: "Apr", value: 320 },
  { month: "May", value: 450 },
  { month: "Jun", value: 520 },
];

const approvalData = [
  { month: "Jan", value: 80 },
  { month: "Feb", value: 120 },
  { month: "Mar", value: 160 },
  { month: "Apr", value: 210 },
  { month: "May", value: 320 },
  { month: "Jun", value: 390 },
];

const loanTypeData = [
  { name: "Personal", value: 35 },
  { name: "Home", value: 30 },
  { name: "Business", value: 20 },
  { name: "Education", value: 15 },
];

const COLORS = [
  "#3B82F6",
  "#60A5FA",
  "#93C5FD",
  "#BFDBFE",
];

export default function Analytics() {
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
          Analytics Dashboard
        </h1>

        <p className="mt-2 text-blue-100">
          Business insights and platform performance.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <StatCard title="Applications" value="1,245" />
        <StatCard title="Approved" value="876" />
        <StatCard title="Approval Rate" value="70%" />
        <StatCard title="Revenue" value="₹12.4 Cr" />
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">

        <ChartCard title="Applications Trend">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <LineChart data={applicationData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="value"
                stroke="#3B82F6"
                strokeWidth={4}
                dot={{ r: 5 }}
                activeDot={{ r: 8 }}
                isAnimationActive
                animationDuration={1500}
              />
            </LineChart>
          </ResponsiveContainer>

        </ChartCard>

        <ChartCard title="Approval Trend">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <BarChart data={approvalData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="value"
                fill="#60A5FA"
                radius={[12, 12, 0, 0]}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>

        </ChartCard>

      </div>

      {/* Revenue + Pie */}
      <div className="grid lg:grid-cols-2 gap-6">

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
          hover:shadow-xl
          transition-all
          "
        >
          <h2 className="text-2xl font-bold mb-8 dark:text-white">
            Revenue Breakdown
          </h2>

          <div className="space-y-6">

            <RevenueRow
              label="Processing Fees"
              amount="₹4.8 Cr"
            />

            <RevenueRow
              label="Interest Revenue"
              amount="₹5.6 Cr"
            />

            <RevenueRow
              label="Partner Revenue"
              amount="₹2.0 Cr"
            />

            <RevenueRow
              label="Insurance Revenue"
              amount="₹0.8 Cr"
            />

          </div>

        </div>

        <ChartCard title="Loan Distribution">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>

              <Pie
                data={loanTypeData}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={120}
                paddingAngle={5}
                animationDuration={2000}
              >
                {loanTypeData.map(
                  (_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  )
                )}
              </Pie>

              <Tooltip />
              <Legend />

            </PieChart>
          </ResponsiveContainer>

        </ChartCard>

      </div>

      {/* Bottom Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        <MetricCard
          title="Average Processing Time"
          value="2.4 Days"
          color="text-blue-600"
        />

        <MetricCard
          title="Customer Satisfaction"
          value="94%"
          color="text-green-600"
        />

        <MetricCard
          title="Loan Default Rate"
          value="1.2%"
          color="text-red-500"
        />

      </div>

    </motion.div>
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
      hover:-translate-y-2
      hover:shadow-xl
      transition-all
      duration-300
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

function ChartCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
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
      duration-300
      "
    >
      <h2 className="text-xl font-bold mb-6 dark:text-white">
        {title}
      </h2>

      <div className="h-[320px]">
        {children}
      </div>
    </div>
  );
}

function RevenueRow({
  label,
  amount,
}: {
  label: string;
  amount: string;
}) {
  return (
    <div className="flex justify-between">
      <span className="text-slate-500 dark:text-slate-400">
        {label}
      </span>

      <span className="font-semibold dark:text-white">
        {amount}
      </span>
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
      hover:-translate-y-2
      hover:shadow-xl
      transition-all
      duration-300
      "
    >
      <p className="text-slate-500 dark:text-slate-400">
        {title}
      </p>

      <h2 className={`text-5xl font-bold mt-4 ${color}`}>
        {value}
      </h2>
    </div>
  );
}
