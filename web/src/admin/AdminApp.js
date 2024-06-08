import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/admin";
import Login from "./pages/Login";
import PrivateRoute from "../components/PrivateRoute";

function AdminApp() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Routes>
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
    </div>
  );
}

export default AdminApp;
