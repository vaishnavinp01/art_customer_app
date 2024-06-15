import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
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
      ArtistId: UserData?.data?._id,
    };
    axios
      .post("http://localhost:5000/artapi/addartwork", addData)
      .then((result) => {
        navigator("/artistprofile");
        console.log(result.data);
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
    <div className="addartwork-main">
      <div className="addartwork-container">
        <h4 style={{ textAlign: "center" }}>AddArtWork</h4>
        <Container>
          <Form className="addartwork-form">
            <Row>
              <Col>
                <label className="addartwork-label">Name</label>
                <input
                  className="addartwork-input"
                  type="text"
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col>
                <lable className="addartwork-label">Price</lable>
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
                  className="addartwork-input"
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
                  className="addartwork-input"
                  onChange={(e) => setFrameSize(e.target.value)}
                >
                  <option>5"x7"</option>
                  <option>8"x10"</option>
                  <option>11"x14"</option>
                </select>
              </Col>
            </Row>
            <div className="addartwork-div">
              <label className="addartwork-label">Type</label>
              {/* <div> */}
              <input
                type="radio"
                value="Painting"
                name="status, color"
                className="addartwork-check"
                inline
                onChange={(e) => setType(e.target.value)}
              />
              <label style={{ marginLeft: "5px" }} className="addartwork-label">
                Painting
              </label>
              {/* </div> */}
              {/* <div> */}
              <input
                type="radio"
                value="Drawing"
                name="status, color"
                className="addartwork-check"
                inline
                onChange={(e) => setType(e.target.value)}
              />
              <label style={{ marginLeft: "5px" }} className="addartwork-label">
                Drawing
              </label>
              {/* </div> */}
            </div>
            <Col>
              <label className="addartwork-label">Image</label>
              <input
                className="addartwork-input"
                type="file"
                onChange={uploadArtWork}
              />
            </Col>
          </Form>
          <button className="addartwork-button" onClick={() => doArtWork()}>
            Submit
          </button>
        </Container>
      </div>
    </div>
  );
};

export default AddArtWork;
