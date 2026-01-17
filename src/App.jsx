// App.jsx - FIXED Header Overlap with MAXIMUM Padding
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Map from "./pages/Map";
import DemandAnalysis from "./pages/DemandAnalysis";
import DataCleaning from "./pages/data-cleaning/DataCleaning";

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
        {/* Fixed Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div style={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          marginLeft: "260px"
        }}>
          {/* Header - Fixed */}
          <Header style={{ 
            position: "fixed", 
            top: 0, 
            left: "260px", 
            right: 0, 
            zIndex: 100,
            height: "92px"
          }} />
          
          {/* 🚨 MAXIMUM OVERLAP FIX */}
          <main
            style={{
              flex: 1,
              width: "100%",
              backgroundColor: "#f8fafc",
              color: "#0f172a",
              paddingTop: "120px",        // 🚨 92px header + 28px EXTRA
              paddingRight: "32px",
              paddingBottom: "40px",
              paddingLeft: "32px",
              margin: 0,                   // 🚨 Remove all margins
              overflow: "auto",
              boxSizing: "border-box",
              minHeight: "100vh"
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/map" element={<Map />} />
              <Route path="/demand" element={<DemandAnalysis />} />
              <Route path="/data-cleaning" element={<DataCleaning />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
