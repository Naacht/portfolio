import React from "react";

export default function FileLink({ name, icon, onClick }) {
  const style = {
    display: "flex",
    alignItems: "center",
    padding: "4px 8px",
    margin: "4px 0",
    cursor: "pointer",
    color: "#d4d4d4",
    textDecoration: "none",
    fontFamily: "monospace",
    fontSize: "1rem",
    borderRadius: "4px",
  };

  const hoverStyle = { backgroundColor: "#2d2d2d" };
  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={{ ...style, ...(hover ? hoverStyle : {}) }}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {icon && <span style={{ marginRight: 8 }}>{icon}</span>}
      {name}
    </div>
  );
}
