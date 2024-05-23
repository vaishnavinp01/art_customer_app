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
    <div style={{ marginTop: "40px" }}>
      {CartItems.map((art) => {
        const artid = art._id;
        return (
          <div>
            <div className="cart-div">
              <span className="cart-span">Order</span>
              <span className="cart-span">Quantity</span>
              <span className="cart-span">Price</span>
              <span className="cart-span">OrderDate</span>
              <span className="cart-span">Total Price</span>
            </div>
            <div className="cart-divv"></div>
            <div className="cart-card">
              <span>
                <img
                  className="cart-img"
                  src={`http://localhost:5000${art.ArtWorkImage}`}
                />
              </span>
              <span>
                <button
                  className="cart-btn"
                  onClick={() => {
                    dispatcher(decrementQuantity({ artid }));
                  }}
                >
                  -
                </button>
              </span>
              <span className="cart-spans">{art.quantity}</span>
              <span>
                <button
                  className="cart-btn"
                  onClick={() => {
                    dispatcher(incrementQuantity({ artid }));
                  }}
                >
                  +
                </button>
              </span>
              {/* <span className="cart-spans"> */}
                &#8377;
                {/* </span>{" "} */}
              <span className="cart-spanss">{art.ArtWorkPrice}</span>
              <span className="cart-spanss">{art?.UserData?.OrderDate}</span>
              {/* <span className="cart-spans"> */}
                &#8377;
                {/* </span>{" "} */}
              <span className="cart-spanss" style={{ marginBottom: "20px" }}>
                {CartTotalAmount}
              </span>
            </div>
            <div className="cart-divv"></div>
          </div>
        );
      })}
      <button
        style={{ marginTop: "20px" }}
        className="cart-btnss"
        onClick={() => placeOrder()}
      >
        Place Order
      </button>
    </div>
  );
};

export default Cart;
