// src/pages/Competence.jsx
import React, { useState, useEffect } from "react";
import "../styles/competence.css";

export default function Competence() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimated(true), 300);
  }, []);

  const competences = {
    "Frontend": [
      { nom: "React.js", niveau: 85, icon: "⚛️" },
      { nom: "JavaScript", niveau: 80, icon: "📜" },
      { nom: "HTML5/CSS3", niveau: 90, icon: "🎨" },
      { nom: "Next.js", niveau: 70, icon: "▲" }
    ],
    "Backend": [
      { nom: "Node.js", niveau: 75, icon: "🟢" },
      { nom: "Express.js", niveau: 75, icon: "🚂" },
      { nom: "PHP/Laravel", niveau: 65, icon: "🐘" },
      { nom: "Python", niveau: 60, icon: "🐍" }
    ],
    "Base de données": [
      { nom: "MySQL", niveau: 80, icon: "🐬" },
      { nom: "PostgreSQL", niveau: 70, icon: "🐘" },
      { nom: "MongoDB", niveau: 65, icon: "🍃" },
      { nom: "OracleSQL", niveau: 55, icon: "🔴" }
    ],
    "Outils & Autres": [
      { nom: "Git/GitHub", niveau: 85, icon: "📦" },
      { nom: "VS Code", niveau: 90, icon: "💻" },
      { nom: "Postman", niveau: 80, icon: "📮" },
      { nom: "Linux", niveau: 70, icon: "🐧" }
    ]
  };

  const certifications = [
    {
      titre: "Certification React.js",
      organisme: "OpenClassrooms",
      date: "2024",
      lien: "/certifications/ma_certification.pdf"
    },
    {
      titre: "Certification Node.js",
      organisme: "Udemy",
      date: "2023",
      lien: "/certifications/ma_certification2.pdf"
    },
    {
      titre: "JavaScript Avancé",
      organisme: "FreeCodeCamp",
      date: "2023",
      lien: "#"
    }
  ];

  return (
    <div className="competence-container">
      <h3>💻 Compétences Techniques</h3>
      <p className="competence-intro">
        Mes compétences acquises à travers mes projets et expériences professionnelles.
      </p>

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
                      className={`skill-progress ${animated ? 'animated' : ''}`}
                      style={{ '--niveau': `${skill.niveau}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

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