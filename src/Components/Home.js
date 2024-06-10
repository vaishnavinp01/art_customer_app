import React from "react";
import "../CSS/Home.css";
import img1 from "../images/painting/download1.jpeg";
import img2 from "../images/painting/download2.jpeg";
import img3 from "../images/painting/download3.jpeg";

const Home = () => {
  return (
    <div>
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
        {/* Home */}
      </h4>
      <div class="carousel-wrapper">
        <span id="target-item-1"></span>
        <span id="target-item-2"></span>
        <span id="target-item-3"></span>
        <div class="carousel-item item-1">
          <h2>Item 1</h2>
          <p>Content goes here.</p>
          <a class="arrow arrow-prev" href="#target-item-3"></a>
          <a class="arrow arrow-next" href="#target-item-2"></a>
        </div>
        <div class="carousel-item item-2 light">
          <h2>Item 2</h2>
          <p>Content goes here.</p>
          <a class="arrow arrow-prev" href="#target-item-1"></a>
          <a class="arrow arrow-next" href="#target-item-3"></a>
        </div>
        <div class="carousel-item item-3">
          <h2>Item 3</h2>
          <p>Content goes here.</p>
          <a class="arrow arrow-prev" href="#target-item-2"></a>
          <a class="arrow arrow-next" href="#target-item-1"></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
