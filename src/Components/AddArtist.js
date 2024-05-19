import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../CSS/AddArtist.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../reduxwork/UserSlice";
import { useNavigate } from "react-router-dom";

const AddArtist = () => {
  const navigator = useNavigate();
  const dispatcher = useDispatch("");

  const { UserData } = useSelector((state) => state.user);
  // AddArtist
  const [FullName, setFullName] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [MobileNo, setMobileNo] = useState(0);
  const [Email, setEmail] = useState("");
  const [State, setState] = useState("");
  const [PinCode, setPinCode] = useState(0);
  const [AdharCardNo, setAdharCardNo] = useState(0);
  const [AdharCardImage, setAdharCardImage] = useState("");
  const [HandicapCertificateImage, setHandicapCertificateImage] = useState("");
  const [Profile, setProfile] = useState("");

  const doArtist = () => {
    const addData = {
      ArtistFullName: FullName,
      ArtistAddress: Address,
      ArtistCity: City,
      ArtistMobileNo: Number(MobileNo),
      ArtistEmail: Email,
      ArtistState: State,
      ArtistPincode: Number(PinCode),
      ArtistAdharCardNo: Number(AdharCardNo),
      ArtistAdharCardImage: AdharCardImage,
      ArtistHandicapCertificateImage: HandicapCertificateImage,
      ArtistProfile: Profile,
      UserId: UserData._id,
    };
    // console.log(addData)
    axios
      .post("http://localhost:5000/artapi/addartist", addData)
      .then((result) => {
        console.log("DATA", result.data);
        dispatcher(register(result.data));
        alert("Register Successfully");
        navigator("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Upload Image
  async function uploadAdhar(e) {
    const imgData = new FormData();
    imgData.append("image", e.target.files[0]);
    axios
      .post("http://localhost:5000/uploadfiles", imgData)
      .then((res) => {
        console.log("Response:", res.data);
        setAdharCardImage(res.data.filepath);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }

  // Upload Image
  async function uploadCertificate(e) {
    const imgData1 = new FormData();
    imgData1.append("image", e.target.files[0]);
    axios
      .post("http://localhost:5000/uploadfiles", imgData1)
      .then((res) => {
        console.log("Response:", res.data);
        setHandicapCertificateImage(res.data.filepath);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }

  // Upload Image
  async function uploadProfile(e) {
    const imgData2 = new FormData();
    imgData2.append("image", e.target.files[0]);
    axios
      .post("http://localhost:5000/uploadfiles", imgData2)
      .then((res) => {
        console.log("Response:", res.data);
        setProfile(res.data.filepath);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }

  return (
    <div>
      <h4 className="addartist-h4">AddArtist</h4>
      <Container className="addartist-container">
        <form className="addartist-form">
          <Row>
            <Col>
              <label className="addartist-label">Full Name</label>
              <input
                className="addartist-input"
                type="text"
                placeholder="Name"
                onChange={(e) => setFullName(e.target.value)}
              />
            </Col>
            <Col>
              <label className="addartist-label">Address</label>
              <input
                className="addartist-input"
                type="text"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <label className="addartist-label">City</label>
              <select
                className="addartist-input"
                type="text"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
              >
                <option className="addartist-option">Yawal</option>
                <option className="addartist-option">Jalgaon</option>
                <option className="addartist-option">Mahasamund</option>
                <option className="addartist-option">Aurangabad</option>
                <option className="addartist-option">Jaipur</option>
              </select>
            </Col>
            <Col>
              <label className="addartist-label">Mobile No</label>
              <input
                className="addartist-input"
                type="number"
                placeholder="Mobile No"
                onChange={(e) => setMobileNo(e.target.value)}
              />
            </Col>
          </Row>
          <label className="addartist-label">Email</label>
          <input
            className="addartist-input"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="addartist-label">State</label>
          <select
            className="addartist-input"
            type="state"
            placeholder="State"
            onChange={(e) => setState(e.target.value)}
          >
            <option className="addartist-option">Maharashtra</option>
            <option className="addartist-option">Chhattisgarh</option>
            <option className="addartist-option">Gujarat</option>
            <option className="addartist-option">Rajasthan</option>
          </select>
          <label className="addartist-label">Pin Code</label>
          <input
            className="addartist-input"
            type="number"
            placeholder="Pin Code"
            onChange={(e) => setPinCode(e.target.value)}
          />
          <label className="addartist-label">Adhar Card No</label>
          <input
            className="addartist-input"
            type="number"
            placeholder="Adhar Card No"
            onChange={(e) => setAdharCardNo(e.target.value)}
          />
          <label className="addartist-label">Adhar Card Image</label>
          <input
            className="addartist-file"
            type="file"
            onChange={uploadAdhar}
          />
          <label className="addartist-label">Handicap Certificate Image</label>
          <input
            className="addartist-file"
            type="file"
            onChange={uploadCertificate}
          />
          <label className="addartist-label">Profile</label>
          <input
            className="addartist-file"
            type="file"
            onChange={uploadProfile}
          />
        </form>
        <button className="addartist-button" onClick={() => doArtist()}>
          Submit
        </button>
      </Container>
    </div>
  );
};

export default AddArtist;
