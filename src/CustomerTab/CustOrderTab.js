import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../CustomerCSS/CustOrderTab.css";
import { useDispatch, useSelector } from "react-redux";

const CustOrderTab = () => {
  const { UserData } = useSelector((state) => state.user);
  const [CustOrders, setCustOrders] = useState([]);
  const navigator = useNavigate();

  // useEffect(() => {
  //   const custOrderId = { CustId: UserData._id };
  //   console.log(UserData._id);
  //   try {
  //     const result = axios.post(
  //       "http://localhost:5000/artapi/ordersbycustid",
  //       custOrderId
  //     );
  //     console.log("order", result.data);
  //     setCustOrders(result.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/artapi/allorders")
      .then((result) => {
        setCustOrders(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h4>CustOrderTab</h4>
      <h4> ID:{UserData?._id}</h4>
      {/* CustOrders */}
      <Container>
        <Row>
          {CustOrders.map((order) => {
            return (
              <Col sm={12} md={8} lg={4}>
                <Card>
                  <Card.Body>
                    <Card.Text>Date: {order.OrderDate}</Card.Text>
                    <Card.Text>Status: {order.OrderStatus}</Card.Text>
                    <Card.Text>Total: {order.OrderTotalAmount}</Card.Text>
                  </Card.Body>
                  {/* <Card.Footer>
                    <button onClick={navigator("/custorderdetails")}>
                      Order Details
                    </button>
                  </Card.Footer> */}
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default CustOrderTab;
