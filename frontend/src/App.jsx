import {  Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegsiterPage from "./pages/RegisterPage";
import Footer from "./components/Footer";
import AuthProvider from "./AuthProvider";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
<>
<AuthProvider>
        <Navbar/>
      <Routes>
        <Route path="/" element={<PublicRoute><LoginPage /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><RegsiterPage /></PublicRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
        <Footer/>
        </AuthProvider>
</>
  );
}

export default App;
