export default function Home() {
  return (
    <div 
      className="page"
      style={{
        marginLeft: '260px',  // Sidebar width
        marginTop: '92px',    // Header height
        padding: '40px 40px 64px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        background: '#fafbfc',
        minHeight: '100vh',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Purpose-Driven Hero */}
      <div style={{ marginBottom: '56px' }}>
        <h1 style={{ 
          margin: '0 0 24px 0', 
          fontSize: '34px', 
          fontWeight: '600',
          color: '#111827',
          lineHeight: '1.3',
          letterSpacing: '-0.01em'
        }}>
          AadhaarPulse Analytics Platform
        </h1>

        <div style={{ 
          color: "#6b7280", 
          maxWidth: "680px",
          fontSize: '16px',
          lineHeight: '1.65',
          marginBottom: '8px'
        }}>
          Visual analytics for Aadhaar enrolment, biometric verification, 
          and demographic update demand patterns using UIDAI datasets.
        </div>

        <div style={{ 
          color: "#9ca3af", 
          maxWidth: "680px",
          fontSize: '15px',
          lineHeight: '1.6'
        }}>
          Supports analysts, planners, and policymakers with state and district-level 
          service load estimation for resource allocation and policy planning.
        </div>
      </div>

      {/* Analytical Navigation Tiles */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px",
        marginBottom: '48px'
      }}>
        {/* National Overview */}
        <div style={{
          padding: '32px',
          background: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          cursor: 'pointer',
          minHeight: '180px',
          display: 'flex',
          flexDirection: 'column',
          transition: 'box-shadow 0.2s ease, border-color 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
          e.currentTarget.style.borderColor = '#d1d5db';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
          e.currentTarget.style.borderColor = '#e5e7eb';
        }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            paddingBottom: '16px',
            borderBottom: '1px solid #f3f4f6'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              marginRight: '16px',
              flexShrink: 0
            }}>
              N
            </div>
            <h3 style={{
              margin: 0,
              fontSize: '18px',
              fontWeight: '600',
              color: '#111827'
            }}>
              National Overview
            </h3>
          </div>

          <div style={{ flex: 1 }}>
            <p style={{ 
              color: "#374151", 
              fontSize: "15px",
              lineHeight: '1.6',
              margin: '0 0 12px 0'
            }}>
              Aggregated enrolment, biometric, and demographic update metrics 
              across all states and union territories.
            </p>
            <p style={{ 
              color: "#6b7280", 
              fontSize: "14px",
              lineHeight: '1.5',
              margin: 0
            }}>
              Assess national service demand patterns and capacity utilization trends.
            </p>
          </div>
        </div>

        {/* State Analysis */}
        <div style={{
          padding: '32px',
          background: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          cursor: 'pointer',
          minHeight: '180px',
          display: 'flex',
          flexDirection: 'column',
          transition: 'box-shadow 0.2s ease, border-color 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
          e.currentTarget.style.borderColor = '#d1d5db';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
          e.currentTarget.style.borderColor = '#e5e7eb';
        }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            paddingBottom: '16px',
            borderBottom: '1px solid #f3f4f6'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              marginRight: '16px',
              flexShrink: 0
            }}>
              S
            </div>
            <h3 style={{
              margin: 0,
              fontSize: '18px',
              fontWeight: '600',
              color: '#111827'
            }}>
              State Analysis
            </h3>
          </div>

          <div style={{ flex: 1 }}>
            <p style={{ 
              color: "#374151", 
              fontSize: "15px",
              lineHeight: '1.6',
              margin: '0 0 12px 0'
            }}>
              Comparative analysis of Aadhaar service demand across states and districts.
            </p>
            <p style={{ 
              color: "#6b7280", 
              fontSize: "14px",
              lineHeight: '1.5',
              margin: 0
            }}>
              Identify regional disparities and prioritize resource allocation.
            </p>
          </div>
        </div>

        {/* Geographic View */}
        <div style={{
          padding: '32px',
          background: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          cursor: 'pointer',
          minHeight: '180px',
          display: 'flex',
          flexDirection: 'column',
          transition: 'box-shadow 0.2s ease, border-color 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
          e.currentTarget.style.borderColor = '#d1d5db';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
          e.currentTarget.style.borderColor = '#e5e7eb';
        }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            paddingBottom: '16px',
            borderBottom: '1px solid #f3f4f6'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: '#f59e0b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              marginRight: '16px',
              flexShrink: 0
            }}>
              G
            </div>
            <h3 style={{
              margin: 0,
              fontSize: '18px',
              fontWeight: '600',
              color: '#111827'
            }}>
              Geographic View
            </h3>
          </div>

          <div style={{ flex: 1 }}>
            <p style={{ 
              color: "#374151", 
              fontSize: "15px",
              lineHeight: '1.6',
              margin: '0 0 12px 0'
            }}>
              Spatial visualization of Aadhaar service demand at district level.
            </p>
            <p style={{ 
              color: "#6b7280", 
              fontSize: "14px",
              lineHeight: '1.5',
              margin: 0
            }}>
              Map-based insights for location-specific planning and monitoring.
            </p>
          </div>
        </div>
      </div>

      {/* Subtle informational footer */}
      <p style={{
        fontSize: "12px",
        color: "#9ca3af",
        textAlign: 'center',
        margin: 0,
        paddingTop: '32px',
        borderTop: '1px solid #f3f4f6',
        letterSpacing: '0.025em'
      }}>
        Built for UIDAI Hackathon
      </p>
    </div>
  );
}
