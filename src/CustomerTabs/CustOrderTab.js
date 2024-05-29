import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../CSS/CustOrderTab.css";

const CustOrderTab = () => {
  // AllOrders
  const [CustOrders, setCustOrders] = useState([]);
  // const [onShowDelete, setonShowDelete] = useState(false);
  const navigator = useNavigate();

  // AlllOrders
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

      {/* CustOrders */}
      <Container>
        <Row>
          {CustOrders.map((order) => {
            return (
              <Col sm={12} md={6} lg={4}>
                <Card className="custordertab-card">
                  <Card.Body className="custordertab-body">
                    <Card.Text className="custordertab-text">
                      Date:{order.OrderDate}
                    </Card.Text>
                    <Card.Text className="custordertab-text">
                      Status:{order.OrderStatus}
                    </Card.Text>
                    <Card.Text className="custordertab-text">
                      Total:{order.OrderTotalAmount}
                    </Card.Text>
                  </Card.Body>
                  <div className="custordertab-div">
                    <button
                      className="custordertab-button"
                      onClick={() =>
                        navigator("/custorderdetails", { state: order })
                      }
                    >
                      OrderDetails
                    </button>
                    {/* <button
                      className="order-button"
                      onClick={() => {
                        onShowDelete(true);
                      }}
                    >
                      Delete
                    </button> */}
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Delete */}
      {/* <Modal show={onShowDelete} onHide={() => setonShowDelete(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Are you sure to delete this Dish?</h4>
        </Modal.Body>
        <Modal.Footer>
          <button className="custordertab-button">Yes</button>
          <button
            className="custordertab-button"
            onClick={() => setonShowDelete(false)}
          >
            No
          </button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};

export default CustOrderTab;
