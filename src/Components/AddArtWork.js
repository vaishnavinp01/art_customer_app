import axios from "axios";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../reduxwork/UserSlice";
import "../CSS/AddArtWork.css";
import { useNavigate } from "react-router-dom";

const AddArtWork = () => {
  const { UserData } = useSelector((state) => state.user);
  const dispatcher = useDispatch([]);
  const navigator = useNavigate();

  const [Name, setName] = useState("");
  const [Type, setType] = useState("");
  const [Image, setImage] = useState("");
  const [Price, setPrice] = useState(0);
  const [FrameSize, setFrameSize] = useState("");
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
        navigator("/artworks");
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
      <Container className="addartwork-container">
        <div className="addartwork-div">
          <form className="addartwork-form">
            <Row>
              <h4 className="addartwork-h4">AddArtWork</h4>
              <label className="addartwork-label">Name</label>
              <input
                className="addartwork-input"
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
              <label className="addartwork-label">Type</label>
              <div>
                <input
                  type="radio"
                  value="Painting"
                  name="status, color"
                  className="addartwork-check"
                  inline
                  onChange={(e) => setType(e.target.value)}
                />
                <label
                  className="addartwork-label"
                  style={{ marginLeft: "5px" }}
                >
                  Painting
                </label>
                <input
                  type="radio"
                  value="Drawing"
                  name="status, color"
                  className="addartwork-check"
                  inline
                  onChange={(e) => setType(e.target.value)}
                />
                <label
                  className="addartwork-label"
                  style={{ marginLeft: "5px" }}
                >
                  Drawing
                </label>
              </div>
              <label className="addartwork-label">Image</label>
              <input
                className="addartwork-file"
                type="file"
                onChange={uploadArtWork}
              />
              <label className="addartwork-label">Price</label>
              <input
                className="addartwork-input"
                type="number"
                placeholder="Enter Price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <label className="addartwork-label">Frame Size</label>
              <select
                className="addartwork-select"
                onChange={(e) => setFrameSize(e.target.value)}
              >
                <option>5"x7"</option>
                <option>8"x10"</option>
                <option>11"x14"</option>
              </select>
              <label className="addartwork-label">Canvas Type</label>
              <select
                className="addartwork-select"
                onChange={(e) => setCanvasType(e.target.value)}
              >
                <option>Canvas Paper</option>
                <option>Polyster Canvas</option>
                <option>Syntheric Canvas</option>
              </select>
            </Row>
          </form>
          <div className="addartwork-btn-div">
            <button className="addartwork-button" onClick={() => doArtWork()}>
              Submit
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddArtWork;
