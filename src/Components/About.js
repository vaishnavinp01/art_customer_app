import React from "react";
import "../CSS/About.css";

const About = () => {
  return (
    <div className="about-div">
      <h4
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   height: "100vh",
        //   width: "80vw",
        //   marginTop: "100px",
        // }}
      >
        About
      </h4>

      <div className="about-wrapper">
        <div className="about-container">
          <input className="about-input" type="radio" name="slide" id="c1" checked />
          <label for="c1" className="about-card">
            <div className="about-row">
              <div className="about-icon">1</div>
              <div className="about-description">
                <h4 className="about-h4">Winter</h4>
                <p className="about-p">Winter has so much to offer - creative activities</p>
              </div>
            </div>
          </label>
          <input className="about-input" type="radio" name="slide" id="c2" />
          <label for="c2" className="about-card">
            <div className="about-row">
              <div className="about-icon">2</div>
              <div className="about-description">
                <h4 className="about-h4">Digital Technology</h4>
                <p className="about-p">Gets better every day - stay tuned</p>
              </div>
            </div>
          </label>
          <input className="about-input" type="radio" name="slide" id="c3" />
          <label for="c3" className="about-card">
            <div className="about-row">
              <div className="about-icon">3</div>
              <div className="about-description">
                <h4 className="about-h4">Globalization</h4>
                <p className="about-p">Help people all over the world</p>
              </div>
            </div>
          </label>
          <input className="about-input" type="radio" name="slide" id="c4" />
          <label for="c4" className="about-card">
            <div className="about-row">
              <div className="about-icon">4</div>
              <div className="about-description">
                <h4 className="about-h4">New technologies</h4>
                <p className="about-p">Space engineering becomes more and more advanced</p>
              </div>
            </div>
          </label>
          <input className="about-input" type="radio" name="slide" id="c5" />
          <label for="c5" className="about-card">
            <div className="about-row">
              <div className="about-icon">5</div>
              <div className="about-description">
                <h4 className="about-h4">New technologies</h4>
                <p className="about-p">Space engineering becomes more and more advanced</p>
              </div>
            </div>
          </label>
          <input className="about-input" type="radio" name="slide" id="c6" />
          <label for="c6" className="about-card">
            <div className="about-row">
              <div className="about-icon">6</div>
              <div className="about-description">
                <h4 className="about-h4">New technologies</h4>
                <p className="about-p">Space engineering becomes more and more advanced</p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default About;
