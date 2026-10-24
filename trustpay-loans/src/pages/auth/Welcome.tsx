import { useNavigate } from "react-router-dom";
import { User, Shield } from "lucide-react";
import TrustPayLogo from "../../components/TrustPayLogo";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#071533] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-700/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-700/10 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            <div className="flex justify-center lg:justify-start mb-10">
              <TrustPayLogo size="large" />
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              TrustPay Loans
            </h1>

            <p className="text-slate-300 text-lg md:text-xl mb-10">
              One Platform. Multiple Solutions.
            </p>

            <div className="space-y-4 text-slate-200 text-lg">
              <p>✓ Lead Management</p>
              <p>✓ Loan Origination</p>
              <p>✓ DSA Management</p>
              <p>✓ Customer Communication</p>
              <p>✓ Document Processing</p>
              <p>✓ Multi-Lender Integration</p>
              <p>✓ Disbursement Tracking</p>
              <p>✓ Renewals & Cross-Selling</p>
            </div>

          </div>

          {/* PHONE MOCKUP */}
          <div className="flex justify-center">
            <div className="w-[360px] bg-white rounded-[36px] p-3 shadow-2xl">

              <div className="bg-[#071533] rounded-[28px] min-h-[480px] p-8 flex flex-col">

                <div className="flex justify-center mb-8">
                  <TrustPayLogo size="small" />
                </div>

                <h2 className="text-center text-3xl font-bold mb-2">
                  Welcome
                </h2>

                <p className="text-center text-slate-300 mb-8">
                  Choose your account type
                </p>

                <button
                  onClick={() => navigate("/login")}
                  className="
                    bg-white
                    text-black
                    rounded-xl
                    py-4
                    font-semibold
                    mb-4
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  <div className="flex items-center justify-center gap-2">
                    <User size={18} />
                    I'm a User
                  </div>
                </button>

                <button
                  onClick={() => navigate("/register")}
                  className="
                    bg-blue-600
                    rounded-xl
                    py-4
                    font-semibold
                    hover:bg-blue-700
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  <div className="flex items-center justify-center gap-2">
                    <Shield size={18} />
                    I'm an Admin / DSA
                  </div>
                </button>

                <div className="mt-auto text-center">
                  <p className="text-xs text-slate-400">
                    © 2026 TrustPay. All rights reserved.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}