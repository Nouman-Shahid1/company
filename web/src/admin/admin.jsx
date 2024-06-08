import React from "react";
const Admin = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-gray-900 text-white p-4">
        <h1 className="text-3xl font-bold">Admin Page</h1>
      </header>
      <main className="flex-grow"></main>
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>Admin Page Footer</p>
      </footer>
    </div>
  );
};

export default Admin;
