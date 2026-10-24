export default function SupportWidget() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <p className="text-sm font-semibold text-slate-900 dark:text-white">Need help?</p>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        Contact the TrustPay support desk for application and document assistance.
      </p>
      <button className="mt-3 rounded-lg bg-[#08142b] px-3 py-2 text-sm font-medium text-white hover:bg-[#002B7F]">
        Contact support
      </button>
    </div>
  );
}
