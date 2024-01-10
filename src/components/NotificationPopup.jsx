import React, { useEffect } from 'react';
import '../styles/NotificationPopup.css';

const NotificationPopup = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscKeyPress = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Agrega un event listener cuando el componente se monta
    document.addEventListener('keydown', handleEscKeyPress);

    // Elimina el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div>
      <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`notification-popup ${isOpen ? 'open' : ''}`}>
        <p className="notifications-popup-message">You've got 0 notifications.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default NotificationPopup;
