import React from "react";

/**
 * EditorPane.jsx
 * - Zone centrale qui affiche le contenu de la page sélectionnée
 * - style VS Code : fond sombre, monospace, scrollable
 */
export default function EditorPane({ title, content }) {
  const editorStyle = {
    backgroundColor: "#1e1e1e",
    color: "#d4d4d4",
    fontFamily: "monospace",
    padding: "16px",
    height: "calc(100vh - 32px)",
    overflowY: "auto",
    whiteSpace: "pre-wrap",
    flex: 1,
  };

  return (
    <div style={editorStyle}>
      <h2 style={{ color: "#569cd6", marginTop: 0 }}>{title}</h2>
      <div>{content}</div>
    </div>
  );
}
