import React, { useState } from "react";
import "../CSS/Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  register,
  login,
  addCustomerProfile,
  addArtistProfile,
} from "../reduxwork/UserSlice";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiFillLinkedin } from "react-icons/ai";

const Login = () => {
  const navigator = useNavigate();
  const dispatcher = useDispatch([]);
  // Register
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [MobileNo, setMobileNo] = useState(0);
  const [Type, setType] = useState("");

  const doRegister = () => {
    const addData = {
      UserName: Name,
      UserEmail: Email,
      UserPassword: Password,
      UserMobileNo: Number(MobileNo),
      User_Type: Type,
    };
    axios
      .post("http://localhost:5000/artapi/adduser", addData)
      .then((result) => {
        console.log("DATA", result.data);
        dispatcher(register(result.data));
        // alert("Registered Successfully");
        if (Type === "Artist") {
          navigator("/addartist");
        } else {
          navigator("/addcustomer");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegisterClick = () => {
    const container = document.getElementById("logcontainer");
    container.classList.add("right-panel-active");
  };

  // Login
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");

  const doLogin = () => {
    const addDatas = {
      UserEmail: LoginEmail,
      UserPassword: LoginPassword,
    };
    axios
      .post("http://localhost:5000/artapi/dologin", addDatas)
      .then((result) => {
        console.log("DATA", result.data);
        dispatcher(login(result.data));
        alert("Logined Successfully");
        // navigator('/')

        const idData = { UserId: result?.data?._id };
        console.log("IDDATA", idData);
        if (result.data?.User_Type === "Customer") {
          axios
            .post("http://localhost:5000/artapi/getcustomerprofile", idData)
            .then((result) => {
              dispatcher(addCustomerProfile(result.data));
              navigator("/");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          axios
            .post("http://localhost:5000/artapi/getartistprofile", idData)
            .then((result) => {
              dispatcher(addArtistProfile(result.data));
              navigator("/");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLoginClick = () => {
    const container = document.getElementById("logcontainer");
    container.classList.remove("right-panel-active");
  };

  return (
    <div className="my-divs">
      <div className="Main_Container">
        <div className="logcontainer" id="logcontainer">
          <div className="form-container register-container">
            <div className="reg-div">
              <form action="#" className="Login_Form">
                <h1 className="reg-h1">Register</h1>
                <div className="social-container">
                  <a href="https://www.facebook.com/" className="social">
                    <FaFacebook fontSize="25px" />
                  </a>
                  <a href="https://www.google.com/" className="social">
                    <FcGoogle fontSize="25px" />
                  </a>
                  <a href="https://www.linkedin.com/" className="social">
                    <AiFillLinkedin fontSize="25px" />
                  </a>
                </div>

                <span className="reg-span">
                  or use your email for registration
                </span>
                <input
                  className="reg-input"
                  type="text"
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="reg-input"
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="reg-input"
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  className="reg-input"
                  type="Number"
                  placeholder="Enter Mobile No"
                  onChange={(e) => setMobileNo(e.target.value)}
                />
                <div className="login-div">
                  <input
                    type="radio"
                    value="Customer"
                    name="status, color"
                    className="reg-check"
                    inline
                    onChange={(e) => setType(e.target.value)}
                  />
                  <label className="reg-label" style={{ marginLeft: "5px" }}>
                    Customer
                  </label>
                  <input
                    type="radio"
                    value="Artist"
                    name="status, color"
                    className="reg-check"
                    inline
                    onChange={(e) => setType(e.target.value)}
                  />
                  <label className="reg-label" style={{ marginLeft: "5px" }}>
                    Artist
                  </label>
                </div>
              </form>
              <button className="reg-button" onClick={doRegister}>
                Register
              </button>
            </div>
          </div>

          <div className="form-container login-container">
            <div className="log-div">
              <form className="Login_Form" onSubmit={(e) => e.preventDefault()}>
                <h1 className="reg-h1">Login</h1>
                <div className="social-container">
                  <a href="https://www.facebook.com/" className="social">
                    <FaFacebook fontSize="25px" />
                  </a>
                  <a href="https://www.google.com/" className="social">
                    <FcGoogle fontSize="25px" />
                  </a>
                  <a href="https://www.linkedin.com/" className="social">
                    <AiFillLinkedin fontSize="25px" />
                  </a>
                </div>

                <span className="reg-span">or use your account</span>
                <input
                  className="reg-input"
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
                <input
                  className="reg-input"
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <a className="reg-a" href="#">
                  Forgot your password?
                </a>
              </form>
              <button className="reg-button" onClick={doLogin}>
                Login
              </button>
            </div>
          </div>

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="reg-h1">Welcome Back!</h1>
                <p className="reg-p">
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost" id="login" onClick={handleLoginClick}>
                  Login
                </button>
              </div>

              <div className="overlay-panel overlay-right">
                <h1 className="reg-h1">Hello, Friend!</h1>
                <p className="reg-p">
                  Enter your personal details and start journey with us
                </p>
                <button
                  className="ghost"
                  id="register"
                  onClick={handleRegisterClick}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
