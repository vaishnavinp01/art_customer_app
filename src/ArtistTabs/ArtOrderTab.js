import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ArtOrderTab = () => {
  // AllOrders
  const [AllOrders, setAllOrders] = useState([]);
  const [onShowDelete, setonShowDelete] = useState(false);

  const navigator = useNavigate();

  // AlllOrders
  useEffect(() => {
    axios
      .get("http://localhost:5000/artapi/allorders")
      .then((result) => {
        setAllOrders(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <h5>ArtOrderTab</h5>
      {/* AllOrders */}
      <Container>
        <Row>
          {AllOrders.map((order) => {
            return (
              <Col sm={12} md={6} lg={4}>
                <Card className="artordertab-card">
                  <Card.Body className="artordertab-body">
                    <Card.Text className="artordertab-text">
                      Date:{order.OrderDate}
                    </Card.Text>
                    <Card.Text className="artordertab-text">
                      Status:{order.OrdererStatus}
                    </Card.Text>
                    <Card.Text className="artordertab-text">
                      Total:{order.OrderTotalAmount}
                    </Card.Text>
                  </Card.Body>
                  <div className="artordertab-div">
                    <button
                      className="artordertab-button"
                      onClick={() =>
                        navigator("/artorderdetails", { state: order })
                      }
                    >
                      OrderDetails
                    </button>
                    <button
                      className="order-button"
                      onClick={() => {
                        onShowDelete(true)
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Delete */}
      <Modal show={onShowDelete} onHide={() => setonShowDelete(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Are you sure to delete this Dish?</h4>
        </Modal.Body>
        <Modal.Footer>
          <button className="artordertab-button">
            Yes
          </button>
          <button className="artordertab-button" onClick={()=>setonShowDelete(false)}>
            No
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ArtOrderTab;
