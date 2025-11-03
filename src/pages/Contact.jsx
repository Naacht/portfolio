// src/pages/Contact.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceID = "service_qttv0rk";
    const templateID = "template_z4ezjp9";
    const userID = "3IRNryCAobRloaWl2";

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setStatus("✅ Message envoyé avec succès !");
        setFormData({ nom: "", email: "", sujet: "", message: "" });
        setIsLoading(false);
        setTimeout(() => setStatus(""), 5000);
      })
      .catch((error) => {
        console.error("Erreur EmailJS :", error);
        setStatus("❌ Une erreur est survenue. Réessaie plus tard.");
        setIsLoading(false);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h3>📬 Me Contacter</h3>
        <p className="contact-intro">
          Une question, un projet, ou simplement envie d'échanger ? N'hésitez pas à me contacter !
        </p>
      </div>

      <div className="contact-centered-layout">
        <div className="contact-form-section">
          <h4 className="form-titre">Envoyez-moi un message</h4>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nom">Nom complet</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jean.dupont@example.com"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="sujet">Sujet</label>
              <input
                type="text"
                id="sujet"
                name="sujet"
                value={formData.sujet}
                onChange={handleChange}
                placeholder="Proposition de projet"
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message ici..."
                rows="8"
                required
                disabled={isLoading}
              ></textarea>
            </div>

            {status && (
              <div className={`form-status ${status.includes('❌') ? 'error' : 'success'}`}>
                {status}
              </div>
            )}

            <button type="submit" className="submit-button" disabled={isLoading}>
              {isLoading ? (
                <>
                  <span>Envoi en cours...</span>
                  <span className="button-spinner">⟳</span>
                </>
              ) : (
                <>
                  <span>Envoyer le message</span>
                  <span className="button-icon">→</span>
                </>
              )}
            </button>
          </form>

          <div className="contact-info-footer">
            <p>Vous pouvez aussi me contacter directement :</p>
            <div className="contact-links">
              <a href="mailto:votre.email@example.com" className="contact-link">
                📧 votre.email@example.com
              </a>
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="contact-link">
                🐙 GitHub
              </a>
              <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="contact-link">
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}