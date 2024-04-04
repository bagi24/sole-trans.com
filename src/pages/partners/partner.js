import React from "react";
import carfoorPh from "../../assets/sole/carfoor.png";
import sharmPh from "../../assets/sole/sharm.png";
import globbingPH from "../../assets/sole/globbing.jpg";
import { Link } from "react-router-dom";
import "./partner.css";
const partner = () => {
  return (
    <div className="partnersCon">
      <h1> პარტნიორი კომპანიები</h1>
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
  );
};

export default partner;
