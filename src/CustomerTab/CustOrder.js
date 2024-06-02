import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../reduxwork/UserSlice";

const CustOrder = () => {
  const dispatcher = useDispatch();
  const { UserData } = useSelector((state) => state.user);
  const [CustOrders, setCustOrders] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    const custOrderId = { CustId: UserData._id };
    // console.log(UserData._id);
    try {
      const result = axios.post(
        "http://localhost:5000/artapi/ordersbycustid",
        custOrderId
      );
      console.log("order", result.data);
      setCustOrders(result.data);
      dispatcher(register(result.data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return <div>
    <h4>CustOrderTab</h4>
      <h5> ID: {UserData._id}</h5>
  </div>;
};

export default CustOrder;
