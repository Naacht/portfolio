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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔹 Remplace ces valeurs par celles de ton compte EmailJS
    const serviceID = "service_qttv0rk";
    const templateID = "template_z4ezjp9";
    const userID = "3IRNryCAobRloaWl2";

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setStatus("✅ Message envoyé avec succès !");
        setFormData({ nom: "", email: "", sujet: "", message: "" });
      })
      .catch((error) => {
        console.error("Erreur EmailJS :", error);
        setStatus("❌ Une erreur est survenue. Réessaie plus tard.");
      });
  };

  return (
    <div className="contact-container">
      <h3>📬 Me Contacter</h3>
      <p className="contact-intro">
        Une question, un projet, ou simplement envie d'échanger ? N'hésitez pas à me contacter !
      </p>

      <div className="contact-layout">
        {/* Formulaire de contact */}
        <div className="contact-form-section">
          <h4 className="form-titre">Envoyez-moi un message</h4>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="nom">Nom complet</label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
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
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="sujet">Sujet</label>
              <input
                type="text"
                id="sujet"
                name="sujet"
                value={formData.sujet}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
              ></textarea>
            </div>

            {status && <div className="form-status">{status}</div>}

            <button type="submit" className="submit-button">
              <span>Envoyer le message</span>
              <span className="button-icon">→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
