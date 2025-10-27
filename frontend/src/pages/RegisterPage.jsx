import React, { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const baseUrl = "http://127.0.0.1:8000/api/";

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
      confirm_password: confirmPassword,
    };

    try {
      const response = await axios.post(`${baseUrl}register/`, userData);
      console.log("✅ Registration successful:", response.data);
      alert("User registered successfully!");
    } catch (error) {
      console.error("❌ Something went wrong:", error);
      if (error.response?.data) {
        setErrors(error.response.data);
        console.log(error.response.data);
      } else {
        setErrors({ general: "An unexpected error occurred." });
      }
    }
  };

  return (
    <div className="flex mr-70 flex-col md:flex-row min-h-screen bg-linear-to-br ">
      <div className="flex flex-col flex-1 md:ml-64 items-center pt-12 px-4">
        <div className="bg-linear-to-br from-[#060b28f0] to-[#0a0e234d] backdrop-blur-lg rounded-3xl shadow-xl p-5 sm:p-8 w-full max-w-md border-0 relative text-white">
          <h2 className="text-2xl font-semibold mb-2 text-center">
            Create your account
          </h2>
          <p className="text-gray-400 mb-6 text-center">
            Join us and start your journey!
          </p>

          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-emerald-500"
                placeholder="John Doe"
              />
              {errors.username && (
                <p className="text-red-400 text-sm mt-1">{errors.username}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-emerald-500"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-emerald-500"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-emerald-500"
                placeholder="••••••••"
              />
              {errors.confirm_password && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.confirm_password}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-semibold transition duration-200"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-emerald-400 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
