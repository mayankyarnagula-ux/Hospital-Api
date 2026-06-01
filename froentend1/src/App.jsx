import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/privateRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLanding from "./pages/AuthLanding";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import BookAppointment from "./pages/BookAppointment";
import PatientDashboard from "./pages/PatientDashboard";
import AppointmentHistory from "./pages/AppointmentHistory";
import AdminDashboard from "./pages/AdminDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import Contact from "./pages/Contact";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      {isAuthenticated && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/home" replace /> : <AuthLanding />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/home" replace /> : <Login />}
        />
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate to="/home" replace /> : <Register />}
        />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/doctors" element={<PrivateRoute><Doctors /></PrivateRoute>} />
        <Route path="/doctor/:id" element={<PrivateRoute><DoctorDetails /></PrivateRoute>} />
        <Route path="/book/:id" element={<PrivateRoute><BookAppointment /></PrivateRoute>} />
        <Route path="/patient" element={<PrivateRoute><PatientDashboard /></PrivateRoute>} />
        <Route path="/history" element={<PrivateRoute><AppointmentHistory /></PrivateRoute>} />
        <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
        <Route path="/doctor-dashboard" element={<PrivateRoute><DoctorDashboard /></PrivateRoute>} />
        <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
      </Routes>
      
      {isAuthenticated && <Footer />}
    </BrowserRouter>
  );
}

export default App;