// src/pages/Dashboard.jsx - PERFECT ALIGNMENT v1.4 (DemandAnalysis Pattern)
import React, { useState } from "react";
import NationalDashboard from "./NationalDashboard";
import StateDashboard from "./StateDashboard";
import DistrictDashboard from "./DistrictDashboard";

const CONTAINER_STYLE = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 24px'
};

const designTokens = {
  spacing: { xs: '8px', sm: '12px', md: '16px', lg: '20px', xl: '24px' },
  radius: { sm: '8px', md: '10px' },
  colors: {
    slate50: '#f8fafc', slate100: '#f1f5f9', slate200: '#e2e8f0', 
    slate500: '#64748b', slate600: '#475569', slate700: '#334155', 
    slate800: '#1e293b', slate900: '#0f172a',
    gray100: '#f3f4f6'
  }
};

export default function Dashboard() {
  const [view, setView] = useState("national");

  const tabs = [
    { id: 'national', label: 'National' },
    { id: 'state', label: 'States' },
    { id: 'district', label: 'Districts' }
  ];

  const getTabStyle = (isActive) => ({
    padding: '10px 18px',
    minWidth: '120px',
    border: `1px solid ${designTokens.colors.slate200}`,
    background: isActive ? designTokens.colors.slate100 : '#ffffff',
    color: isActive ? designTokens.colors.slate900 : designTokens.colors.slate700,
    cursor: 'pointer',
    borderRadius: designTokens.radius.sm,
    fontWeight: isActive ? 600 : 500,
    fontSize: '14px',
    transition: 'all 150ms ease-in-out',
    boxShadow: 'none',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    outline: 'none'
  });

  // ✅ SAME MainContainer as DemandAnalysis
  const MainContainer = ({ children }) => (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${designTokens.colors.slate50} 0%, #f8fcff 100%)`,
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={CONTAINER_STYLE}>
        {children}
      </div>
    </div>
  );

  return (
    <MainContainer>
      {/* TABS - SAME 1200px CONTAINER */}
      <div style={{ 
        marginBottom: designTokens.spacing.xl,
        padding: `${designTokens.spacing.sm} 0`
      }}>
        <div style={{ 
          display: "flex", 
          gap: designTokens.spacing.xs,
          padding: `${designTokens.spacing.sm} ${designTokens.spacing.md}`,
          background: '#ffffff',
          border: `1px solid ${designTokens.colors.slate200}`,
          borderRadius: designTokens.radius.md,
          boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)'
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setView(tab.id)}
              style={getTabStyle(view === tab.id)}
              title={`Switch to ${tab.label} view`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT - NO FULLSCREEN, JUST CONTENT */}
      <div style={{ height: 'auto', width: '100%' }}>
        {view === "national" && <NationalDashboard />}
        {view === "state" && <StateDashboard />}
        {view === "district" && <DistrictDashboard />}
      </div>
    </MainContainer>
  );
}
