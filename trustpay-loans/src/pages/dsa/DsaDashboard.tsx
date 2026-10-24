import { useAuthStore } from "../../store/authStore";

const stats = [
  { label: "Assigned Leads", value: "24" },
  { label: "Applications", value: "9" },
  { label: "Pending Docs", value: "3" },
  { label: "Commission", value: "₹1.2L" },
];

export default function DsaDashboard() {
  const name = useAuthStore((state) => state.name) ?? "DSA Partner";

  return (
    <div className="min-h-screen bg-slate-100 p-6 text-slate-900 dark:bg-[#050816] dark:text-white">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex items-center justify-between rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-600">DSA portal</p>
            <h1 className="mt-2 text-3xl font-bold">Welcome back, {name}</h1>
          </div>
          <div className="rounded-xl bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700 dark:bg-blue-950/40 dark:text-blue-200">
            Active Partner ID: TP-DSA-104
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
              <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
              <p className="mt-3 text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900">
            <h2 className="text-xl font-semibold">Recent assignments</h2>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center justify-between rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                <span>Rohan Sharma</span>
                <span className="text-sm text-amber-600">Pending docs</span>
              </li>
              <li className="flex items-center justify-between rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                <span>Pooja Verma</span>
                <span className="text-sm text-green-600">Sanctioned</span>
              </li>
              <li className="flex items-center justify-between rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                <span>Rahul Nair</span>
                <span className="text-sm text-blue-600">In review</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900">
            <h2 className="text-xl font-semibold">Action needed</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
                3 customer documents need review.
              </div>
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-blue-800 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200">
                2 applications are awaiting lender response.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
