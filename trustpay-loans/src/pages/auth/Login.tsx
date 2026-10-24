import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export default function Login() {
  const navigate = useNavigate();

  const login = useAuthStore(
    (state) => state.login
  );

  const [role, setRole] = useState<
    "user" | "admin" | "dsa"
  >("user");

  const handleLogin = () => {
    login(role, "Shreyansh");

    if (role === "admin") {
      navigate("/admin");
      return;
    }

    if (role === "dsa") {
      navigate("/dsa");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#08142b] flex items-center justify-center p-6">

      <div className="w-[420px] bg-white rounded-[40px] p-3 shadow-2xl">

        <div className="bg-white rounded-[32px] min-h-[760px] p-8">

          {/* Avatar */}
          <div className="text-center mb-10">

            <div className="w-20 h-20 bg-[#08142b] rounded-full mx-auto flex items-center justify-center text-white text-3xl">
              👤
            </div>

            <h1 className="text-3xl font-bold mt-6 text-black">
              TrustPay Login
            </h1>

            <p className="text-gray-500 mt-2">
              Login to continue
            </p>

          </div>

          {/* Role Selector */}
          <div className="mb-6">

            <label className="block text-sm font-medium mb-2">
              Login As
            </label>

            <select
              value={role}
              onChange={(e) =>
                setRole(
                  e.target.value as
                    | "user"
                    | "admin"
                    | "dsa"
                )
              }
              className="
              w-full
              border
              rounded-xl
              p-4
              "
            >
              <option value="user">
                Customer
              </option>

              <option value="admin">
                Admin
              </option>

              <option value="dsa">
                DSA Partner
              </option>

            </select>

          </div>

          {/* Inputs */}
          <div className="space-y-4">

            <input
              type="email"
              placeholder="Email Address"
              className="
              w-full
              border
              rounded-xl
              p-4
              "
            />

            <input
              type="password"
              placeholder="Password"
              className="
              w-full
              border
              rounded-xl
              p-4
              "
            />

            <button
              onClick={handleLogin}
              className="
              w-full
              bg-[#08142b]
              text-white
              p-4
              rounded-xl
              font-semibold
              hover:bg-[#002B7F]
              transition
              "
            >
              Login
            </button>

          </div>

          {/* Register */}
          <div className="text-center mt-6">

            <button
              onClick={() =>
                navigate("/register")
              }
              className="
              text-blue-600
              hover:underline
              "
            >
              Create Account
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}