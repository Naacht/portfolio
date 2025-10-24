import React, { useState } from "react";
import FileLink from "../components/FileLink";
import EditorPane from "../components/EditorPane";

export default function Home() {
  const containerStyle = {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "monospace",
    backgroundColor: "#1e1e1e",
    color: "#d4d4d4",
  };

  const sidebarStyle = {
    width: "220px",
    borderRight: "1px solid #333",
    padding: "20px",
    boxSizing: "border-box",
  };

  // fichiers + contenu simulé
  const files = [
    { name: "home.js", content: "Bienvenue sur mon portfolio !\nIci vous trouverez mes projets et expériences." },
    { name: "presentation.js", content: "Je suis développeur web junior, passionné par React et les interfaces modernes." },
    { name: "projets.js", content: "Projets : \n- Site e-commerce\n- Portfolio interactif\n- Application React/Node.js" },
    { name: "experiencepro.js", content: "Expériences professionnelles : \n- Stage développeur frontend chez XYZ\n- Freelance React" },
    { name: "competence.js", content: "Compétences :\n- React, JavaScript, HTML, CSS\n- Git, GitHub\n- UI/UX" },
    { name: "contact.js", content: "Contactez-moi : \nemail@example.com\nLinkedIn: /in/monprofil" },
  ];

  const fileIcons = {
    home: "🏠",
    presentation: "📄",
    projets: "💻",
    experiencepro: "🧠",
    competence: "📚",
    contact: "📬",
  };

  // State pour le fichier ouvert
  const [activeFile, setActiveFile] = useState(files[0]);

  return (
    <div style={containerStyle}>
      {/* Sidebar gauche */}
      <div style={sidebarStyle}>
        <h3 style={{ marginTop: 0 }}>Project Files</h3>
        {files.map((f, i) => {
          let icon = "";
          Object.keys(fileIcons).forEach((key) => {
            if (f.name.toLowerCase().includes(key)) icon = fileIcons[key];
          });
          return (
            <FileLink
              key={i}
              name={f.name}
              to="#" // on utilise le state, pas React Router ici
              icon={icon}
              onClick={() => setActiveFile(f)}
            />
          );
        })}
      </div>

      {/* Zone centrale (éditeur) */}
      <EditorPane title={activeFile.name} content={activeFile.content} />
    </div>
  );
}
