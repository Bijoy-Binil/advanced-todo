import React from "react";

const LoginPage = () => {
  return (
    <div className="flex mr-70  flex-col md:flex-row min-h-screen bg-linear-to-br">
      <div className="flex flex-col flex-1 md:ml-64  items-center pt-12 px-4">
        <div className="bg-linear-to-br from-[#060b28f0] to-[#0a0e234d] backdrop-blur-lg rounded-3xl shadow-xl p-5 sm:p-8 w-full max-w-md border-0 relative text-white">
          <h2 className="text-2xl font-semibold mb-2 text-center">Login to your account</h2>
          <p className="text-gray-400 mb-6 text-center">Welcome back!</p>

          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-emerald-500"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-emerald-500"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-semibold transition duration-200"
            >
              Log In
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Don’t have an account?{" "}
            <a href="/register" className="text-emerald-400 hover:underline">
              Create one
            </a>
          </p>

          <div className="text-gray-500 text-sm mt-6">
            <p>Demo User:</p>
            <p>Email: user@example.com</p>
            <p>Password: password12345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
