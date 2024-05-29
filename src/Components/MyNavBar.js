import React, { useState } from "react";
import { Container, Modal, Nav, Navbar } from "react-bootstrap";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import "../CSS/MyNavBar.css";

import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { CgProfile, CgShoppingCart } from "react-icons/cg";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaArtstation } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";

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
  // useEffect(() => {
  //   console.log("user", UserData.data.User_Type);
  // });

  const { UserData } = useSelector((state) => state.user);
  const { CartItems } = useSelector((state) => state.cart);
  const navigator = useNavigate();

  return (
    <div>
      <Navbar
        className="nav-bar"
        expand="lg"
        style={{
          backgroundColor: scrollChangeColor ? "#B8BEDD" : "",
        }}
      >
        <Container className="nav-container">
          <Navbar.Brand className="nav-brand">
            <FaArtstation className="artstation" />
            <div className="nav-div">Art Visions</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="nav-link" to="home">
                  <IoHome className="nav-icon" />
                  <div className="div-links">Home</div>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="about">
                  <FcAbout className="nav-icon" />
                  <div className="div-links">About</div>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="topartist">
                  <GrArticle className="nav-icon" />
                  <div className="div-links">Top Artist</div>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="topartwork">
                  <BsPersonWorkspace className="nav-icon" />
                  <div className="div-links">Top ArtWork</div>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <RouteLink className="nav-link" to="/cart">
                  <CgShoppingCart className="nav-icon" />
                  <div className="div-linkss">Cart</div>
                  <span className="nav-noOfCart"> {CartItems.length}</span>
                </RouteLink>
              </Nav.Link>
            </Nav>

            <Nav className="ms-auto">
              <Nav.Link>
                <RouteLink className="nav-link" to="/login">
                  <BiLogIn className="nav-icon" />
                  <div className="div-links">Login</div>
                </RouteLink>
              </Nav.Link>
              <Nav.Link>
                <div className="nav-link">
                  <CgProfile
                    className="nav-icon"
                    onClick={() => {
                      if (UserData.data.User_Type == "Customer") {
                        navigator("/customersprofile");
                      } else {
                        navigator("/artworks");
                      }
                    }}
                  />
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default ArtistNavBar;
