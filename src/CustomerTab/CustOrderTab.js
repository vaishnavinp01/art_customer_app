import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../CSS/CustOrderTab.css";
import { useDispatch, useSelector } from "react-redux";
import register from "../reduxwork/UserSlice";

const CustOrderTab = () => {
  const dispatcher = useDispatch();
  const { UserData } = useSelector((state) => state.user);
  const [CustOrders, setCustOrders] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    const custOrderId = { CustId: UserData._id };
    console.log(UserData._id);
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

  return (
    <div>
      <h4>CustOrderTab</h4>
      <h1> ID:{UserData._id}</h1>
      {/* CustOrders */}
      {/* <Container>
        <Row>
          {CustOrders.map((order) => {
            return (
              <Col sm={12} md={8} lg={4}>
                <Card>
                  <Card.Body>
                    <Card.Text>{order.OrderDate}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container> */}
    </div>
  );
};

export default CustOrderTab;
