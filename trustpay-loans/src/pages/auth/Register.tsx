import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#08142b] flex items-center justify-center p-6">
      <div className="w-[380px] bg-white rounded-[40px] p-3 shadow-2xl">
        <div className="bg-white rounded-[32px] min-h-[720px] p-8">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-[#08142b] rounded-full mx-auto flex items-center justify-center text-white text-3xl">
              🛡️
            </div>

            <h1 className="text-2xl font-bold mt-6 text-black">
              Create Account
            </h1>

            <p className="text-gray-500 mt-2">
              Register with TrustPay
            </p>
          </div>

          <div className="space-y-4">
            <input
              placeholder="Full Name"
              className="w-full border rounded-xl p-4"
            />

            <input
              placeholder="Mobile Number"
              className="w-full border rounded-xl p-4"
            />

            <input
              placeholder="Email Address"
              className="w-full border rounded-xl p-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-xl p-4"
            />

            <button
              onClick={() => navigate("/dashboard")}
              className="w-full bg-[#08142b] text-white p-4 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Register
            </button>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={() => navigate("/login")}
              className="text-blue-600 hover:underline"
            >
              Already have an account?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}