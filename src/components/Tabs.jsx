import React from "react";

export default function Tabs({ tabs, activeTab, onTabClick, onTabClose }) {
  const containerStyle = {
    display: "flex",
    borderBottom: "1px solid #333",
    backgroundColor: "#252526",
    padding: "4px 8px",
  };

  const tabStyle = (isActive) => ({
    padding: "4px 12px",
    marginRight: 4,
    cursor: "pointer",
    backgroundColor: isActive ? "#1e1e1e" : "transparent",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    color: "#d4d4d4",
    display: "flex",
    alignItems: "center",
    fontFamily: "monospace",
  });

  const closeButtonStyle = {
    marginLeft: 6,
    color: "#888",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      {tabs.map((tab, i) => (
        <div key={i} style={tabStyle(tab.name === activeTab.name)}>
          <div onClick={() => onTabClick(tab)} style={{ display: "flex", alignItems: "center" }}>
            {tab.icon && <span style={{ marginRight: 6 }}>{tab.icon}</span>}
            {tab.name}
          </div>
          {tab.name !== "home.js" && (
            <span style={closeButtonStyle} onClick={() => onTabClose(tab)}>×</span>
          )}
        </div>
      ))}
    </div>
  );
}
