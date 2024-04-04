import React from "react";
import "./international.css";
import Header from "../../../components/header/Header";
import Image from "../../../assets/sole/all.jpg";
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
        <div class="info-con">
          <h1>საერთაშორისო სახმელეთო გადაზიდვა</h1>
          <p>
            <strong>SOLE-TRANS- </strong> ის გამართული ავტოპარკი, თქვენი ტვირთის
            გადაზიდვას უზრუნველყოფს, როგორც შიდა, ისე საერთაშორისო მიმართულებით.
            კომპანიის საერთაშორისო გადაზიდვები მოიცავს მთელ ევროპას და ცენტრალურ
            აზიას. გთავაზობთ შიდა გადაზიდვების ფართო სპექტრს.ჩვენი გუნდი
            მსოფლიოს ნებისმიერ წერტილში ორგანიზებას გაუწევს ტვირთების ხარისხიან,
            სწრაფ და უსაფრთხო გადაზიდვას. ჩვენ გვენდობიან საქართველოში მსხვილი
            იმპორტიორი კომპანიები.
          </p>
          <p>
            <strong> SOLE-TRANS-</strong>ის მოძრავი შემადგენლობა
            დაკომპლექტებულია კომპანიის კუთვნილებაში არსებული თანამედროვე და
            დაზღვეული ევრო სტანდარტის ავტოტრანსპორტით. ტექნიკურად გამართული და
            მაღალი დონის ავტოპარკი კი სხვა კომპანიებთან მიმართებაში უპირატესობას
            გვაძლევს ნებისმიერ დროს, შეუფერხებლად შემოგთავაზოთ თქვენთვის
            სასურველი მომსახურეობა.
          </p>
          <h2>ჩვენ გთავაზობთ:</h2>
          <ul>
            <li className="li">
              ტვირთების გადაზიდვა „კარიდან -კარამდე“ პრინციპით;
            </li>
            <li className="li">
              ავტოგადაზიდვა როგორც დიდი, ასევე ნაკრები, შერეული ტვირთის, (ADR)
              ტვირთის, თავისი ლიცენზიით და სერტიფიკატებით;
            </li>
            <li className="li">
              ვიღებთ პასუხისმგებლობას ტვირთის უსაფრთხოებაზე;
            </li>
            <li className="li">
              თქვენი ტვირთი იქნება დაზღვეული მსოფლიოს ნებისიმერ წერტილში
            </li>
            <li className="li">
              მომსახურების სტანდარტულ საფასურში ასევე შედის ტვირთის დეკლარირება
              და განბაჟება
            </li>
            <li className="li">
              ნებართვებისა და გაცილების ორგანიზება როგორც ადგილობრივი
              გადაზიდვის, ასევე მთელი სატრანზიტო დერეფნის ჩათვლით
            </li>
            <li className="li">
              ოპტიმალური სატრანსპორტო სქემების შემუშავება და შეკვეთების
              შესრულების მინიმალური ვადები;
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </LanguageContext.Provider>
  );
};

export default International;
