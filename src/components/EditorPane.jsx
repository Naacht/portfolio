// src/components/EditorPane.jsx
import React from "react";

export default function EditorPane({ title, content }) {
  const editorStyle = {
    backgroundColor: "#1e1e1e",
    color: "#d4d4d4",
    fontFamily: "monospace",
    padding: "16px",
    height: "calc(100vh - 32px)",
    overflowY: "auto",
    flex: 1,
  };

  return (
    <div style={editorStyle}>
      <h2 style={{ color: "#569cd6", marginTop: 0 }}>{title}</h2>
      {content}
    </div>
  );
}
