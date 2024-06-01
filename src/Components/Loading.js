import React from "react";
import { ClipLoader } from "react-spinners";
import "../CSS/Loading.css";

const Loading = () => {
  return (
    <div className="main-div">
      <ClipLoader style={{ color: "#000", size: "26" }} />
      {/* <h5>Loading...</h5> */}
      {/* <h2>How To Create A Loader</h2> */}
      {/* <div class="loader"></div> */}
      {/* <div class="loader" style={{ color: "green;" }}></div> */}
      {/* <div class="loader" style={{ color: "red", width: "120px" }}></div> */}
      {/* <div class="loader" style={{ color: "purple" }} /> */}
      <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
