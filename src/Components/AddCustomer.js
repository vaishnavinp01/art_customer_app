import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../reduxwork/UserSlice";
import "../CSS/AddCustomer.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
  const navigator = useNavigate();
  const dispatcher = useDispatch([]);
  const { UserData } = useSelector((state) => state.user);

  const [Name, setName] = useState("");
  const [MobileNo, setMobileNo] = useState(0);
  const [Address, setAddress] = useState("");
  const [DOB, setDOB] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [PinCode, setPinCode] = useState(0);
  const [Email, setEmail] = useState("");
  const [Profile, setProfile] = useState("");

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
      UserId: UserData._id,
    };
    axios
      .post("http://localhost:5000/artapi/addcustomer", addData)
      .then((result) => {
        console.log("DATA", result.data);
        dispatcher(register(result.data));
        // alert("Register Successfully");
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
    <div>
      <h4 className="addcustomer-h4">AddCustomer</h4>
      <Container className="addcustomer-container">
        <form className="addcustomer-form">
          <label className="addcustomer-label">Name</label>
          <input
            className="addcustomer-input"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="addcustomer-label">Mobile No</label>
          <input
            className="addcustomer-input"
            type="number"
            placeholder="MobileNo"
            onChange={(e) => setMobileNo(e.target.value)}
          />
          <label className="addcustomer-label">Address</label>
          <input
            className="addcustomer-input"
            type="text"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <label className="addcustomer-label">DOB</label>
          <input
            className="addcustomer-input"
            type="date"
            placeholder="DOB"
            onChange={(e) => setDOB(e.target.value)}
          />
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
          <label className="addcustomer-label">Pin Code</label>
          <input
            className="addcustomer-input"
            type="number"
            placeholder="Pin Code"
            onChange={(e) => setPinCode(e.target.value)}
          />
          <label className="addcustomer-label">Email</label>
          <input
            className="addcustomer-input"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="addcustomer-label">Profile</label>
          <input
            className="addcustomer-file"
            type="file"
            onChange={uploadProfile}
          />
        </form>
        <button className="addcustomer-button" onClick={() => doCustomer()}>
          Submit
        </button>
      </Container>
    </div>
  );
};

export default AddCustomer;
