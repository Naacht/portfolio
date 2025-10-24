import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terminal from "./components/Terminal";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import ExperiencePro from "./pages/ExperiencePro";
import Competence from "./pages/Competence";
import Contact from "./pages/Contact";

/**
 * App.jsx
 * - Affiche Terminal au chargement
 * - Quand Terminal a fini, on bascule sur le Router
 */

export default function App() {
  const [showTerminal, setShowTerminal] = useState(true);

  return (
    <>
      {showTerminal ? (
        <Terminal onFinish={() => setShowTerminal(false)} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/experiencepro" element={<ExperiencePro />} />
            <Route path="/competence" element={<Competence />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div style={{ padding: 20 }}>404 — page non trouvée</div>} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
