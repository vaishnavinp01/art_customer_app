// Footer.js
import React from "react";
import "../CSS/Footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import {Link} from 'react-scroll'
import img1 from "../images/nav-removebg-preview.png";

const Footer = () => {
  return (
    <footer style={{marginTop:'30px'}}>
      <div className="footer-row">
        <div className="footer-col">
          <img src={img1} className="footer-logo" alt="Logo" />
          <h4 className="footer-h4">Art Vision</h4>
        </div>
        <div className="footer-col">
          <h3>Menu</h3>
          <Link to="home" className="footer-p">Home</Link>
          <Link to="about" className="footer-p">About</Link>
          <Link to="topartist" className="footer-p">Top Artist</Link>
          <Link to="topartwork" className="footer-p">Top Artwork</Link>
          <Link className="footer-h4s">Contact Us</Link>
        </div>
        <div className="footer-col">
          <h3>Connect With Us</h3>
          <ul className="footer-ul">
            <li>
              <div className="footer-d">
                <FaInstagramSquare className="footer-icons" />
                <div className="footer-div">Instagram</div>
              </div>
            </li>
            <li>
              <div className="footer-d">
                <FaFacebookSquare className="footer-icons" />
                <div className="footer-div">Facebook</div>
              </div>
            </li>
            <li>
              <div className="footer-d">
                <FaTwitterSquare className="footer-icons" />
                <div className="footer-div">Twitter</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Registered Office</h3>
          <p className="footer-pp">
            shree Datta prasad, 24/4, prabhat Colony, jalgaon, maharashtra,
          </p>
          <p style={{ textTransform: "capitalize", fontSize: "large" }}>
            pin: 425001
          </p>
          <p className="footer-ps">Mobile No: +91 8888813277, +91 7620979777</p>
          <p className="footer-sp">Email Id: contact@technoweit.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
