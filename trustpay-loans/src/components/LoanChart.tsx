import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", amount: 100000 },
  { month: "Feb", amount: 180000 },
  { month: "Mar", amount: 250000 },
  { month: "Apr", amount: 320000 },
  { month: "May", amount: 400000 },
  { month: "Jun", amount: 500000 },
];

export default function LoanChart() {
  return (
    <div
      className="
      bg-white
      border
      border-slate-300
      rounded-3xl
      p-6
      shadow-md
      "
    >
      <div className="mb-6">

        <h2 className="text-xl font-semibold text-slate-900">
          Loan Growth
        </h2>

        <p className="text-slate-500 text-sm mt-1">
          Loan value growth over the last 6 months
        </p>

      </div>

      <div className="h-[320px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E2E8F0"
            />

            <XAxis
              dataKey="month"
              tick={{
                fill: "#64748B",
                fontSize: 12,
              }}
              axisLine={{
                stroke: "#CBD5E1",
              }}
            />

            <YAxis
              tick={{
                fill: "#64748B",
                fontSize: 12,
              }}
              axisLine={{
                stroke: "#CBD5E1",
              }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #CBD5E1",
                backgroundColor: "#FFFFFF",
                color: "#111827",
              }}
            />

            <Line
              type="monotone"
              dataKey="amount"
              stroke="#001A4D"
              strokeWidth={4}
              dot={{
                fill: "#001A4D",
                strokeWidth: 2,
                r: 5,
              }}
              activeDot={{
                r: 7,
              }}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
}