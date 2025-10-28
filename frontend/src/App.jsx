import {  Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegsiterPage from "./pages/RegisterPage";
import Footer from "./components/Footer";
import AuthProvider from "./AuthProvider";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import ChangePassword from "./pages/ChangePassword";
import Profile from "./pages/Profile";

function App() {
  return (
<>
<AuthProvider>
        <Navbar/>
      <Routes>
        <Route path="/" element={<PublicRoute><LoginPage /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><RegsiterPage /></PublicRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/change-password" element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      </Routes>
        <Footer/>
        </AuthProvider>
</>
  );
}

export default App;
