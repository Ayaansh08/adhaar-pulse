import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Map from "./pages/Map";

export default function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f1f5f9",
        }}
      >
        {/* Sidebar stays always visible */}
        <Sidebar />

        {/* Main content */}
        <main
          style={{
            flex: 1,
            width: "100%",
            backgroundColor: "#f8fafc",
            color: "#0f172a",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header />

          <div style={{ padding: "40px", flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/map" element={<Map />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

