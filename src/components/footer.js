import React from 'react';

const Footer = ({quote, name}) => {
  return (
    <div className="footer">
      <span className="portrait"></span>
      <div className="quote">
        <p>"{quote}"</p>
        <h2>- {name}</h2>
      </div>
      <div className="signature"></div>
    </div>
  )
}

export default Footer;