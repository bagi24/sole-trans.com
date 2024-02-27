import React from "react";

import { useContext, useState } from "react";
import { LanguageContext } from "../contextApi/LanguageContext";
import { languages } from "../contextApi/LanguageData";

import Header from "../components/header/Header";
import Services from "../components/services/Services";
import AditionalService from "../components/aditionalService/AditionalService";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/footer/Footer";

export const useLanguage = () => useContext(LanguageContext);

const HomePage = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className="app">
      <LanguageContext.Provider value={{ language, languages }}>
        <Header onLanguageChange={handleLanguageChange} />
        <main>
          <Services />
          <AditionalService />
          <Gallery />
        </main>
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
};

export default HomePage;
