import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terminal from "./components/Terminal";
import Home from "./pages/Home";

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
        <Terminal
          onFinish={() => {
            // Quand le terminal a fini : on masque et montre le site
            setShowTerminal(false);
          }}
        />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Pages vides que l'on complètera après */}
            <Route path="/presentation" element={<div style={{ padding: 20 }}>Presentation (à compléter)</div>} />
            <Route path="/projets" element={<div style={{ padding: 20 }}>Projets (à compléter)</div>} />
            <Route path="/experiencepro" element={<div style={{ padding: 20 }}>Experience Pro (à compléter)</div>} />
            <Route path="/contact" element={<div style={{ padding: 20 }}>Contact (à compléter)</div>} />
            <Route path="*" element={<div style={{ padding: 20 }}>404 — page non trouvée</div>} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
