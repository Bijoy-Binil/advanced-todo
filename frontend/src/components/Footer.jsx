import React from "react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-[#060b28f0] to-[#0a0e234d] text-gray-400 py-6 mt-auto border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Todo App. All rights reserved.
        </p>

        <div className="flex gap-4 mt-3 sm:mt-0 text-sm">
          <a href="/" className="hover:text-emerald-400 transition duration-200">
            Dashboard
          </a>
          <a href="/login" className="hover:text-emerald-400 transition duration-200">
            Login
          </a>
          <a href="/register" className="hover:text-emerald-400 transition duration-200">
            Register
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
