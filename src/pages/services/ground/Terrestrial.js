import React from "react";
import { useContext, useState } from "react";
import { LanguageContext } from "../../../contextApi/LanguageContext";
import { languages } from "../../../contextApi/LanguageData";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import "./terrestrial.css";

export const useLanguage = () => useContext(LanguageContext);

const Terrestrial = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, languages }}>
      <Header onLanguageChange={handleLanguageChange} />
      <div class="section">
        <h1 class="title">ტვირთის დაცლა-დატვირთვის მომსახურება</h1>
        <p class="description">
          დატვირთვა-გადმოტვირთვის სერვისები გადამწყვეტ როლს თამაშობს სხვადასხვა
          ინდუსტრიებში, რაც ხელს უწყობს საქონლისა და მასალების ეფექტურად და
          უსაფრთხოდ გადაადგილებას. იქნება ეს ლოჯისტიკაში, მშენებლობაში,
          წარმოებაში თუ საცალო ვაჭრობაში, ეს სერვისები აუცილებელია უწყვეტი
          ოპერაციებისთვის. დატვირთვისა და გადმოტვირთვის სერვისები არის მიწოდების
          ჯაჭვის მენეჯმენტის, ლოგისტიკისა და განაწილების ოპერაციების შეუცვლელი
          კომპონენტები. ეს სერვისები მოითხოვს კვალიფიციურ პროფესიონალებს,
          ეფექტურ პროცესებს და უსაფრთხოებისა და მარეგულირებელი სტანდარტების
          დაცვას, რათა უზრუნველყონ საქონლის შეუფერხებელი გადაადგილება საწყისიდან
          დანიშნულების ადგილამდე. სანდო დატვირთვისა და გადმოტვირთვის სერვისებში
          ინვესტიციით
        </p>
      </div>
      <div class="section">
        <h2 class="title">დატვირთვის სერვისი:</h2>
        <p class="description">
          ჩატვირთვის სერვისები გულისხმობს საქონლის ფრთხილად და სისტემატიურ
          განლაგებას სატრანსპორტო საშუალებებზე, კონტეინერებზე ან შესანახ
          ადგილებზე ტრანსპორტირებისთვის ან შესანახად,სადაც გასათვალისწინებელი
          კომპონენტებია:
        </p>
        <ul>
          <li className="li"> სივრცის ეფექტური გამოყენება</li>
          <li className="li"> სპეციალიზებული აღჭურვილობა და ტექნიკა:</li>
          <li className="li"> პროდუქტის უსაფრთხოება და დაცვა</li>
          <li className="li">რეგულაციებთან შესაბამისობა: </li>
          <li className="li">დროის ეფექტურობა: </li>
          <li className="li">მორგება და მოქნილობა: </li>
          <li className="li">დოკუმენტაცია და თვალყურის დევნება:</li>
        </ul>
      </div>

      <div class="section">
        <h2 class="title">გადმოტვირთვის სერვისები:</h2>
        <p class="description">
          გადმოტვირთვის სერვისები გულისხმობს საქონლის სისტემატიურ გატანას
          სატრანსპორტო სატრანსპორტო საშუალებებიდან ან შესანახი ადგილებიდან
          დანიშნულების ადგილზე მისვლისთანავე ,სადაც გასათვალისწინებელი
          კომპონენტებია:
        </p>
        <ul>
          <li className="li"> ფრთხილად მართვა და ინსპექტირება</li>
          <li className="li"> განტვირთვის ეფექტური პროცედურები:</li>
          <li className="li"> აღჭურვილობისა და ხელსაწყოების გამოყენება:</li>
          <li className="li">დახარისხება და განაწილება: </li>
          <li className="li">ინვენტარის მენეჯმენტი: </li>
          <li className="li">შესაფუთი მასალების განადგურება: </li>
          <li className="li">მომხმარებელთა კმაყოფილება:</li>
        </ul>
      </div>

      <Footer />
    </LanguageContext.Provider>
  );
};

export default Terrestrial;
