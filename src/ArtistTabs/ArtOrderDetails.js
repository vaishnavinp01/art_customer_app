import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
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
      <p>{orderData._id}</p>

      <div>
        <h6>ArtWork Name:{orderData?.CustId?.UserName}</h6>
        <h6>ArtWork Type:{orderData?.CustId?.User_Type}</h6>
        {/* <h6>ArtWork Name:{orderData?.CustId?.CustomerName}</h6> */}
        {/* <h6>ArtWork Type:{orderData?.CustId?.CustomerEmail}</h6> */}
      </div>
      <div>
        {orderData.OrderItems.map((order) => {
           return (
            <div>
              <Card className="artorderdetails-card">
                <Card.Body className="artorderdetails-body">
                  <Card.Img
                    className="artorderdetails-img"
                    src={`http://localhost:5000${order.ArtWorkId.ArtWorkImage}`}
                  />
                  <div className="artorderdetails-div">
                    <p className="artorederdetails-p">Quantity: {order.Qty}</p>
                    <p className="artorderdetails-p">
                      Name: {order.ArtWorkId.ArtWorkName}
                    </p>
                    <p className="artorderdetails-p">
                      Price: {order.ArtWorkId.ArtWorkPrice}
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArtOrderDetails;
