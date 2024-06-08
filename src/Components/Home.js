import React from "react";
import "../CSS/Home.css";
import img1 from "../images/painting/download1.jpeg";
import img2 from "../images/painting/download2.jpeg";
import img3 from "../images/painting/download3.jpeg";

const Home = () => {
  return (
    <div>
      <h4
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "80vw",
          marginTop: "100px",
        }}
      >
        Home
      </h4>
      {/* <section aria-label="Newest Photos">
    <div className="carousel" data-carousel>
      <button className="carousel-button prev" data-carousel-button="prev">&#8656;</button>
      <button className="carousel-button next" data-carousel-button="next">&#8658;</button>
      <ul data-slides>
        <li className="slide" data-active>
          <img src={img1} alt="Nature Image #1"/>
        </li>
        <li className="slide">
          <img src={img2} alt="Nature Image #2"/>
        </li>
        <li className="slide">
          <img src={img3} alt="Nature Image #3"/>
        </li>
      </ul>
    </div>
  </section> */}
    </div>
  );
};

export default Home;
