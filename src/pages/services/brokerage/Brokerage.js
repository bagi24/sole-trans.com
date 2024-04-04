import React from "react";
import { useContext, useState } from "react";
import { LanguageContext } from "../../../contextApi/LanguageContext";
import { languages } from "../../../contextApi/LanguageData";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import img from "../../../assets/sole/ბროკერ.jpg";
import "./brokerage.css";

export const useLanguage = () => useContext(LanguageContext);

const Brokerage = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, languages }}>
      <Header onLanguageChange={handleLanguageChange} />
      <div className="brokerage-container">
        <div className="img-con">
          <img src={img} />
        </div>
        <div class="section">
          <div class="info-con">
            <h1 class="title">კომპანია "SOLE-TRANS"</h1>
            <p class="description">
              გთავაზობთ საბაჟო-საბროკერო კომპლექსური მომსახურების სრულ სპექტრს.
              ტვირთის მიღებისას არასწორად შევსებულმა საბაჟო დელკარაციამ შეიძლება
              სერიოზული პრობლემები შეგიქმნათ. ჩვენ გაგიადვილებთ საბაჟოსთან
              ურთიერთობას, თავიდან აგაცილებთ ჯარიმებს და ტვირთის დაგვიანებით
              მიღებულ გამოწვეულ უსიამოვნებებს.
            </p>
          </div>
          <div class="services">
            <h2 class="services-title">საბაჟო-საბროკერო მომსახურება</h2>
            <ul class="service-list">
              <li>სატრანზირო ფორმალობების განხორციელება</li>
              <li>დოკუმენტაციის მომზადება</li>
              <li>საკონსულტაციო მომსახურება</li>
              <li>ტვირთის ჩამოსვლამდე, საბუთების წინასწარ გადამოწმება</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </LanguageContext.Provider>
  );
};

export default Brokerage;
