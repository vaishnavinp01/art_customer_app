import React from "react";
import "../CSS/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotal,
  decrementQuantity,
  incrementQuantity,
} from "../reduxwork/CartSlice";
import axios from "axios";
import { Button, Card, Col, Row } from "react-bootstrap";

const Cart = () => {
  const { CartItems, CartTotalAmount } = useSelector((state) => state.cart);
  const { UserData } = useSelector((state) => state.user);

  const dispatcher = useDispatch();
  dispatcher(calculateTotal());

  //create place order function
  const placeOrder = async () => {
    let finalOrderItems = [];
    CartItems.map((art) => {
      finalOrderItems.push({ Qty: art.quantity, ArtWorkId: art._id });
    });

    const orderData = {
      CustId: UserData.data._id,
      OrderTotalAmount: CartTotalAmount,
      OrderItems: finalOrderItems,
    };
    try {
      const result = await axios.post(
        "http://localhost:5000/artapi/addorder",
        orderData
      );
      console.log(result.data);
      alert("Order Added");
    } catch (error) {}
  };
  return (
    <div className="cart-container">
      {UserData._id}
      <Row>
        {CartItems.map((art) => {
          const artid = art._id;
          return (
            <Col sm={12} md={9} lg={3}>
              <Card className="cart-card">
                <Card.Img
                  className="cart-img"
                  src={`http://localhost:5000${art.ArtWorkImage}`}
                />
                <Card.Body className="cart-body">
                  <Card.Text className="cart-text">{art.ArtWorkName}</Card.Text>
                  <Card.Subtitle className="cart-subtitle">
                    &#8377; {art.ArtWorkPrice}
                  </Card.Subtitle>
                </Card.Body>
                <Card.Footer className="cart-footer">
                  <Button
                    className="cart-button"
                    onClick={() => {
                      dispatcher(decrementQuantity({ artid }));
                    }}
                  >
                    -
                  </Button>
                  <span className="cart-span">{art.quantity}</span>
                  <Button
                    className="cart-btn"
                    onClick={() => {
                      dispatcher(incrementQuantity({ artid }));
                    }}
                  >
                    +
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Row className="cart-row">
        <Col>
          <h4 className="cart-h4">Total Price: {CartTotalAmount}</h4>
        </Col>
        <Col>
          <Button className="cart-btnss" onClick={() => placeOrder()}>
            Place Order
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
