import {  Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegsiterPage from "./pages/RegisterPage";
import Footer from "./components/Footer";

function App() {
  return (
<>
        <Navbar/>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegsiterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
        <Footer/>
</>
  );
}

export default App;
