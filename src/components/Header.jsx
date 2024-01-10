// Header.js
import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SubscriptionPopup from './SubscriptionPopup.jsx';
import HeaderLogo from '../images/header-logo.svg';
import DateTimeDisplay from './Clock.jsx'; // Importa el nuevo componente

const Header = ({ openSubscriptionPopup, openNotificationPopup }) => {
  return (
    <header>
      <div className="header-content">
        <div className="header-container">
          <div className="date-time">
            <DateTimeDisplay />
          </div>
          <div className="header-logo-container">
            <a href="#">
              <img className="header-logo" src={HeaderLogo} alt="My Journeys Logo" />
            </a>
          </div>
          <div className="subscribe">
            <Link to="/newsletters" className="subscribe-link">
              Newsletters
            </Link>
            <button className="subscribe-button" onClick={openSubscriptionPopup}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/leisure">Leisure</Link></li>
            <li><Link to="/top5">Top 5</Link></li>
            <li><Link to="/travel-culture">Travel Culture</Link></li>
            <li><Link to="/travel-tips">Travel Tips</Link></li>
            <li><Link to="#"><FontAwesomeIcon id="search-icon" icon={faSearch} /></Link></li>
          </ul>
        </nav>
        <div id="search-bar-container" className="search-bar-container">
          <div className="search-bar" id="search-bar">
            <input type="text" placeholder="Search for keywords..." />
            <button id="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;