import React from 'react';
import './email.css';

const EmailInput = () => {
  return (
    <div className="email-input-container">
      <input
        type="email"
        placeholder="Enter your email"
        className="email-input"
      />
      <button className="send-button">
        <img src='arrow.png' alt="Send" className="arrow-icon" />
      </button>
    </div>
  );
};

export default EmailInput;
