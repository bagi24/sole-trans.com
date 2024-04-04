import React from "react";
import Header from "../../components/header/Header";
import { useContext, useState } from "react";
import { LanguageContext } from "../../contextApi/LanguageContext";
import { languages } from "../../contextApi/LanguageData";
import img from "../../assets/logo.jpg";
import Footer from "../../components/footer/Footer";
import "./history.css";
export const useLanguage = () => useContext(LanguageContext);

const History = () => {
  const [language, setLanguage] = useState("en");
  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };
  return (
    <LanguageContext.Provider value={{ language, languages }}>
      <Header onLanguageChange={handleLanguageChange} />

      <div class="company-container">
        <div class="img-con">
          <img src={img} alt="Company Image" />
        </div>
        <div class="section">
          <div class="info-con">
            <p class="description">
              <span className="uppercase">
                {" "}
                <strong> SOLE-TRANS </strong> არის ქართული კომპანია{" "}
              </span>{" "}
              , რომელმაც მოღვაწეობა დაიწყო 2014 წელს საქართველოს ბაზარზე.
              ევროპულ გამოცდილებაზე დაყრდნობით, მოტივირებული კადრებით, კომპანიის
              სწორი კურსითა და ხარისხიანი პროდუქტით SOLE-TRANS-მ მისი არსებობის
              საკმაოდ მცირე პერიოდში თქვა ახალი სიტყვა საქართველოს ბაზარზე.
            </p>
            <p class="description">
              ინოვაციებისა მიდგომების გამოყენებით , ჩვენმა გუნდმა დანერგა
              მომსახურებისა და სერვის პლიუსის ახალი კულტურა.
            </p>
            <p class="description">
              ჩვენთვის თითოეული მომხმარებლის აზრი მნიშვნელოვანია, რადგან სწორედ
              აღნიშნული პოლიტიკა იძლევა კომპანიის სწორად განვითარების
              საშუალებას.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </LanguageContext.Provider>
  );
};

export default History;
