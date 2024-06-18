import React from "react";
import "../CSS/Footer.css";
import img1 from "../images/nav-removebg-preview.png"
const Footer = () => {
  return (
    <div className="footer-div">
      <footer>
        <div className="footer-row">
          <div className="footer-col">
            <img src={img1} className="footer-logo"/>
            <h1>Art Vision</h1>
          </div>
          <div className="footer-col"></div>
          <div className="footer-col"></div>
          <div className="footer-col"></div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
