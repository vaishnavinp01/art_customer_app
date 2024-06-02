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
            <table className="cart-">
              <tr>
                <th scope="col" className="cart-th">
                  Order
                </th>
                <th scope="col" className="cart-th">
                  Quantity
                </th>
                <th scope="col" className="cart-th">
                  Price
                </th>
                <th scope="col" className="cart-th">
                  Total Price
                </th>
              </tr>
            </table>
            <tbody className="cart-card">
              <tr>
                <td className="cart-item">
                  <div className="">
                    <img
                      className="cart-img"
                      src={`http://localhost:5000${art.ArtWorkImage}`}
                    />
                    <h4>{art.ArtWorkName}</h4>
                  </div>
                  <button
                    className="cart-btn"
                    onClick={() => {
                      dispatcher(decrementQuantity({ artid }));
                    }}
                  >
                    -
                  </button>
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
                  &#8377;
                  <span className="cart">{art.ArtWorkPrice}</span>
                  &#8377;
                  <span
                    className="cart-spanss"
                    style={{ marginBottom: "20px" }}
                  >
                    {CartTotalAmount}
                  </span>
                </td>
              </tr>
            </tbody>
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
