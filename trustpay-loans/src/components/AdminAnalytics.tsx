import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Jan",
    applications: 120,
  },
  {
    month: "Feb",
    applications: 180,
  },
  {
    month: "Mar",
    applications: 250,
  },
  {
    month: "Apr",
    applications: 300,
  },
  {
    month: "May",
    applications: 420,
  },
];

export default function AdminAnalytics() {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
      <h2 className="text-xl font-bold mb-6">
        Application Analytics
      </h2>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Bar
              dataKey="applications"
              fill="#2563eb"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}