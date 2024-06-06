import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerProfile } from "../reduxwork/UserSlice";
import "../CustomerCSS/AddCustomer.css";
import axios from "axios";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
  const navigator = useNavigate();
  const dispatcher = useDispatch();
  const { UserData } = useSelector((state) => state.user);
  // useState
  const [Name, setName] = useState("");
  const [MobileNo, setMobileNo] = useState(0);
  const [Address, setAddress] = useState("");
  const [DOB, setDOB] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [PinCode, setPinCode] = useState(0);
  const [Email, setEmail] = useState("");
  const [Profile, setProfile] = useState("");
  // doCustomer
  const doCustomer = () => {
    const addData = {
      CustomerName: Name,
      CustomerMobileNo: Number(MobileNo),
      CustomerAddress: Address,
      CustomerDOB: Date(DOB),
      CustomerCity: City,
      CustomerState: State,
      CustomerPinCode: Number(PinCode),
      CustomerEmail: Email,
      CustomerProfile: Profile,
      UserId: UserData?.CustomerProfile?._id,
    };
    axios
      .post("http://localhost:5000/artapi/addcustomer", addData)
      .then((result) => {
        dispatcher(addCustomerProfile(result.data));
        navigator("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Upload Image
  async function uploadProfile(e) {
    const imgData = new FormData();
    imgData.append("image", e.target.files[0]);
    axios
      .post("http://localhost:5000/uploadfiles", imgData)
      .then((res) => {
        console.log("Response:", res.data);
        setProfile(res.data.filepath);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }

  return (
    <div className="addcustomer-main">
      <div className="addcustomer-container">
        <h4 className="addcustomer">AddCustomer</h4>
        <Container>
          <Form>
            <Row>
              <Col>
                <label className="addcustomer-label">Name</label>
                <input
                  className="addcustomer-input"
                  type="text"
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col>
                <label className="addcustomer-label">Email</label>
                <input
                  className="addcustomer-input"
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
              <Col>
                <label className="addcustomer-label">Address</label>
                <input
                  className="addcustomer-input"
                  type="text"
                  placeholder="Enter Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Col>
              <Col>
                <label className="addcustomer-label">Mobile No</label>
                <input
                  className="addcustomer-input"
                  type="number"
                  placeholder="Enter Mobile No"
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </Col>
              <Col>
                <label className="addcustomer-label">DOB</label>
                <input
                  className="addcustomer-input"
                  type="date"
                  placeholder="Enter DOB"
                  onChange={(e) => setDOB(e.target.value)}
                />
              </Col>
              <Col>
                <label className="addcustomer-label">Pin Code</label>
                <input
                  className="addcustomer-input"
                  type="number"
                  placeholder="Enter Pin Code"
                  onChange={(e) => setPinCode(e.target.value)}
                />
              </Col>
              <Col>
                <label className="addcustomer-label">City</label>
                <select
                  className="addcustomer-input"
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option>Mahasamund</option>
                  <option>Yawal</option>
                  <option>Bhusawal</option>
                  <option>Jalgaon</option>
                  <option>Jaipur</option>
                </select>
              </Col>

              <Col>
                <label className="addcustomer-label">State</label>
                <select
                  className="addcustomer-input"
                  onChange={(e) => setState(e.target.value)}
                >
                  <option>Chhattisgarh</option>
                  <option>Maharashtra</option>
                  <option>Gujarat</option>
                  <option>Rajasthan</option>
                </select>
              </Col>
              <Col>
                <label className="addcustomer-label">Profile</label>
                <input
                  className="addcustomer-input"
                  type="file"
                  onChange={uploadProfile}
                />
              </Col>
            </Row>
          </Form>
          <button className="addcustomer-button" onClick={() => doCustomer()}>
            Submit
          </button>
        </Container>
      </div>
    </div>
  );
};

export default AddCustomer;
