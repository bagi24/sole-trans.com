import React from "react";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Services from "./pages/Services";
import International from "./pages/services/International";
import Internal from "./pages/services/Internal";
import Terrestrial from "./pages/services/Terrestrial";
import History from "./pages/about/History";
import Partners from "./pages/about/Partners";
import Brokerage from "./pages/services/Brokerage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/international" element={<International />} />
        <Route path="/services/terrestrial" element={<Terrestrial />} />
        <Route path="/services/internal" element={<Internal />} />
        <Route path="/aboutUs/history" element={<History />} />
        <Route path="/aboutUs/partners" element={<Partners />} />
        <Route path="/services/broker" element={<Brokerage />} />
      </Routes>
    </Router>
  );
};

export default App;
