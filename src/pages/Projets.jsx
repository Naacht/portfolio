// src/pages/Projets.jsx
import React from "react";
import "../styles/projets.css";

export default function Projets() {
  const projets = [
    {
      titre: "Site e-commerce",
      description: "Plateforme de vente en ligne complète avec panier, paiement et gestion des commandes. Développée avec React et Node.js.",
      technologies: ["React", "Node.js", "MySQL", "Stripe"],
      githubUrl: "https://github.com/username/ecommerce-project",
      demoUrl: "https://demo-ecommerce.com"
    },
    {
      titre: "Portfolio interactif",
      description: "Portfolio personnel avec interface type VS Code, animations fluides et navigation intuitive.",
      technologies: ["React", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/username/portfolio",
      demoUrl: null
    },
    {
      titre: "Application bancaire Java",
      description: "Développement d’une application de bureau complète pour la gestion de comptes bancaires, incluant l’authentification sécurisée, la gestion des rôles (client / administrateur), la consultation et les virements entre comptes, ainsi qu’un historique détaillé des transactions. Une messagerie en temps réel entre client et conseiller est actuellement en cours d’intégration.",
      technologies: ["Java", "Spring Boot", "Spring Security", "API REST", "WebSocket"],
      githubUrl: "https://github.com/username/fullstack-app",
      demoUrl: "https://demo-app.com"
    },
    {
      titre: "Jeu - Capture Monsieur X",
      description: "Développement d’un jeu en ligne interactif inspiré du concept de “Capture de Monsieur X”. Les joueurs se connectent via un système d’authentification, se déplacent sur une carte dynamique et collaborent pour localiser et capturer “Monsieur X”. Le projet intègre la gestion de sessions, la communication serveur-client via Servlets et JSP, ainsi qu’une base de données pour le suivi des joueurs et des parties.",
      technologies: ["Java", "Servlets", "JavaServer Pages (JSP)","SQL"],
      githubUrl: "https://github.com/username/fullstack-app",
      demoUrl: "https://demo-app.com"
    }
  ];

  return (
    <div className="projets-container">
      <h3>💻 Mes Projets</h3>
      <p className="projets-intro">
        Voici quelques projets sur lesquels j'ai travaillé. Chaque projet représente une opportunité d'apprentissage et de croissance.
      </p>

      <div className="projets-grid">
        {projets.map((projet, index) => (
          <div key={index} className="projet-card">
            <div className="projet-header">
              <h4 className="projet-titre">{projet.titre}</h4>
              <span className="projet-number">#{index + 1}</span>
            </div>

            <p className="projet-description">{projet.description}</p>

            <div className="projet-technologies">
              {projet.technologies.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className="projet-links">
              <a 
                href={projet.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="projet-link github-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              
              {projet.demoUrl && (
                <a 
                  href={projet.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="projet-link demo-link"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}