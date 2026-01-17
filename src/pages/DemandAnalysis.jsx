// src/pages/DemandAnalysis.jsx - PERFECT ALIGNMENT & CONSISTENCY v4.0
import React, { useEffect, useState, useRef, useCallback } from "react";
import { Section, LoadingCard, ErrorCard, KPIGrid } from "../components/DashboardComponents";

const API = "http://127.0.0.1:8000";

// PERFECTLY ALIGNED LAYOUT SYSTEM - SINGLE RESPONSIBLE CONTAINER
const CONTAINER_STYLE = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 24px'
};

// Enterprise Design Tokens - Production Ready
const designTokens = {
  spacing: { 4: '16px', 6: '24px', 8: '32px', 12: '48px' },
  radius: { md: '12px', lg: '16px' },
  shadows: {
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
  },
  colors: {
    slate50: '#f8fafc', slate100: '#f1f5f9', slate200: '#e2e8f0', slate500: '#64748b',
    slate700: '#334155', slate800: '#1e293b', slate900: '#0f172a',
    blue500: '#3b82f6', green500: '#10b981', orange500: '#f59e0b'
  }
};

export default function DemandAnalysis() {
  // [ALL EXISTING STATE & LOGIC UNCHANGED - PERFECTLY PRESERVED]
  const [states, setStates] = useState([]);
  const [stationsData, setStationsData] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [stateSearch, setStateSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [isDistrictDropdownOpen, setIsDistrictDropdownOpen] = useState(false);
  
  const stateDropdownRef = useRef(null);
  const districtDropdownRef = useRef(null);

  // [ALL useEffect & handlers unchanged - ZERO FUNCTIONAL CHANGES]
  useEffect(() => {
    async function loadStates() {
      try {
        const res = await fetch(`${API}/aggregate/state`);
        if (!res.ok) throw new Error("Failed to fetch states");
        const data = await res.json();
        setStates(Array.isArray(data) ? data : []);
      } catch (e) {
        setError("Failed to load states");
      } finally {
        setLoading(false);
      }
    }
    loadStates();
  }, []);

  useEffect(() => {
    async function loadStations() {
      if (!selectedState) {
        setStationsData(null);
        setSelectedDistrict(null);
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const stateName = encodeURIComponent(selectedState.state);
        const res = await fetch(`${API}/estimate/stations/district?state=${stateName}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const response = await res.json();
        setStationsData(response);
      } catch (e) {
        setError(`Failed to load stations for ${selectedState.state}`);
        setStationsData(null);
      } finally {
        setLoading(false);
      }
    }
    loadStations();
  }, [selectedState]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (stateDropdownRef.current && !stateDropdownRef.current.contains(event.target)) {
        setIsStateDropdownOpen(false);
      }
      if (districtDropdownRef.current && !districtDropdownRef.current.contains(event.target)) {
        setIsDistrictDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getSelectedDistrictData = () => {
    if (!selectedDistrict || !stationsData?.data) return null;
    return stationsData.data.find(d => 
      d.district.replace(/ \*$/, '').trim() === selectedDistrict.trim()
    );
  };

  const districtOptions = stationsData?.data?.map(district => 
    district.district.replace(/ \*$/, '').trim()
  ) || [];

  const stateOptions = Array.isArray(states)
    ? states
        .filter((s) => s && s.state && typeof s.state === "string")
        .map((s) => s.state.trim())
        .filter((name, idx, arr) => name && arr.indexOf(name) === idx)
        .sort((a, b) => a.localeCompare(b))
    : [];

  const filteredStateOptions = stateOptions.filter((name) =>
    name.toLowerCase().includes(stateSearch.toLowerCase())
  );

  const districtData = getSelectedDistrictData();
  const sortedDistricts = (stationsData?.data || []).sort((a, b) => 
    (b.estimated_stations_needed || 0) - (a.estimated_stations_needed || 0)
  );

  const handleSelectState = useCallback((name) => {
    setStateSearch(name);
    const found = states.find((s) => s.state?.trim() === name);
    setSelectedState(found || null);
    setSelectedDistrict(null);
    setIsStateDropdownOpen(false);
  }, [states]);

  const handleSelectDistrict = useCallback((name) => {
    setSelectedDistrict(name);
    setIsDistrictDropdownOpen(false);
  }, []);

  if (loading) return <LoadingCard />;

  // PERFECTLY ALIGNED HELPER FUNCTIONS
  const getInputStyle = (isActive, accentColor) => ({
    width: '100%',
    height: '56px',
    padding: '0 20px',
    borderRadius: designTokens.radius.lg,
    border: `2px solid ${isActive ? accentColor : designTokens.colors.slate200}`,
    background: '#ffffff',
    fontSize: '16px',
    fontWeight: 500,
    color: designTokens.colors.slate900,
    outline: 'none',
    boxShadow: isActive ? designTokens.shadows.md : designTokens.shadows.sm,
    transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)'
  });

  const getDropdownStyle = (accentColor) => ({
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: '#ffffff',
    border: `2px solid ${accentColor}`,
    borderTop: 'none',
    borderRadius: `0 0 ${designTokens.radius.lg} ${designTokens.radius.lg}`,
    maxHeight: '320px',
    overflowY: 'auto',
    zIndex: 1000,
    boxShadow: designTokens.shadows.lg
  });

  // SINGLE PERFECTLY ALIGNED CONTAINER WRAPPER
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
      {/* ✅ SINGLE PAGE HEADER - PERFECTLY ALIGNED */}
      <header style={{
        padding: `${designTokens.spacing[8]} 0 ${designTokens.spacing[6]}`,
        borderBottom: `1px solid ${designTokens.colors.slate200}`,
        marginBottom: designTokens.spacing[6]
      }}>
        <h1 style={{
          fontSize: 'clamp(28px, 5vw, 36px)',
          fontWeight: 700,
          color: designTokens.colors.slate900,
          margin: '0 0 8px 0',
          lineHeight: 1.1
        }}>
          Aadhaar Station Demand Analysis
        </h1>
        <p style={{
          fontSize: '16px',
          color: designTokens.colors.slate500,
          margin: 0,
          fontWeight: 400
        }}>
          State and district-level station capacity requirements
        </p>
      </header>

      {error && <ErrorCard error={error} />}

      {/* FILTERS - PERFECTLY ALIGNED WITH HEADER */}
      <section style={{ marginBottom: designTokens.spacing[12] }}>
        <div style={{
          background: '#ffffff',
          borderRadius: designTokens.radius.lg,
          border: `1px solid ${designTokens.colors.slate200}`,
          padding: designTokens.spacing[8],
          boxShadow: designTokens.shadows.md
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            alignItems: 'end'
          }}>
            {/* STATE DROPDOWN */}
            <div style={{ position: 'relative' }} ref={stateDropdownRef}>
              <input
                type="text"
                value={stateSearch}
                onChange={(e) => {
                  setStateSearch(e.target.value);
                  setSelectedState(null);
                  setSelectedDistrict(null);
                  setStationsData(null);
                  setError(null);
                  setIsStateDropdownOpen(e.target.value.length > 0);
                }}
                onFocus={() => stateSearch && setIsStateDropdownOpen(true)}
                placeholder="Select state..."
                style={getInputStyle(!!selectedState, designTokens.colors.blue500)}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = designTokens.colors.blue500;
                  e.target.style.boxShadow = designTokens.shadows.lg;
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = selectedState ? designTokens.colors.blue500 : designTokens.colors.slate200;
                  e.target.style.boxShadow = selectedState ? designTokens.shadows.md : designTokens.shadows.sm;
                }}
              />
              {isStateDropdownOpen && filteredStateOptions.length > 0 && (
                <div style={getDropdownStyle(designTokens.colors.blue500)}>
                  {filteredStateOptions.map((name) => (
                    <div
                      key={name}
                      onClick={() => handleSelectState(name)}
                      style={{
                        padding: '16px 20px',
                        cursor: 'pointer',
                        background: selectedState?.state?.trim() === name ? designTokens.colors.slate100 : '#ffffff',
                        borderBottom: `1px solid ${designTokens.colors.slate200}`,
                        fontSize: '16px',
                        transition: 'background-color 150ms ease'
                      }}
                      onMouseEnter={(e) => e.target.style.background = designTokens.colors.slate100}
                      onMouseLeave={(e) => e.target.style.background = selectedState?.state?.trim() === name ? designTokens.colors.slate100 : '#ffffff'}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* DISTRICT DROPDOWN */}
            {selectedState && stationsData && (
              <div style={{ position: 'relative' }} ref={districtDropdownRef}>
                <input
                  type="text"
                  value={selectedDistrict || ""}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  onFocus={() => setIsDistrictDropdownOpen(true)}
                  placeholder="Select district..."
                  style={getInputStyle(!!selectedDistrict, designTokens.colors.green500)}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = designTokens.colors.green500;
                    e.target.style.boxShadow = designTokens.shadows.lg;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = selectedDistrict ? designTokens.colors.green500 : designTokens.colors.slate200;
                    e.target.style.boxShadow = selectedDistrict ? designTokens.shadows.md : designTokens.shadows.sm;
                  }}
                />
                {isDistrictDropdownOpen && districtOptions.length > 0 && (
                  <div style={getDropdownStyle(designTokens.colors.green500)}>
                    {districtOptions.map((name) => (
                      <div
                        key={name}
                        onClick={() => handleSelectDistrict(name)}
                        style={{
                          padding: '16px 20px',
                          cursor: 'pointer',
                          background: selectedDistrict === name ? designTokens.colors.slate100 : '#ffffff',
                          borderBottom: `1px solid ${designTokens.colors.slate200}`,
                          fontSize: '16px',
                          transition: 'background-color 150ms ease'
                        }}
                        onMouseEnter={(e) => e.target.style.background = designTokens.colors.slate100}
                        onMouseLeave={(e) => e.target.style.background = selectedDistrict === name ? designTokens.colors.slate100 : '#ffffff'}
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ✅ DISTRICT DETAIL - PERFECTLY ALIGNED */}
      {selectedState && selectedDistrict && districtData && (
        <section style={{ marginBottom: designTokens.spacing[12] }}>
          <div style={{ 
            marginBottom: designTokens.spacing[8], 
            paddingBottom: designTokens.spacing[6],
            borderBottom: `1px solid ${designTokens.colors.slate200}`
          }}>
            <h2 style={{
              fontSize: 'clamp(24px, 4vw, 28px)',
              fontWeight: 600,
              color: designTokens.colors.slate900,
              margin: 0
            }}>
              Station Requirements: {selectedDistrict}
            </h2>
          </div>

          {/* KPI CARDS - BASELINE ALIGNED */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            marginBottom: designTokens.spacing[12]
          }}>
            {[ 
              { value: districtData.estimated_stations_needed || 0, label: 'Stations Needed', color: designTokens.colors.green500 },
              { value: Math.round(districtData.service_load_annualised || 0).toLocaleString(), label: 'Annual Load', color: designTokens.colors.blue500 },
              { value: `${districtData.time_window_days} days`, label: 'Time Window', color: designTokens.colors.orange500 }
            ].map((card, idx) => (
              <div key={idx} style={{
                height: '140px',
                padding: '32px 24px',
                background: '#ffffff',
                border: `1px solid ${designTokens.colors.slate200}`,
                borderRadius: designTokens.radius.lg,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                boxShadow: designTokens.shadows.md,
                transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = designTokens.shadows.lg;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = designTokens.shadows.md;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                <div style={{
                  fontSize: idx === 0 ? 'clamp(28px, 8vw, 36px)' : 'clamp(24px, 6vw, 32px)',
                  fontWeight: 700,
                  color: card.color,
                  marginBottom: '8px',
                  lineHeight: 1
                }}>
                  {card.value}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: designTokens.colors.slate700,
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {card.label}
                </div>
              </div>
            ))}
          </div>

          {/* CALCULATION DETAILS */}
          <div style={{
            background: designTokens.colors.slate50,
            border: `1px solid ${designTokens.colors.slate200}`,
            borderLeft: `4px solid ${designTokens.colors.green500}`,
            borderRadius: designTokens.radius.lg,
            padding: '32px 40px',
            boxShadow: designTokens.shadows.sm
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 600,
              color: designTokens.colors.slate800,
              margin: '0 0 16px 0'
            }}>
              Calculation Details
            </h3>
            <div style={{
              fontSize: '15px',
              color: designTokens.colors.slate700,
              lineHeight: 1.7
            }}>
              Annualized from {districtData.time_window_days} days data × {districtData.annualisation_factor?.toFixed(2)}x factor<br/>
              1 station = 25,000 weighted service units/year (age-based weights applied)
            </div>
          </div>
        </section>
      )}

      {/* ✅ STATE OVERVIEW - PERFECTLY ALIGNED */}
      {selectedState && stationsData && !selectedDistrict && (
        <section style={{ marginBottom: designTokens.spacing[12] }}>
          <div style={{ 
            marginBottom: designTokens.spacing[8], 
            paddingBottom: designTokens.spacing[6],
            borderBottom: `1px solid ${designTokens.colors.slate200}`
          }}>
            <h2 style={{
              fontSize: 'clamp(24px, 4vw, 28px)',
              fontWeight: 600,
              color: designTokens.colors.slate900,
              margin: 0
            }}>
              Station Requirements - {selectedState.state}
            </h2>
          </div>

          <div style={{ marginBottom: designTokens.spacing[12] }}>
            <KPIGrid
              items={[
                ["Total Districts", stationsData.data?.length || 0],
                ["Total Stations Needed", sortedDistricts.reduce((sum, d) => sum + (d.estimated_stations_needed || 0), 0)],
                ["Total Annual Load", Math.round(sortedDistricts.reduce((sum, d) => sum + (d.service_load_annualised || 0), 0)).toLocaleString()],
                ["Avg Stations/District", Math.round((sortedDistricts.reduce((sum, d) => sum + (d.estimated_stations_needed || 0), 0) / (stationsData.data?.length || 1)))],
                ["Highest Demand", Math.max(...sortedDistricts.map(d => d.estimated_stations_needed || 0))]
              ]}
            />
          </div>

          <div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 600,
              color: designTokens.colors.slate900,
              margin: '0 0 24px 0'
            }}>
              Top 10 Districts
            </h3>
            <div style={{
              background: '#ffffff',
              borderRadius: designTokens.radius.lg,
              border: `1px solid ${designTokens.colors.slate200}`,
              boxShadow: designTokens.shadows.md,
              overflow: 'hidden'
            }}>
              <table style={{ 
                width: '100%', 
                borderCollapse: 'collapse',
                fontSize: '15px'
              }}>
                <thead>
                  <tr style={{ background: designTokens.colors.slate50 }}>
                    <th style={{
                      padding: '20px 24px',
                      textAlign: 'left',
                      fontWeight: 600,
                      color: designTokens.colors.slate800
                    }}>
                      District
                    </th>
                    <th style={{
                      padding: '20px 24px',
                      textAlign: 'right',
                      fontWeight: 600,
                      color: designTokens.colors.slate800
                    }}>
                      Stations
                    </th>
                    <th style={{
                      padding: '20px 24px',
                      textAlign: 'right',
                      fontWeight: 600,
                      color: designTokens.colors.slate800
                    }}>
                      Load
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedDistricts.slice(0, 10).map((district, idx) => (
                    <tr key={idx} style={{
                      background: idx % 2 === 0 ? '#ffffff' : designTokens.colors.slate50,
                      transition: 'background-color 150ms ease',
                      borderBottom: `1px solid ${designTokens.colors.slate200}`
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = designTokens.colors.slate100}
                    onMouseLeave={(e) => e.currentTarget.style.background = idx % 2 === 0 ? '#ffffff' : designTokens.colors.slate50}
                    >
                      <td style={{
                        padding: '20px 24px',
                        fontWeight: 500,
                        color: designTokens.colors.slate900
                      }}>
                        {district.district.replace(/ \*$/, '')}
                      </td>
                      <td style={{
                        padding: '20px 24px',
                        textAlign: 'right',
                        color: designTokens.colors.green500,
                        fontWeight: 600
                      }}>
                        {district.estimated_stations_needed}
                      </td>
                      <td style={{
                        padding: '20px 24px',
                        textAlign: 'right',
                        color: designTokens.colors.blue500
                      }}>
                        {Math.round(district.service_load_annualised).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ✅ EMPTY STATE - NO TITLE DUPLICATION, PERFECTLY ALIGNED */}
      {!selectedState && !loading && (
        <section style={{
          textAlign: 'center',
          padding: `${designTokens.spacing[12]} 0`
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: designTokens.radius.lg,
            border: `1px solid ${designTokens.colors.slate200}`,
            padding: designTokens.spacing[12],
            boxShadow: designTokens.shadows.md
          }}>
            <p style={{
              fontSize: '16px',
              color: designTokens.colors.slate500,
              lineHeight: 1.7,
              margin: 0,
              maxWidth: '500px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Select a state and district to view detailed station requirements and capacity analysis.
            </p>
          </div>
        </section>
      )}
    </MainContainer>
  );
}
