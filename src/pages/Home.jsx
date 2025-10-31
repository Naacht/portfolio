import React, { useState } from "react";
import FileLink from "../components/FileLink";
import Tabs from "../components/Tabs";
import EditorPane from "../components/EditorPane";
import "../styles/home.css";

import Projets from "./Projets";
import ExperiencePro from "./ExperiencePro";
import Competence from "./Competence";
import Contact from "./Contact";

export default function Home() {
  const files = [
    {
      name: "home.js",
      component: (
        <div className="home-content fade-in">
          <div className="profile-card">
            <img src="/images/photo.jpg" alt="Moi" className="profile-photo" />
            <h2 className="profile-name">Naacht [Ton Nom]</h2>
            <h3 className="profile-role">💻 Développeur Web Junior</h3>
            <p className="profile-description">
              Passionné par la création d’interfaces modernes et performantes,
              j’aime concevoir des projets React et Node.js tout en cherchant
              à optimiser le code et l’expérience utilisateur.
            </p>
          </div>
        </div>
      ),
    },
    { name: "projets.js", component: <Projets /> },
    { name: "experiencepro.js", component: <ExperiencePro /> },
    { name: "competence.js", component: <Competence /> },
    { name: "contact.js", component: <Contact /> },
  ];

  const fileIcons = {
    home: "🏠",
    projets: "💻",
    experiencepro: "🧠",
    competence: "📚",
    contact: "📬",
  };

  const [openTabs, setOpenTabs] = useState([files[0]]);
  const [activeTab, setActiveTab] = useState(files[0]);

  const handleFileClick = (file) => {
    if (!openTabs.some((f) => f.name === file.name)) setOpenTabs([...openTabs, file]);
    setActiveTab(file);
  };

  const handleTabClick = (tab) => setActiveTab(tab);

  const handleTabClose = (tab) => {
    const newTabs = openTabs.filter((f) => f.name !== tab.name);
    setOpenTabs(newTabs);
    if (activeTab.name === tab.name && newTabs.length > 0) setActiveTab(newTabs[newTabs.length - 1]);
  };

  return (
    <div className="home-container">
      <div className="sidebar">
        <h3>Project Files</h3>
        {files.map((f) => {
          let icon = "";
          Object.keys(fileIcons).forEach((key) => {
            if (f.name.toLowerCase().includes(key)) icon = fileIcons[key];
          });
          return <FileLink key={f.name} name={f.name} icon={icon} onClick={() => handleFileClick(f)} />;
        })}
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Tabs
          tabs={openTabs}
          activeTab={activeTab}
          onTabClick={handleTabClick}
          onTabClose={handleTabClose}
        />
        <EditorPane title={activeTab.name} content={activeTab.component} />
      </div>
    </div>
  );
}
