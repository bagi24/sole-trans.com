import React from "react";
import "./services.css";
import { Link } from "react-router-dom";

import international from "../../assets/საერთაშორისო-გადაზიდვები.jpg";
import inline from "../../assets/shida gadazidva.jpg";
import xmeleti from "../../assets/xmeleti.jpg";
import img1 from "../../assets/165175338_1831237197041550_1991766929989696301_n.jpg";

const Services = () => {
  return (
    <section id="services">
      <Link
        to="/services/international"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="service">
          <div className="service-icon">
            <img src={international} alt="Icon 1" />
          </div>
          <div className="service-details">
            <h3>საერთაშორისო გადაზიდვები</h3>
            <p>
              საერთაშორისო გადაზიდვებს უდიდესი როლი ენიჭება როგორც საერთაშორისო
              ვაჭრობის, აგრეთვე ქვეყნის ეკონომიკისა და ბიზნეს სექტორის
              განვითრებისთვის. საერთაშორისო გადაზიდვების ერთ-ერთი
              უმნიშვნელოვანეს მიმართულებას წარმოადგენს საერთაშორისო სახმელეთო
              გადაზიდვები.
            </p>
          </div>
        </div>
      </Link>

      <Link
        to="/services/terrestrial"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="service">
          <div className="service-icon">
            <img src={xmeleti} alt="Icon 2" />
          </div>
          <div className="service-details">
            <h3>სახმელეთო გადაზიდვები</h3>
            <p>
              SOLE-TRANS გთავაზობთ ტვირთის საერთაშორის სახმელეთო გადაზიდვის
              მომსახურების სრულ სპექტრს.
            </p>
          </div>
        </div>
      </Link>

      <Link
        to="/services/internal"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="service">
          <div className="service-icon">
            <img src={inline} alt="Icon 3" />
          </div>
          <div className="service-details">
            <h3>შიდა გადაზიდვები</h3>
            <p>
              ყველა ტიპის ტვირთის გადაზიდვა შესაძლებელია, მათ შორის: საკვები
              პროდუქტები, ალკოჰოლური/გაზიანი სასმელები, მალფუჭებადი, სახიფათო
              კატეგორიის ტვირთები, არაგაბარიტული ტვირთები, მედიკამენტები,
              ნერგები, სარეკლამო, თუ სამშენებლო მასალები.
            </p>
          </div>
        </div>
      </Link>

      <Link
        to="/services/broker"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="service">
          <div className="service-icon">
            <img src={inline} alt="Icon 3" />
          </div>
          <div className="service-details">
            <h3>საბროკერო მომსახურება</h3>
            <p>
              SOLE-TRANS გთავაზობთ საბაჟო-საბროკერო მომსახურებას როგორც
              ექსპორტზე, ასევე, იმპორტზე. ჩვენი კომპანია იღებს საბროკერო
              პასუხისმგებლობას ტვირთის აღებიდან მისი საბოოლოო დანიშნულების
              წერტილამდე, რაც ითვალისწინებს ყველანაირი საბაჟო პროცედურის და
              საბუთების სწორად და დროულად წარმოებასა და კონტროლს.
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Services;
