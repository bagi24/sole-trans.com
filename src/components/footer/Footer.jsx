import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="reserved">
        <p>© 2024 Sole-Trans Company. All rights reserved.</p>
      </div>

      <div className="soc-media">
        <a href="https://www.facebook.com/soletrans">
          <i class="fa-brands fa-facebook"></i>
        </a>

        <a href="">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-twitter"></i>
        </a>
      </div>

      <div className="adress">
        <div className="items">
          <i class="fa-solid fa-building"></i>
          <p>SOLE-TRANS LLC</p>
        </div>

        <div className="items">
          <a
            style={{ display: "flex", textDecoration: "none", gap: "10px" }}
            href="https://maps.app.goo.gl/gAUkqo5RyfEzeTjY6"
          >
            <i class="fa-solid fa-location-dot"></i>
            <p className="address-p">თბილისი, მოსკოვის გამზირი</p>
          </a>
        </div>

        <div className="items">
          <i class="fa-solid fa-mobile-retro"></i>
          <p>+995 599 986686</p>
        </div>

        <div className="items">
          <i class="fa-solid fa-envelope"></i>
          <p>soletrans@yahoo.com</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
