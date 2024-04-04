import React from "react";
import { useContext, useState } from "react";
import { LanguageContext } from "../../../contextApi/LanguageContext";
import { languages } from "../../../contextApi/LanguageData";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import img from "../../../assets/shida gadazidva.jpg";
import "./internal.css";

export const useLanguage = () => useContext(LanguageContext);

const Internal = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, languages }}>
      <Header onLanguageChange={handleLanguageChange} />

      <div class="section">
        <div className="info-con">
          <h1 class="title">შიდა გადაზიდვა</h1>
          <p class="description">
            კომპანია SOLE-TRANS სხვა მრავალ სერვისთან ერთად გთავაზობთ შიდა
            გადაზიდვის სერვისს, რომელიც გულისხმობს საქართველოს ტერიტორიაზე სრული
            ან ნაწილობრივი დატვირთვის ტრაილერის ტრანსპორტირებას. ძირითადად
            აღნიშნული სერვისი გამოიყენება საკონტეინერო გადაზიდვებში საქართველოს
            პორტიდან ნებისმიერი მიმართულებით ან საბაჟო ტერმინალიდან კლიენტის
            საწყობამდე. აღსანიშნავია ის ფაქტიც, რომ კომპანიამ განახორციელა დიდი
            რაოდენობის შიდა გადაზიდვა რამოდენიმე სახელმწიფო ტენდერის ფარგლებში.
          </p>
        </div>
        <div className="img-con">
          <img src={img} />
        </div>
      </div>

      <Footer />
    </LanguageContext.Provider>
  );
};

export default Internal;
