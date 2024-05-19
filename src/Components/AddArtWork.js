import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../reduxwork/UserSlice";
import "../CSS/AddArtWork.css";

const AddArtWork = () => {
  const { UserData } = useSelector((state) => state.user);

  const dispatcher = useDispatch([]);

  const [Name, setName] = useState("");
  const [Type, setType] = useState("");
  const [Image, setImage] = useState("");
  const [Price, setPrice] = useState(0);
  const [FrameSize, setFrameSize] = useState(0);
  const [CanvasType, setCanvasType] = useState("");

  const doArtWork = () => {
    
    const addData = {
      ArtWorkName: Name,
      ArtWorkType: Type,
      ArtWorkImage: Image,
      ArtWorkPrice: Number(Price),
      ArtWorkFrameSize: FrameSize,
      ArtWorkCanvasType: CanvasType,
      ArtistId: UserData.data._id,
    };
    axios
      .post("http://localhost:5000/artapi/addartwork", addData)
      .then((result) => {
        // console.log("DATA", result.data);
        dispatcher(register(result.data));
        alert("Register Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Upload Image
  async function uploadArtWork(e) {
    const imgData = new FormData();
    imgData.append("image", e.target.files[0]);
    axios
      .post("http://localhost:5000/uploadfiles", imgData)
      .then((res) => {
        console.log("Response:", res.data);
        setImage(res.data.filepath);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }

  return (
    <div>
      <Container className="artwork-container">
        <form className="artwork-form">
          <h4 className="addartist-h4">AddArtWork</h4>
          <label className="artwork-label">Name</label>
          <input
            className="artwork-input"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="artwork-label">Type</label>
          <div>
            <input
              type="radio"
              value="Painting"
              name="status, color"
              className="artwork-check"
              inline
              onChange={(e) => setType(e.target.value)}
            />

            <label className="artwork-labels" style={{ marginLeft: "5px" }}>
              Painting
            </label>

            <input
              type="radio"
              value="Drawing"
              name="status, color"
              className="artwork-check"
              inline
              onChange={(e) => setType(e.target.value)}
            />
            <label className="artwork-labels" style={{ marginLeft: "5px" }}>
              Drawing
            </label>
          </div>
          <label className="artwork-label">Image</label>
          <input
            className="artwork-file"
            type="file"
            onChange={uploadArtWork}
          />
          <label>Price</label>
          <input
            className="artwork-input"
            type="number"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <label className="artwork-label">Frame Size</label>
          <select
            className="artwork-select"
            onChange={(e) => setFrameSize(e.target.value)}
          >
            <option className="artwork-option">5"x7"</option>
            <option className="artwork-option">8"x10"</option>
            <option className="artwork-option">11"x14"</option>
          </select>
          <label className="artwork-label">Canvas Type</label>
          <select
            className="artwork-select"
            onChange={(e) => setCanvasType(e.target.value)}
          >
            <option className="artwork-option">Canvas Paper</option>
            <option className="artwork-option">Polyster Canvas</option>
            <option className="artwork-option">Syntheric Canvas</option>
          </select>
        </form>
        <div className="artwork-btn-div">
          <button className="artwork-button" onClick={() => doArtWork()}>
            Submit
          </button>
        </div>
      </Container>
    </div>
  );
};

export default AddArtWork;
