import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Navbar = () => {
  const {userName,handleLogout,isLoggedIn} = useContext(AuthContext)
  return (
    <nav className=" text-white ">
      <div className="container mx-auto  flex items-center justify-between py-12 px-8">
        {/* Left side - Logo */}
        <Link to="/dashboard" className="text-xl  font-semibold">Todo App</Link >

        {/* Right side - Links */}
        <div className="flex items-center gap-6 text-lg">
          <h1 className="text-white">{userName}</h1>
          <Link to="/dashboard" 
          className="hover:text-indigo-400">Dashboard</Link>
         { !isLoggedIn?(<>
          <Link to="/" className="hover:text-indigo-400">Login </Link>
          <Link to="/register" className="hover:text-indigo-400">Register</Link>
         </>):(<>
         
          <Link onClick={handleLogout} className="hover:text-indigo-400">Log Out</Link>
         </>)}
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
