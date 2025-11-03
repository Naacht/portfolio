// src/pages/ExperiencePro.jsx
import React from "react";
import "../styles/experiencepro.css";

export default function ExperiencePro() {
  const experiences = [
    {
      poste: "Développeur Web Fullstack",
      entreprise: "W&I Motors",
      periode: "Mars 2025 - Sep 2025",
      type: "Stage",
      description: "Développement complet d’une application de gestion de flotte automobile, incluant la conception du back-office, l’intégration du front-end et le déploiement sur un serveur cloud. Mise en place d’un environnement technique robuste et documenté, favorisant la maintenabilité et l’évolutivité du projet.",
      missions: [
        "Conception du back-office avec Strapi et PostgreSQL pour la gestion des données véhicules et contacts.",
        "Développement du front-end en React et intégration avec l’API Node.js.",
        "Mise en place d’outils de suivi de projet (diagrammes de Gantt, modèles UML, documentation technique).",
        "Hébergement et déploiement du projet sur un serveur OVH avec configuration de l’environnement de production.",
        "Veille à la fiabilité, la sécurité et la disponibilité du service en ligne."
      ],
      technologies: ["React", "Node.js", "Strapi", "PostgreSQL", "OVH", "UML"]
    },
    {
      poste: "Développeur Back-end",
      entreprise: "Wedoomotion Association",
      periode: "Jan 2024 - Mars 2024",
      type: "Stage",
      description: "Participation au développement complet d’applications web, de la conception des maquettes à l’implémentation et aux tests. Contribution à l’amélioration de l’expérience utilisateur et à la qualité du code grâce à des pratiques de développement modernes et collaboratives.",
      missions: [
        "Conception de maquettes interactives avec Figma et Canva pour visualiser les fonctionnalités et fluidifier l’expérience utilisateur.",
        "Développement de modules backend et frontend avec Node.js, Express et MySQL.",
        "Réalisation de tests unitaires et intégration continue pour garantir la fiabilité du code.",
        "Identification et résolution de bugs pour assurer stabilité et performance des applications.",
        "Collaboration avec l’équipe technique en méthodologie agile (scrum, revues de code)."
      ],
      technologies: ["Node.js", "Express", "MySQL", "Figma", "Canva"]
    },
    {
      poste: "Consultant FinOps",
      entreprise: "FINOPSIA",
      periode: "Mai 2023 - Juin 2023",
      type: "Stage",
      description: "Stage orienté sur la gestion et l’optimisation des coûts liés aux infrastructures cloud. Participation à l’analyse de la consommation des ressources et à la mise en place de solutions pour améliorer la performance et la rentabilité des environnements techniques.",
      missions: [
        "Analyse et visualisation de données avec Power BI et Excel pour faciliter la prise de décision.",
        "Gestion et optimisation d’environnements cloud (performance & sécurité).",
        "Suivi et optimisation des coûts cloud via analyse de la consommation des services.",
        "Élaboration de recommandations stratégiques pour améliorer l’efficacité et le ROI des infrastructures."
      ],
      technologies: ["Power BI", "Excel", "Azure", "AWS"]
    }
  ];

  return (
    <div className="experience-container">
      <h3>🧠 Expériences Professionnelles</h3>
      <p className="experience-intro">
        Mon parcours professionnel à travers différentes missions et projets.
      </p>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
              {index !== experiences.length - 1 && <div className="timeline-line"></div>}
            </div>

            <div className="timeline-content">
              <div className="experience-header">
                <div>
                  <h4 className="experience-poste">{exp.poste}</h4>
                  <div className="experience-meta">
                    <span className="experience-entreprise">📍 {exp.entreprise}</span>
                    <span className="experience-type">{exp.type}</span>
                  </div>
                </div>
                <span className="experience-periode">{exp.periode}</span>
              </div>

              <p className="experience-description">{exp.description}</p>

              <div className="experience-missions">
                <strong>Missions :</strong>
                <ul>
                  {exp.missions.map((mission, i) => (
                    <li key={i}>{mission}</li>
                  ))}
                </ul>
              </div>

              <div className="experience-technologies">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}