import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Admin from "./admin/pages/admin";
import Login from "./admin/pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutPage/AboutPage";
import Services from "./pages/ServicesPage/ServicePage";
import Blog from "./pages/BlogPage/BlogPage";
import ContactUs from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            />
            <Route path="/admin/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
