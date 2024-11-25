import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./charts/ChartjsConfig";
import "./css/style.css";
// Import pages
import DomainInventory from "./components/Asset/DomainInventory";
import Inventory from "./components/Asset/Inventory";
import CVEDetail from "./components/CVE/CVEDetail";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Register from "./components/Register/Register";
import Layout from "./Layout/Layout";
import Asset from "./pages/Asset/Asset";
import CredentialLeak from "./pages/Credential/CredentialLeak";
import CVE from "./pages/CVE/CVE";
import Dashboard from "./pages/Dashboard/Dashboard";
import Result from "./pages/Result/Result";
import Scan from "./pages/Scan/Scan";


function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  const protectedRoutes = [
    { path: "/dashboard", component: <Dashboard /> },
    { path: "/CVE", component: <CVE /> },
    { path: "/CVE/:cveId", component: <CVEDetail /> },
    { path: "/scan", component: <Scan /> },
    { path: "/result/:id", component: <Result /> },
    { path: "/asset", component: <Asset /> },
    { path: "/inventory", component: <Inventory /> },
    { path: "/inventory/:id", component: <DomainInventory /> },
    { path: "/test", component: <Navbar /> },
    { path: "/credential", component: <CredentialLeak /> },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route>
          {/* Dynamic Protected Routes */}
          {protectedRoutes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={<ProtectedRoute>{route.component}</ProtectedRoute>}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
