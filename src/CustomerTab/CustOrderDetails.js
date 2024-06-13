import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../CustomerCSS/CustOrderDetails.css";
const CustOrderDetails = () => {
  // useLocation
  const orderData = useLocation().state;
  const [orderDetails, setorderDetails] = useState([]);

  // useEffect
  // useEffect(() => {
  //   axios
  //     .post("http://localhost:5000/artapi/ordersbycustid", {
  //       orderid: orderData._id,
  //     })
  //     .then((result) => {
  //       setorderDetails(result.data.data);
  //       console.log("order", result.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div>
      <h4>CustOrderDetails</h4>
      <p>
        <span
          style={{ fontWeight: "bold", fontStyle: "italic", fontSize: "20px" }}
        >
          OrderId:
        </span>
        {/* {orderData._id} */}
      </p>
      <div>
        <div>
          {/* <h6>User Name: {orderData?.CustId?.UserName}</h6>
          <h6>User Email: {orderData?.CustId?.UserEmail}</h6>
          <h6>User Mobile No: {orderData?.CustId?.UserMobileNo}</h6>
          <h6>User Type: {orderData?.CustId?.User_Type}</h6> */}
          {/* <h6>ArtWork Name:{orderData?.CustId?.CustomerName}</h6> */}
          {/* <h6>ArtWork Type:{orderData?.CustId?.CustomerEmail}</h6> */}
        </div>
        <div className="custorderdetatils-div">
          <span className="custorderdetails-span">Order</span>
          <span className="custorderdetails-span">Quantity</span>
          <span className="custorderdetails-span">Price</span>
          <span className="custorderdetails-span">OrderStatus</span>
          <span className="custorderdetails-span">OrderDate</span>
        </div>
        <div className="custorderdetails-divv"></div>
        {/* <div className="orderdetails-divs"> */}
        {/* {orderData.OrderItems.map((order) => {
          return (
            <div className="custorderdetails-card">
              <span>
                <img
                  className="custorderdetails-img"
                  src={`http://localhost:5000${order.ArtWorkId.ArtWorkImage}`}
                />
              </span>
              <span>{order.Qty}</span>
              <span>&#8377;{order.ArtWorkId.ArtWorkPrice}</span>
              <span>{orderData?.OrderStatus}</span>
              <span>{orderData?.OrderDate}</span>
            </div>
          );
        })} */}
        <div className="custorderdetails-divs"></div>
      </div>
    </div>
  );
};

export default CustOrderDetails;
