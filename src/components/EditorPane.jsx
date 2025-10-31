// src/components/EditorPane.jsx
import React from "react";

export default function EditorPane({ content }) {
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
      {content}
    </div>
  );
}
