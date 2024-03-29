import React from "react";
import carfoorPh from "../../assets/sole/carfoor.png";
import sharmPh from "../../assets/sole/sharm.png";
import globbingPH from "../../assets/sole/globbing.jpg";
import "./partners.css";
import Header from "../../components/header/Header";
import { useContext, useState } from "react";
import { LanguageContext } from "../../contextApi/LanguageContext";
import { languages } from "../../contextApi/LanguageData";
import { Link } from "react-router-dom";

export const useLanguage = () => useContext(LanguageContext);

const Partners = () => {
  const [language, setLanguage] = useState("en");
  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, languages }}>
      <Header onLanguageChange={handleLanguageChange} />
      <div className="partnersCon">
        <h1> პარტნიორები</h1>
        <ul className="partners">
          <Link to="https://www.carrefour.ge/mafgeo/ka/">
            <li className="partner">
              <img src={carfoorPh} />

              <p>Carrefour Georgia </p>
            </li>
          </Link>
          <Link to="http://www.sharm.ge/">
            <li className="partner">
              <img src={sharmPh} />
              <p> Sharm Trading</p>
            </li>
          </Link>

          <Link to="https://globbing.com/">
            <li className="partner">
              <img src={globbingPH} />
              <p> Globbing</p>
            </li>
          </Link>
        </ul>
      </div>
    </LanguageContext.Provider>
  );
};

export default Partners;
