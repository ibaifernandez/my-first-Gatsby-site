import React, { useState, useEffect } from 'react';
import '../styles/SubscriptionPopup.css';
import PopupImage from '../images/subscribe-to-my-journeys-pop-up.jpeg';

const SubscriptionPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [validationMessages, setValidationMessages] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setValidationMessages({ ...validationMessages, [name]: '' });
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name === '') {
      setValidationMessages({ ...validationMessages, name: 'Please enter your name.' });
      return;
    }

    if (formData.email === '' || !isEmailValid(formData.email)) {
      setValidationMessages({ ...validationMessages, email: 'Please enter a valid email address.' });
      return;
    }

    console.log('The form is being sent:', formData);

    setSubmitted(true);
    console.log("Sending...")

    setTimeout(() => {
        console.log ('The form has been submitted!');  
    }, 1000 );
};

  const handleOutsideClick = (event) => {
    const popup = document.querySelector('.subscription-popup');
    if (popup && !popup.contains(event.target)) {
      onClose();
    }
  };

  const handleEscKeyPress = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscKeyPress);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`subscription-popup-overlay ${isOpen ? 'open' : ''}`}   >
      <div className={`subscription-popup ${isOpen ? 'open' : ''}`}>
        <div className="popup-content">
          <div className="popup-header">
            <div className="popup-image-container">
              <img src={PopupImage} alt="Subscribe to MyJourneys" className="popup-subscription-image" />
            </div>
            <button className="close-button" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="popup-body">
            {submitted ? (
              <div className="thank-you-message">
                <p>Thank you for subscribing!</p>
              </div>
            ) : (
              <>
                <h2 className="popup-heading">Subscribe to Our Newsletter</h2>
                <p className="popup-description">and enjoy the best updates on the finest journeys straight to your inbox.</p>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                    />
                    <span className="validation-message">{validationMessages.name}</span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                    <span className="validation-message">{validationMessages.email}</span>
                  </div>

                  <button type="submit">Subscribe</button>
                </form>
              </>
            )}
          </div>
          {submitted && (
            <div className="popup-footer">
              <button className="close-button-after-submitted" onClick={onClose}>
                <span>Close</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPopup;
