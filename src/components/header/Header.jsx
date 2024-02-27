import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import CompanyLogo from "../../assets/logo.jpg";
import { useState } from "react";

import { useLanguage } from "../../pages/HomePage";

const Header = ({ onLanguageChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredAbout, setIsHoveredAbout] = useState(false);
  // const [isHoveredFlag, setIsHoveredFlag] = useState(false);
  // const [active, setActive] = useState(false);

  const { language, languages } = useLanguage();

  const handleChange = (e) => {
    onLanguageChange(e.target.value);
  };

  // const openModal = () => {
  //   setActive(true);
  // };

  // const closeModal = () => {
  //   setActive(false);
  // };

  return (
    <header className="header">
      <div className="container ">
        <nav className="navbar">
          <Link to="/" className="logo">
            <img src={CompanyLogo} alt="" />
            <span className="logoSpan">OLE-TRANS</span>
          </Link>
          <h1 className="sole">
            <i class="fa-solid fa-truck"></i>
          </h1>
          <ul className="nav-menu">
            <li
              className="servicess"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link to="/services">
                {" "}
                {languages[language].navigation.Services}
              </Link>
            </li>
            <li
              onMouseEnter={() => setIsHoveredAbout(true)}
              onMouseLeave={() => setIsHoveredAbout(false)}
            >
              <Link to="/about"> {languages[language].navigation.About}</Link>
            </li>
            <li>
              <Link to="/contact">
                {languages[language].navigation.Contact}
              </Link>
            </li>
            {/* <li
              onMouseEnter={() => setIsHoveredFlag(true)}
              onMouseLeave={() => setIsHoveredFlag(false)}
            >
              <Link to="/Ge">
                <img className="GeFlag" src={GeFlag} alt="" />
              </Link>
            </li> */}
            <li class="custom-select">
              <select
                id="languageSelect"
                value={language}
                onChange={handleChange}
              >
                <option value="ru">RU </option>
                <option value="en">EN</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
      {isHovered && (
        <ul
          className="optional"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link className="link-style" to="/services/international">
            <li>{languages[language].navigation.International}</li>
          </Link>
          <Link className="link-style" to="/services/terrestrial">
            <li>{languages[language].navigation.Ground}</li>
          </Link>
          <Link className="link-style" to="/services/internal">
            <li>{languages[language].navigation.Internal}</li>
          </Link>
          <Link className="link-style" to="/services/broker">
            <li>{languages[language].navigation.Brokerage}</li>
          </Link>
        </ul>
      )}

      {isHoveredAbout && (
        <ul
          className="optionalAbout"
          onMouseEnter={() => setIsHoveredAbout(true)}
          onMouseLeave={() => setIsHoveredAbout(false)}
        >
          <Link className="link-style" to="/aboutUs/history">
            <li>{languages[language].navigation.History} </li>
          </Link>
          <Link className="link-style" to="/aboutUs/partners">
            <li>{languages[language].navigation.Partners}</li>
          </Link>
        </ul>
      )}

      {/* {isHoveredFlag && (
        <ul
          className="optionalFlag"
          onMouseEnter={() => setIsHoveredFlag(true)}
          onMouseLeave={() => setIsHoveredFlag(false)}
        >
          <Link className="link-style" to="/En">
            <li>
              <img className="flag" src={EnFlag} alt="" />
            </li>
          </Link>
          <Link className="link-style" to="/Ru">
            <li>
              <img className="flag" src={RuFlag} alt="" />
            </li>
          </Link>
        </ul>
      )} */}
    </header>
  );
};

export default Header;
