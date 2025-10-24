// src/pages/Competence.jsx
import React from "react";

export default function Competence() {
  return (
    <div>
      <h3>💻 Compétences</h3>

      <pre>
{`Langages & Frameworks:
- JavaScript, React.js, Node.js, Next.js, ExpressJS
- HTML5, CSS3, PHP, Laravel
- Python, Java

Gestion de base de données:
- MySQL, PostgreSQL, OracleSQL

Outils & Environnement:
- Visual Studio Code, Eclipse
- Postman, NPM, Git (GitHub, GitLab), Linux`}
      </pre>

      <h4>📄 Certifications</h4>
      <ul>
        <li>
          <a href="/certifications/ma_certification.pdf" target="_blank" rel="noopener noreferrer">
            Certification React.js
          </a>
        </li>
        <li>
          <a href="/certifications/ma_certification2.pdf" target="_blank" rel="noopener noreferrer">
            Certification Node.js
          </a>
        </li>
      </ul>
    </div>
  );
}
