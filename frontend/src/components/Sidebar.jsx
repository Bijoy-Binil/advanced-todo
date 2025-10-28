import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ListTodo, User, Settings, LogOut,Key, Home } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { to: "/dashboard", label: "My Todos", icon: <ListTodo size={18} /> },
    { to: "/profile", label: "Profile", icon: <User size={18} /> },
     { to: "/change-password", label: "Change Password", icon: <Key size={18} /> },
  ];

  return (
    <aside className="w-64 h-110 mt-12 bg-linear-to-br rounded-3xl from-[#060b28f0] to-[#0a0e234d] text-white p-5 border-r border-gray-800">
      {/* App Title */}
      <div className="flex items-center justify-center mb-8">
        <Home size={22} className="text-emerald-400 mr-2" />
        <h1 className="text-2xl font-semibold tracking-wide">Todo App</h1>
      </div>

      {/* Sidebar Links */}
      <nav className="flex flex-col space-y-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
              location.pathname === link.to
                ? "bg-emerald-600 text-white shadow-md"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            {link.icon}
            {link.label}
          </Link>
        ))}

        {/* Logout */}
        <Link
          to="/logout"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-red-400 hover:bg-red-900/40 hover:text-red-300 transition-all mt-6"
        >
          <LogOut size={18} />
          Logout
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
