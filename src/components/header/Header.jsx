import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import CompanyLogo from "../../assets/logo.jpg";
import { useState } from "react";
import GeFlag from "../../assets/sole/GE-Georgia-Flag-icon.png";
import EnFlag from "../../assets/sole/EN-English.jpg";
import RuFlag from "../../assets/sole/RU-Russia.png";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredAbout, setIsHoveredAbout] = useState(false);
  const [isHoveredFlag, setIsHoveredFlag] = useState(false);
  const [active, setActive] = useState(false);

  const openModal = () => {
    setActive(true);
  };

  const closeModal = () => {
    setActive(false);
  };

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
              <Link to="/services">Services</Link>
            </li>
            <li
              onMouseEnter={() => setIsHoveredAbout(true)}
              onMouseLeave={() => setIsHoveredAbout(false)}
            >
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li
              onMouseEnter={() => setIsHoveredFlag(true)}
              onMouseLeave={() => setIsHoveredFlag(false)}
            >
              <Link to="/en">
                <img className="GeFlag" src={GeFlag} alt="" />
              </Link>
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
            <li>საერთაშორისო </li>
          </Link>
          <Link className="link-style" to="/services/terrestrial">
            <li>სახმელეთო</li>
          </Link>
          <Link className="link-style" to="/services/internal">
            <li>შიდა</li>
          </Link>
          <Link className="link-style" to="/services/broker">
            <li>საბროკერო</li>
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
            <li>ისტორია </li>
          </Link>
          <Link className="link-style" to="/aboutUs/partners">
            <li>პარტნიორები</li>
          </Link>
        </ul>
      )}

      {isHoveredFlag && (
        <ul
          className="optionalFlag"
          onMouseEnter={() => setIsHoveredFlag(true)}
          onMouseLeave={() => setIsHoveredFlag(false)}
        >
          <Link className="link-style" to="/blog">
            <li>
              <img className="flag" src={EnFlag} alt="" />
            </li>
          </Link>
          <Link className="link-style" to="/blog">
            <li>
              <img className="flag" src={RuFlag} alt="" />
            </li>
          </Link>
        </ul>
      )}
    </header>
  );
};

export default Header;
