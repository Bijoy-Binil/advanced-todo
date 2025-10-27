import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginPage = () => {
  const baseUrl = "http://127.0.0.1:8000/api/";
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
const navigate=useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = { username, password };

    try {
      // ✅ 1. Get JWT tokens
      const tokenRes = await axios.post(`${baseUrl}token/`, userData);
      localStorage.setItem("access", tokenRes.data.access);
      localStorage.setItem("refresh", tokenRes.data.refresh);

      // ✅ 2. Login verification
      const loginRes = await axios.post(`${baseUrl}login/`, userData);
      localStorage.setItem("username", loginRes.data.user);
      localStorage.setItem("isLoggedIn", loginRes.data.user_login);
      navigate("/dashboard")
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: `Welcome back, ${loginRes.data.user}`,
        timer: 800,
        showConfirmButton: false,
      });

      console.log("Login success:", loginRes.data);
    } catch (error) {
      console.error("Login error:", error);

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text:
          error.response?.data?.detail ||
          error.response?.data?.user ||
          "Invalid credentials, please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex mr-70 flex-col md:flex-row min-h-screen bg-linear-to-br">
      <div className="flex flex-col flex-1 md:ml-64 items-center pt-12 px-4">
        <div className="bg-linear-to-br from-[#060b28f0] to-[#0a0e234d] backdrop-blur-lg rounded-3xl shadow-xl p-5 sm:p-8 w-full max-w-md border-0 relative text-white">
          <h2 className="text-2xl font-semibold mb-2 text-center">
            Login to your account
          </h2>
          <p className="text-gray-400 mb-6 text-center">Welcome back!</p>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-emerald-500"
                placeholder="JohnDoe"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-emerald-500"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-semibold transition duration-200"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Don’t have an account?{" "}
            <a href="/register" className="text-emerald-400 hover:underline">
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
