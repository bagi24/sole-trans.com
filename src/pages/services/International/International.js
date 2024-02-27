import React from "react";
import "./international.css";
import Header from "../../../components/header/Header";
import Image from "../../../assets/int.jpg";
import { useContext, useState } from "react";
import { LanguageContext } from "../../../contextApi/LanguageContext";
import { languages } from "../../../contextApi/LanguageData";
import Footer from "../../../components/footer/Footer";

export const useLanguage = () => useContext(LanguageContext);

const International = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, languages }}>
      <Header onLanguageChange={handleLanguageChange} />
      <div className="international-container">
        <div className="img-con">
          <img src={Image} />
        </div>

        <div className="info-con">
          <h1> International Export from Georgia</h1>
          <p>
            Exporting goods from Georgia involves several considerations
            including optimal timing and cost-effective transportation routes.
            The efficiency of the export process relies on two main components:
            optimal timing of shipment and optimal cost of shipment.
          </p>
          <p>
            It is crucial to ensure the optimal timing of shipment to facilitate
            timely delivery and minimize costs associated with storage and
            handling. Additionally, optimizing the cost of shipment involves
            negotiating favorable rates and considering competitive pricing.
          </p>
          <p>
            When transporting goods, it's essential to minimize the risk of
            damage during transit. Accurate information provided in
            transportation documents helps address concerns at
            regulatory/customs checkpoints.
          </p>
        </div>
      </div>

      <Footer />
    </LanguageContext.Provider>
  );
};

export default International;
