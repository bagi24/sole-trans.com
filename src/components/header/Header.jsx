import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import CompanyLogo from "../../assets/logo.jpg";

const Header = () => {
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
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
