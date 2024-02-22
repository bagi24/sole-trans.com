import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import CompanyLogo from '../../assets/logo.jpg';
import { useState } from 'react';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [active, setActive] = useState(false);

  const openModal = () => {
    setActive(true);
  };

  const closeModal = () => {
    setActive(false);
  };

  return (
    <header className='header'>
      <div className='container '>
        <nav className='navbar'>
          <Link to='/' className='logo'>
            <img src={CompanyLogo} alt='' />
            <span className='logoSpan'>OLE-TRANS</span>
          </Link>
          <h1 className='sole'>
            <i class='fa-solid fa-truck'></i>
          </h1>
          <ul className='nav-menu'>
            <li
              className='servicess'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      {isHovered && (
        <ul
          className='optional'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <Link className='link-style' to='/aboutUs'>
            <li>საერთაშორისო </li>
          </Link>
          <Link className='link-style' to='/blog'>
            <li>სახმელეთო</li>
          </Link>
          <Link className='link-style' to='/blog'>
            <li>შიდა</li>
          </Link>
        </ul>
      )}
    </header>
  );
};

export default Header;
