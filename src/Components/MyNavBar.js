
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import "../CSS/MyNavBar.css";
import img1 from "../images/nav-removebg-preview.png";
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { BsPersonWorkspace } from "react-icons/bs";
import { GrArticle } from "react-icons/gr";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const ArtistNavBar = () => {
  // Scrolling Navbar
  const [scrollChangeColor, setscrollChangeColor] = useState(false);
  const ChangeBackground = () => {
    if (window.scrollY >= 250) {
      setscrollChangeColor(true);
    } else {
      setscrollChangeColor(false);
    }
  };
  window.addEventListener("scroll", ChangeBackground);

  const { UserData } = useSelector((state) => state.user);
  const { CartItems } = useSelector((state) => state.cart);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const navigator = useNavigate();

  return (
    <div>
      <Navbar
        className="nav-bar"
        expand="lg"
        style={{
          backgroundColor: scrollChangeColor ? "#BB8FCE" : "",
        }}
      >
        <Container fluid className="nav-container">
          <Navbar.Brand className="nav-brand">
            <img className="nav-logo" src={img1} />
            Art Vision
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-menu">
              <Nav.Link className="nav-link">
                <Link className="nav-links" to="home">
                  <IoHome className="nav-icon" />
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <Link className="nav-links" to="about">
                  <FcAbout className="nav-icon" />
                  About
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <Link className="nav-links" to="topartist">
                  <GrArticle className="nav-icon" />
                  Top Artist
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <Link className="nav-links" to="topartwork">
                  <BsPersonWorkspace className="nav-icon" />
                  Top ArtWork
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <RouteLink className="nav-links" to="/cart">
                  <FaShoppingCart
                    className="nav-icon"
                    style={{ fontSize: "20px" }}
                  />
                  <span className="nav-noOfCart"> {CartItems.length}</span>
                </RouteLink>
              </Nav.Link>
            </Nav>

            <Nav className="ms-auto right-menu">
              <Nav.Link className="nav-link">
                <RouteLink className="nav-links" to="/login">
                  <BiLogIn className="nav-icon" />
                  Login
                </RouteLink>
              </Nav.Link>
              <div className="nav-dropdown">
                <button className="nav-dropbtn" onClick={handleDropdownToggle}>
                  {UserData?.data?.UserName.slice(0, 1)}
                </button>
              </div>
              {dropdownOpen && (
                <div className="nav-dropdown-content">
                  <a href="#" className="nav-a">
                    <BiLogOut />
                    Logout
                  </a>
                </div> 
              )}

              <Nav.Link className="nav-link">
                <CgProfile
                  className="nav-icon nav-links"
                  onClick={() => {
                    if (UserData?.data.User_Type === "Customer") {
                      navigator("/customerprofile");
                    } else {
                      navigator("/artistprofile");
                    }
                  }}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default ArtistNavBar;
