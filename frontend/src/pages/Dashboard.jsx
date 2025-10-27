import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const baseUrl = "http://127.0.0.1:8000/api/";
  const [tasks, setTasks] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const token = localStorage.getItem("access");
    try {
      const res = await axios.get(`${baseUrl}todo/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAllTasks(res.data);
    } catch (err) {
      console.log("Error fetching todos:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access");
    const data = { tasks };

    try {
      if (editId) {
        // Update existing task
        await axios.put(`${baseUrl}todo/${editId}/`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        // Add new task
        await axios.post(`${baseUrl}todo/`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      setTasks("");
      setEditId(null);
      getTodos();
    } catch (err) {
      console.log("Error saving task:", err);
    }
  };

  const handleEdit = (id, taskText) => {
    setTasks(taskText);
    setEditId(id);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("access");
    try {
      await axios.delete(`${baseUrl}todo/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      getTodos();
    } catch (err) {
      console.log("Error deleting task:", err);
    }
  };

  return (
    <div className="flex mt-10 flex-col md:flex-row min-h-screen bg-linear-to-br text-white">
      <div className="flex flex-col flex-1 items-center pt-12 px-4">
        <div className="bg-linear-to-br from-[#060b28f0] to-[#0a0e234d] rounded-3xl shadow-xl p-6 w-full max-w-2xl">
          <h2 className="text-3xl font-semibold mb-6 text-center">My Todos</h2>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="text"
              placeholder="Add or edit a task..."
              value={tasks}
              onChange={(e) => setTasks(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-semibold"
            >
              {editId ? "Update" : "Add"}
            </button>
          </form>

          <div className="space-y-3">
            {allTasks.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gray-800 rounded-lg p-3"
              >
                <span className="text-gray-200">{item.tasks}</span>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEdit(item.id, item.tasks)}
                    className="text-emerald-400 hover:text-emerald-300 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-400 hover:text-red-300 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
