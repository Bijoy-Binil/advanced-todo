import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../AuthProvider";

const Profile = () => {
    const {userName,userEmail,userJoined} = useContext(AuthContext)
  return (
       <div className="flex mt-10 flex-col md:flex-row min-h-screen bg-linear-to-br text-white">
      <Sidebar />
    
      <div className="flex flex-col flex-1 text-center items-center pt-12 px-4">
        <div className="flex   flex-col items-center text-center justify-center h-100 w-170 p-6 bg-linear-to-br from-[#060b28f0] to-[#0a0e234d] rounded-3xl shadow-sm text-white">
      {/* Profile Avatar */}
      <div className="w-32 h-32 rounded-full bg-linear-to-br from-indigo-500 to-emerald-400 flex items-center justify-center text-white text-4xl font-semibold shadow-lg">
        U
      </div>

      {/* User Info */}
      <h2 className="mt-4 text-xl font-semibold text-white">{userName}</h2>
      <p className="text-gray-300 text-sm">{userEmail}</p>

      {/* Stats */}
      <div className="mt-6 w-full max-w-sm border-t border-gray-600 pt-4 text-sm text-gray-300">
        <p>
          <span className="font-medium text-emerald-400">Joined:</span> {userJoined}
        </p>

      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3 w-full max-w-sm mt-6">
        <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-medium shadow-md transition">
          Edit Profile
        </button>
        <Link to="/change-password" className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-medium shadow-md transition">
          Change Password
        </Link>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Profile;
