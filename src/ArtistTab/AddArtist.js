import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "../ArtistCSS/AddArtist.css";
import { useDispatch, useSelector } from "react-redux";
import { addArtistProfile } from "../reduxwork/UserSlice";
import { useNavigate } from "react-router-dom";

const AddArtist = () => {
  const navigator = useNavigate();
  const dispatcher = useDispatch();
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
      ArtistPinCode: Number(PinCode),
      ArtistAdharCardNo: Number(AdharCardNo),
      ArtistAdharCardImage: AdharCardImage,
      ArtistHandicapCertificateImage: HandicapCertificateImage,
      ArtistProfile: Profile,
      UserId: UserData?._id,
    };
    axios
      .post("http://localhost:5000/artapi/addartist", addData)
      .then((result) => {
        dispatcher(addArtistProfile(result.data));
        console.log(result.data)
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
    <div className="addartist-main">
      <div className="addartist-container">
        <h4 className="addartist">AddArtist</h4>
        <Container>
          <Form className="addartist-form">
            <Row>
              <Col>
                <label className="addartist-label">Full Name</label>
                <input
                  className="addartist-input"
                  type="text"
                  placeholder="Enter Name"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Col>
              <Col>
                <label className="addartist-label">Address</label>
                <input
                  className="addartist-input"
                  type="text"
                  placeholder="Enter Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Col>
              <Col>
                <label className="addartist-label">Mobile No</label>
                <input
                  className="addartist-input"
                  type="number"
                  placeholder="Enter Mobile No"
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </Col>
              <Col>
                <label className="addartist-label">Email</label>
                <input
                  className="addartist-input"
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
              <Col>
                <label className="addartist-label">Adhar Card No</label>
                <input
                  className="addartist-input"
                  type="number"
                  placeholder="Enter Adhar Card No"
                  onChange={(e) => setAdharCardNo(e.target.value)}
                />
              </Col>
              <Col>
                <label className="addartist-label">Pin Code</label>
                <input
                  className="addartist-input"
                  type="number"
                  placeholder="Enter Pin Code"
                  onChange={(e) => setPinCode(e.target.value)}
                />
              </Col>
              <Col>
                <label className="addartist-label">City</label>
                <select
                  className="addartist-input"
                  type="text"
                  placeholder="Enter City"
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option>Yawal</option>
                  <option>Bhusawal</option>
                  <option>Jalgaon</option>
                  <option>Mahasamund</option>
                  <option>Aurangabad</option>
                  <option>Jaipur</option>
                </select>
              </Col>
              <Col>
                <label className="addartist-label">State</label>
                <select
                  className="addartist-input"
                  type="state"
                  placeholder="Enter State"
                  onChange={(e) => setState(e.target.value)}
                >
                  <option>Maharashtra</option>
                  <option>Chhattisgarh</option>
                  <option>Gujarat</option>
                  <option>Rajasthan</option>
                </select>
              </Col>
              <Col>
                <label className="addartist-label">Adhar Card Image</label>
                <input
                  className="addartist-file"
                  type="file"
                  onChange={uploadAdhar}
                />
              </Col>
              <div style={{display:'flex',flexDirection:'row'}}>
                <Col>
                  <label className="addartist-label">
                    Handicap Certificate Image
                  </label>
                  <input
                    className="addartist-file"
                    type="file"
                    onChange={uploadCertificate}
                  />
                </Col>
                <Col>
                  <label className="addartist-label">Profile</label>
                  <input
                    className="addartist-file"
                    type="file"
                    onChange={uploadProfile}
                  />
                </Col>
              </div>
            </Row>
          </Form>
          <button
            className="addartist-button"
            onClick={() => {
              doArtist();
            }}
          >
            Submit
          </button>
        </Container>
      </div>
    </div>
  );
};

export default AddArtist;
