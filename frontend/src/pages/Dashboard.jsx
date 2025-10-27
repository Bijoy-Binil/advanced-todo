import React from "react";

const Dashboard = () => {
  return (
    <div className="flex mr-70 mt-10 flex-col md:flex-row min-h-screen bg-linear-to-br  text-white">
      <div className="flex flex-col flex-1 md:ml-64 mt-5 items-center pt-12 px-4">
        <div className="bg-linear-to-br from-[#060b28f0] to-[#0a0e234d] backdrop-blur-lg rounded-3xl shadow-xl p-5 sm:p-8 w-full max-w-2xl border-0 relative">
          <h2 className="text-3xl font-semibold mb-6 text-center">My Todos</h2>

          {/* Add Todo Section */}
          <form className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="text"
              placeholder="Add a new task..."
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-semibold transition duration-200"
            >
              Add
            </button>
          </form>

          {/* Todo List Section */}
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-gray-800 rounded-lg p-3">
              <span className="text-gray-200">Sample Todo 1</span>
              <div className="flex gap-3">
                <button className="text-emerald-400 hover:text-emerald-300 text-sm">Edit</button>
                <button className="text-red-400 hover:text-red-300 text-sm">Delete</button>
              </div>
            </div>

            <div className="flex justify-between items-center bg-gray-800 rounded-lg p-3">
              <span className="text-gray-200">Sample Todo 2</span>
              <div className="flex gap-3">
                <button className="text-emerald-400 hover:text-emerald-300 text-sm">Edit</button>
                <button className="text-red-400 hover:text-red-300 text-sm">Delete</button>
              </div>
            </div>
          </div>

          {/* Empty State (show this when no todos) */}
          {/* <p className="text-gray-400 text-center mt-6">No todos yet. Add one above!</p> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
