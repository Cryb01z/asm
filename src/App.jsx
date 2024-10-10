import React, { useEffect } from "react";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import CVE from "./pages/CVE/CVE";
import BlackMarket from "./pages/BlackMarket/BlackMarket";
import DigitalFootprint from "./pages/DigitalFootprint/DigitalFootprint";
import Scan from "./pages/Scan/Scan";
import Service from "./pages/ServiceManagement/Service";
import Domain from "./pages/Asset/Asset";
import Result from "./pages/Result/Result";
import CVEDetail from "./pages/CVE/CVEDetail";
import Test from "./pages/test";
import Asset from "./pages/Asset/Asset";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/CVE" element={<CVE />} />
        <Route path="/CVE/:cveId" element={<CVEDetail />} />
        <Route path="/service" element={<Service />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/result/:id" element={<Result />} />
        <Route path="/asset" element={<Asset/>} />
        <Route path="/test" element={<Test />} />
        <Route path="/digitalfootprint" element={<DigitalFootprint />} />
        <Route path="/darkwebmonitoring" element={<BlackMarket />} />
      </Routes>
    </>
  );
}

export default App;
