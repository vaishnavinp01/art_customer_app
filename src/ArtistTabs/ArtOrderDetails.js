import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../CSS/ArtOrderDetails.css";

const ArtOrderDetails = () => {
  // useLocation
  const orderData = useLocation().state;
  const [orderDetails, setorderDetails] = useState([]);

  // useEffect
  useEffect(() => {
    axios
      .post("http://localhost:5000/artapi/artorderbyid", {
        orderid: orderData._id,
      })
      .then((result) => {
        setorderDetails(result.data.data);
        console.log("order", result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h4>ArtOrderDetails</h4>
      <p>
        <span
          style={{ fontWeight: "bold", fontStyle: "italic", fontSize: "20px" }}
        >
          OrderId:{" "}
        </span>
        {orderData._id}
      </p>

      <div>
        <h6>User Name:{orderData?.CustId?.UserName}</h6>
        <h6>User Email:{orderData?.CustId?.UserEmail}</h6>
        <h6>User Mobile No:{orderData?.CustId?.UserMobileNo}</h6>
        <h6>User Type:{orderData?.CustId?.User_Type}</h6>
        {/* <h6>ArtWork Type:{orderData?.CustId?.User_Type}</h6> */}
        {/* <h6>ArtWork Name:{orderData?.CustId?.CustomerName}</h6> */}
        {/* <h6>ArtWork Type:{orderData?.CustId?.CustomerEmail}</h6> */}
      </div>
      <div className="artorderdetatils-div">
        <span>Order</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>OrderStatus</span>
        <span>OrderDate</span>
      </div>
      <div className="artorderdetails-divv"></div>
      <div>
        {orderData.OrderItems.map((order) => {
          return (
            <div className="artorderdetails-card">
              <span>
                <img
                  className="artorderdetails-img"
                  src={`http://localhost:5000${order.ArtWorkId.ArtWorkImage}`}
                />
              </span>
              <span>{order.Qty}</span>
              <span>&#8377;{order.ArtWorkId.ArtWorkPrice}</span>
              <span>{orderData?.OrderStatus}</span>
              <span>{orderData?.OrderDate}</span>
            </div>
          );
        })}
        <div className="artorderdetails-divs"></div>
      </div>
    </div>
  );
};

export default ArtOrderDetails;
