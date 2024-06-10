import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../ArtWorkCSS/AddArtWork.css";
import { useNavigate } from "react-router-dom";

const AddArtWork = () => {
  const { UserData } = useSelector((state) => state.user);
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
      ArtistId: UserData?.ArtistProfile?._id,
    };
    axios
      .post("http://localhost:5000/artapi/addartwork", addData)
      .then((result) => {
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
          <form>
            <h3 style={{ textAlign: "center" }}>AddArtWork</h3>

            <Row className="FormCol">
              <Col>
                <label className="addartwork-label">Name</label>
              </Col>
              <Col>
                <input
                  className="addartwork-input"
                  type="text"
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="FormCol">
              <Col>
                <lable className="addartwork-label">Price</lable>
              </Col>
              <Col>
                <input
                  className="addartwork-input"
                  type="number"
                  placeholder="Enter Price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="FormCol">
              <Col>
                <lable className="addartwork-label">Canvas Type</lable>
                <select
                  className="addartwork-select"
                  onChange={(e) => setCanvasType(e.target.value)}
                >
                  <option>Canvas Paper</option>
                  <option>Polyster Canvas</option>
                  <option>Synthetic Canvas</option>
                </select>
              </Col>
              <Col>
                <label className="addartwork-label">Frame Size</label>
                <select
                  className="addartwork-select"
                  onChange={(e) => setFrameSize(e.target.value)}
                >
                  <option>5"x7"</option>
                  <option>8"x10"</option>
                  <option>11"x14"</option>
                </select>
              </Col>
            </Row>
            <Row className="FormCol">
              <Col>
                <label className="addartwork-label">Type</label>
                <input
                  type="radio"
                  value="Painting"
                  name="status, color"
                  className="addartwork-check"
                  inline
                  onChange={(e) => setType(e.target.value)}
                />
                <label className="addartwork-label">Painting</label>
                <input
                  type="radio"
                  value="Drawing"
                  name="status, color"
                  className="addartwork-check"
                  inline
                  onChange={(e) => setType(e.target.value)}
                />
                <label className="addartwork-label">Drawing</label>
              </Col>
              <Col style={{display:"block"}}>
                <label className="addartwork-label">Image</label>
                <input
                  className="addartwork-file"
                  type="file"
                  onChange={uploadArtWork}
                />
              </Col>
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
