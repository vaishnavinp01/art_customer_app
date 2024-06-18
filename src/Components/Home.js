import React from "react";
import "../CSS/Home.css";
import img1 from "../images/art.jpg";
// import img2 from "../images/painting/download2.jpeg";
// import img3 from "../images/painting/download3.jpeg";

const Home = () => {
  return (
    <div className="home-hero">
      
        <div className="home-container">
          <div className="home-content">
            <div className="home-info">
              <ul className="home-ul">
                <li className="home-painting">
                  <h4>painting</h4>
                  <p className="home-p">
                    expression of ideas and emotions, with the creation of
                    certain aesthetic qualities  
                  </p>
                </li>
                <li className="home-skehing">
                  <h4>skehing</h4>
                  <p className="home-p">
                    A sketch is a quick and rough drawing that provides a
                    summary or broad 
                  </p>
                </li>
                <li className="home-manga">
                  <h4>manga</h4>
                  <p className="home-p">
                    Manga are comics or graphic novels originating from Japan.
                    Most manga conform to a style developed in Japan
                  </p>
                </li>
                <li className="home-clay">
                  <h4>clay</h4>
                  <p className="home-p">
                    Clay is a soft, loose, earthy material containing particles
                    with a grain size of less than 4 micrometres
                  </p>
                </li>
                <li className="home-line_art">
                  <h4>line art</h4>
                  <p className="home-p">
                    Line art emphasizes form and drawings, of several constant
                    widths , or of varying 
                  </p>
                </li>
              </ul>
            </div>
            <div className="home-img">
              <img className="home-image" src={img1} />
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Home;
