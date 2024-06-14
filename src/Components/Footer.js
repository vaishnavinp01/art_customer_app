import React from "react";
import "../CSS/Footer.css";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import img1 from "../images/Art_visions__2_-removebg-preview.png";
import { Col, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <img className="footer-img" src={img1} />
            <h3 className="footer-h3">Art Vision</h3>
          </div>
          <div className="footer-col">
            <h4>Menu</h4>
            <ul className="footer-unstyled">
              <li className="footer-list">Home</li>
              <li className="footer-list">About</li>
              <li className="footer-list">Top Artist</li>
              <li className="footer-list">Top ArtWork</li>
              <li className="footer-list">Contact Us</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connected with Us</h4>
            <BsInstagram />
            <li className="footer-li">Instagram</li>
            <BsFacebook />
            <li className="footer-li">Facebook</li>
            <BsTwitter />
            <li className="footer-li">Twitter</li>
          </div>
          <div className="footer-col">
            <h4>Registered Office</h4>
            <li>364, Travasso</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
