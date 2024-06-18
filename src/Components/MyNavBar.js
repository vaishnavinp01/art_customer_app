
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import "../CSS/MyNavBar.css";
import img1 from "../images/nav-removebg-preview.png";
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { CgProfile, CgShoppingCart } from "react-icons/cg";
import { BsPersonWorkspace } from "react-icons/bs";
import { GrArticle } from "react-icons/gr";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reduxwork/UserSlice";
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
  const navigator = useNavigate();
  const dispatcher = useDispatch();

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
                  {/* <div className="div-links"> */}
                  Home
                  {/* </div> */}
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <Link className="nav-links" to="about">
                  <FcAbout className="nav-icon" />
                  {/* <div className="div-links"> */}
                  About
                  {/* </div> */}
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <Link className="nav-links" to="topartist">
                  <GrArticle className="nav-icon" />
                  {/* <div className="div-links"> */}
                  Top Artist
                  {/* </div> */}
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <Link className="nav-links" to="topartwork">
                  <BsPersonWorkspace className="nav-icon" />
                  {/* <div className="div-links"> */}
                  Top ArtWork
                  {/* </div> */}
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link">
                <RouteLink className="nav-links" to="/cart">
                  <CgShoppingCart className="nav-icon" />
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

              <div className="nav-div">
                <div className="dropdown">
                  <button className="nav-button">
                    {UserData?.data?.UserName.slice(0, 1)}
                  </button>
                  <div className="dropdown-options">
                    <button className="nav-buttons">
                      <BiLogOut
                        style={{ marginBottom: "25px" }}
                        onClick={() => dispatcher(logout())}
                      />
                      <span style={{ marginLeft: "4px" }}>Logout</span>
                    </button>
                  </div>
                </div> 
              </div>

              <Nav.Link className="nav-link">
                <CgProfile
                  className="nav-icon nav-links"
                  onClick={() => {
                    if (UserData.User_Type === "Customer") {
                      navigator("/customers");
                    } else {
                      navigator("/artworks");
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
