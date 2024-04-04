import React from "react";
import Header from "../components/header/Header";
import { useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../contextApi/LanguageContext";
import { languages } from "../contextApi/LanguageData";

import Footer from "../components/footer/Footer";
import "./contactPage.css";

export const useLanguage = () => useContext(LanguageContext);

const ContactPage = () => {
  const [language, setLanguage] = useState("en");
  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };
  return (
    <LanguageContext.Provider value={{ language, languages }}>
      <Header onLanguageChange={handleLanguageChange} />
      <div className="contact-con">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.312245436914!2d44.86553871533482!3d41.679475688080625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440dd1850f3289%3A0x207a22ad11b3356a!2s25%20Moscow%20Ave%2C%20T'bilisi!5e0!3m2!1sen!2sge!4v1648129179500!5m2!1sen!2sge"
          width={800}
          height={650}
          style={{
            border: "0",
          }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>

        <div className="adress">
          <div className="items">
            <i class="fa-solid fa-building i"></i>
            <p>SOLE-TRANS LLC</p>
          </div>

          <div className="items">
            <a
              style={{ display: "flex", textDecoration: "none", gap: "10px" }}
              href="https://maps.app.goo.gl/gAUkqo5RyfEzeTjY6"
            >
              <i class="fa-solid fa-location-dot i"></i>
              <p className="address-p">თბილისი, მოსკოვის გამზირი</p>
            </a>
          </div>

          <div className="items">
            <i class="fa-solid fa-mobile-retro i"></i>
            <p>+995 599 986686</p>
          </div>

          <div className="items">
            <i class="fa-solid fa-envelope i"></i>
            <p>soletrans@yahoo.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </LanguageContext.Provider>
  );
};

export default ContactPage;
