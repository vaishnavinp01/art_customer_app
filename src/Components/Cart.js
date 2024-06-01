import React from "react";
import "../CSS/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotal,
  decrementQuantity,
  incrementQuantity,
} from "../reduxwork/CartSlice";
import axios from "axios";
import { BiMinus, BiPlus } from "react-icons/bi";
import { register } from "../reduxwork/UserSlice";

const Cart = () => {
  const { CartItems, CartTotalAmount } = useSelector((state) => state.cart);
  const { UserData } = useSelector((state) => state.user);

  const dispatcher = useDispatch();
  dispatcher(calculateTotal());

  //create place order function
  const placeOrder = async () => {
    let finalArtItems = [];
    CartItems.map((art) => {
      finalArtItems.push({ Qty: art.quantity, ArtWorkId: art._id });
    });

    const orderData = {
      CustId: UserData._id,
      OrderTotalAmount: CartTotalAmount,
      OrderItems: finalArtItems,
    };
    try {
      const result = await axios.post(
        "http://localhost:5000/artapi/addorder",
        orderData
      );
      console.log(result.data);
      dispatcher(register(result.data));
      alert("Order Added");
    } catch (error) {}
  };
  return (
    <div className="cart-main-div">
      <div style={{ marginTop: "40px" }}>
        <div className="cart-div">
          <span className="cart-span">Order</span>
          <span className="cart-span">ArtWork Name</span>
          <span className="cart-span">Quantity</span>
          <span className="cart-span">Price</span>
          <span className="cart-span">Total Price</span>
        </div>
        <div className="cart-divv"></div>
        {CartItems.map((art) => {
          const artid = art._id;
          return (
            <div>
              <div className="cart-card">
                <span>
                  <img
                    className="cart-img"
                    src={`http://localhost:5000${art.ArtWorkImage}`}
                  />
                </span>
                <span>{art.ArtWorkName}</span>
                <div>
                  <button
                    className="cart-btn"
                    onClick={() => {
                      dispatcher(decrementQuantity({ artid }));
                    }}
                  >
                    <BiMinus />
                  </button>
                  <span className="cart-spans">{art.quantity}</span>
                  <button
                    className="cart-btn"
                    onClick={() => {
                      dispatcher(incrementQuantity({ artid }));
                    }}
                  >
                    <BiPlus />
                  </button>
                </div>
                <span>&#8377;{art.ArtWorkPrice}</span>
                <span>&#8377;{CartTotalAmount}</span>
              </div>
              <div className="cart-divs"></div>
            </div>
          );
        })}
        {/* <div className="cart-divs"></div> */}
        <button
          style={{ marginTop: "20px" }}
          className="cart-btnss"
          onClick={() => placeOrder()}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
