export default function Navbar() {
  return (
    <div className="h-16 border-b border-slate-800 bg-slate-950 flex items-center justify-between px-6">
      <div>
        <h2 className="text-xl font-semibold text-white">
          TrustPay Loans
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white outline-none"
        />

        <button className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold">
          S
        </button>
      </div>
    </div>
  );
}