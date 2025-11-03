// src/pages/Competence.jsx
import React, { useState, useEffect } from "react";
import "../styles/competence.css";
import VScodeLogo from "../assets/VScode.png";

// ✅ Import correct des icônes existantes dans react-icons
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiOracle,
  SiPostman,
} from "react-icons/si";

export default function Competence() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimated(true), 300);
  }, []);

  const competences = {
    Frontend: [
      { nom: "React.js", niveau: 85, icon: <FaReact color="#61DAFB" size={22} /> },
      { nom: "JavaScript", niveau: 80, icon: <SiJavascript color="#F7DF1E" size={22} /> },
      { nom: "HTML5", niveau: 90, icon: <SiHtml5 color="#E34F26" size={22} /> },
      { nom: "CSS3", niveau: 90, icon: <SiCss3 color="#1572B6" size={22} /> },
      { nom: "Next.js", niveau: 50, icon: <SiNextdotjs color="#FFFFFF" size={22} /> },
    ],
    Backend: [
      { nom: "Node.js", niveau: 75, icon: <FaNodeJs color="#339933" size={22} /> },
      { nom: "Express.js", niveau: 75, icon: <SiExpress color="#FFFFFF" size={22} /> },
      { nom: "PHP / Laravel", niveau: 50, icon: <FaPhp color="#8993BE" size={22} /> },
      { nom: "Python", niveau: 40, icon: <FaPython color="#3776AB" size={22} /> },
    ],
    "Base de données": [
      { nom: "MySQL", niveau: 90, icon: <SiMysql color="#00758F" size={22} /> },
      { nom: "PostgreSQL", niveau: 70, icon: <SiPostgresql color="#336791" size={22} /> },
      { nom: "MongoDB", niveau: 65, icon: <SiMongodb color="#47A248" size={22} /> },
      { nom: "OracleSQL", niveau: 45, icon: <SiOracle color="#F80000" size={22} /> },
    ],
    "Outils & Autres": [
      { nom: "Git / GitHub", niveau: 85, icon: <FaGitAlt color="#F05032" size={22} /> },
      { nom: "VS Code", niveau: 90, icon: <img src={VScodeLogo} alt="VS Code" style={{ width: 22, height: 22, verticalAlign: "middle" }} /> },
      { nom: "Postman", niveau: 80, icon: <SiPostman color="#FF6C37" size={22} /> },
      { nom: "Linux", niveau: 50, icon: <FaLinux color="#FCC624" size={22} /> },
    ],
  };

  const certifications = [
    {
      titre: "Certification React.js",
      organisme: "OpenClassrooms",
      date: "2024",
      lien: "/certifications/ma_certification.pdf",
    },
    {
      titre: "Certification Node.js",
      organisme: "Udemy",
      date: "2023",
      lien: "/certifications/ma_certification2.pdf",
    },
    {
      titre: "JavaScript Avancé",
      organisme: "FreeCodeCamp",
      date: "2023",
      lien: "#",
    },
  ];

  return (
    <div className="competence-container">
      <h3>💻 Compétences Techniques</h3>
      <p className="competence-intro">
        Mes compétences acquises à travers mes projets et expériences professionnelles.
      </p>

      {/* === Liste des compétences === */}
      <div className="competences-grid">
        {Object.entries(competences).map(([categorie, skills], index) => (
          <div key={index} className="competence-categorie">
            <h4 className="categorie-titre">{categorie}</h4>
            <div className="skills-list">
              {skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-nom">
                      <span className="skill-icon">{skill.icon}</span>
                      {skill.nom}
                    </span>
                    <span className="skill-pourcentage">{skill.niveau}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className={`skill-progress ${animated ? "animated" : ""}`}
                      style={{ "--niveau": `${skill.niveau}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* === Certifications === */}
      <div className="certifications-section">
        <h4 className="section-titre">📄 Certifications</h4>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-card"
            >
              <div className="cert-icon">🏆</div>
              <div className="cert-content">
                <h5 className="cert-titre">{cert.titre}</h5>
                <p className="cert-organisme">{cert.organisme}</p>
                <span className="cert-date">{cert.date}</span>
              </div>
              <div className="cert-arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
