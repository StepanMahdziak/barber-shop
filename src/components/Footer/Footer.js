import React from "react";
import './Footer.scss';
export const Footer = () => (
  <div className="footer">
    <span className="footer__item">@copyright</span>
    <span className="footer__item footer__item-fl">Forum Lviv</span>
    <div className="footer__social-icons">
      <i className="fa fa-instagram" />
      <i className="fa fa-facebook-f" />
      <i className="fa fa-twitter"></i>
      <i className="fa fa-telegram"></i>
    </div>
  </div>
);
