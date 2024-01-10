import React, { useState } from 'react';
import Bell from '../images/bell.svg';
import FBIcon from '../images/facebook-logo.svg';
import TWIcon from '../images/twitter-logo.svg';
import NotificationPopup from './NotificationPopup';

const Preheader = () => {
  const [isNotificationPopupOpen, setNotificationPopupOpen] = useState(false);

  const toggleNotificationPopup = () => {
    setNotificationPopupOpen(!isNotificationPopupOpen);
  };

  const closeNotificationPopup = () => {
    setNotificationPopupOpen(false);
  };

  return (
    <div className="pre-header">
      <div className="pre-header-container">
        <div className="left-icons">
          <a href="#">
            <div className="mobile-menu">
              {/* Burger menu icon */}
            </div>
          </a>
          <div className="bell-icon" onClick={toggleNotificationPopup}>
            <a href="#">
              <img src={Bell} alt="bell-icon" />
            </a>
          </div>
        </div>
        <div className="right-icons">
          <div className="facebook-icon">
            <a href="https://www.facebook.com/ibaifernandezec" target="_blank" rel="noopener noreferrer">
              <img src={FBIcon} alt="facebook-icon" />
            </a>
          </div>
          <div className="twitter-icon">
            <a href="https://www.twitter.com/ibaifernandezec" target="_blank" rel="noopener noreferrer">
              <img src={TWIcon} alt="twitter-icon" />
            </a>
          </div>
        </div>
      </div>
      <NotificationPopup isOpen={isNotificationPopupOpen} onClose={closeNotificationPopup} />
    </div>
  );
};

export default Preheader;
