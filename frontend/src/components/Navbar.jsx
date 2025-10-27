import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" text-white ">
      <div className="container mx-auto  flex items-center justify-between py-12 px-8">
        {/* Left side - Logo */}
        <Link to="/" className="text-xl  font-semibold">Todo App</Link >

        {/* Right side - Links */}
        <div className="flex items-center gap-6 text-lg">
          <Link to="/dashboard" className="hover:text-indigo-400">Dashboard</Link>
          <Link to="/register" className="hover:text-indigo-400">Sign Up</Link>
          <Link to="/" className="hover:text-indigo-400">Sign In</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
