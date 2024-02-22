import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="reserved">
        <p>© 2024 Sole-Trans Company. All rights reserved.</p>
      </div>

      <div className="soc-media">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>

      <div className="adress">
        <div className="items">
          <i class="fa-solid fa-building"></i>
          <p>SOLE-TRANS LLC</p>
        </div>

        <div className="items">
          <i class="fa-solid fa-location-dot"></i>
          <p>თბილისი, მოსკოვის გამზირი</p>
        </div>

        <div className="items">
          <i class="fa-solid fa-mobile-retro"></i>
          <p>577245435</p>
        </div>

        <div className="items">
          <i class="fa-solid fa-envelope"></i>
          <p>sole-trans@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
