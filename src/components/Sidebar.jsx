// Sidebar.jsx - FIXED SINGLE ACTIVE STATE (NO OVERLAP)
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "260px",
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        color: "#e2e8f0",
        padding: "44px 24px",
        boxShadow: "3px 0 16px rgba(0,0,0,0.3)",
        borderRight: "1px solid rgba(255,255,255,0.08)",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 99,
        overflowY: "auto",
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: "64px" }}>
        <h2 style={{ margin: "0 0 12px 0", fontSize: "26px", fontWeight: "700", color: "#f1f5f9" }}>
          AadhaarPulse
        </h2>
        <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0, fontWeight: "450", letterSpacing: '0.025em' }}>
          UIDAI Analytics Dashboard
        </p>
      </div>

      {/* SINGLE SOURCE OF TRUTH - NavLink isActive ONLY */}
      <nav style={{ marginTop: "8px" }}>
        <NavLink 
          to="/" 
          end
          style={({ isActive }) => ({
            display: 'block',
            padding: '16px 20px',
            marginBottom: '4px',
            textDecoration: 'none',
            borderRadius: '8px',
            color: isActive ? '#f8fafc' : '#e2e8f0',
            background: isActive ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
            borderLeft: isActive ? '4px solid #3b82f6' : 'none',
            paddingLeft: isActive ? '16px' : '20px', // ✅ Compensate for border
            fontSize: '15px',
            fontWeight: '500',
            transition: 'all 0.2s ease',
            lineHeight: '1.4'
          })}
          onMouseEnter={({ isActive }) => !isActive && {
            background: 'rgba(59, 130, 246, 0.08)',
            color: '#e2e8f0'
          }}
          onMouseLeave={({ isActive }) => !isActive && {
            background: 'transparent',
            color: '#e2e8f0'
          }}
        >
          Home
        </NavLink>

        <NavLink 
          to="/dashboard"
          style={({ isActive }) => ({
            display: 'block',
            padding: '16px 20px',
            marginBottom: '4px',
            textDecoration: 'none',
            borderRadius: '8px',
            color: isActive ? '#f8fafc' : '#e2e8f0',
            background: isActive ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
            borderLeft: isActive ? '4px solid #3b82f6' : 'none',
            paddingLeft: isActive ? '16px' : '20px',
            fontSize: '15px',
            fontWeight: '500',
            transition: 'all 0.2s ease',
            lineHeight: '1.4'
          })}
        >
          Dashboard
        </NavLink>

        <NavLink 
          to="/map"
          style={({ isActive }) => ({
            display: 'block',
            padding: '16px 20px',
            marginBottom: '4px',
            textDecoration: 'none',
            borderRadius: '8px',
            color: isActive ? '#f8fafc' : '#e2e8f0',
            background: isActive ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
            borderLeft: isActive ? '4px solid #3b82f6' : 'none',
            paddingLeft: isActive ? '16px' : '20px',
            fontSize: '15px',
            fontWeight: '500',
            transition: 'all 0.2s ease',
            lineHeight: '1.4'
          })}
        >
          Map View
        </NavLink>

        <NavLink 
          to="/demand"
          style={({ isActive }) => ({
            display: 'block',
            padding: '16px 20px',
            marginBottom: '4px',
            textDecoration: 'none',
            borderRadius: '8px',
            color: isActive ? '#f8fafc' : '#e2e8f0',
            background: isActive ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
            borderLeft: isActive ? '4px solid #3b82f6' : 'none',
            paddingLeft: isActive ? '16px' : '20px',
            fontSize: '15px',
            fontWeight: '500',
            transition: 'all 0.2s ease',
            lineHeight: '1.4'
          })}
        >
          Demand Analysis
        </NavLink>

        <NavLink 
          to="/data-cleaning"
          style={({ isActive }) => ({
            display: 'block',
            padding: '16px 20px',
            marginBottom: '4px',
            textDecoration: 'none',
            borderRadius: '8px',
            color: isActive ? '#f8fafc' : '#e2e8f0',
            background: isActive ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
            borderLeft: isActive ? '4px solid #3b82f6' : 'none',
            paddingLeft: isActive ? '16px' : '20px',
            fontSize: '15px',
            fontWeight: '500',
            transition: 'all 0.2s ease',
            lineHeight: '1.4'
          })}
        >
          Data Cleaning
        </NavLink>
      </nav>
    </aside>
  );
}
