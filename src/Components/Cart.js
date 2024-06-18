import React from "react";
import "../CSS/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotal,
  decrementQuantity,
  incrementQuantity,
} from "../reduxwork/CartSlice";
import axios from "axios";

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
      CustId: UserData?.data?._id,
      OrderTotalAmount: CartTotalAmount,
      OrderItems: finalArtItems,
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
    <div className="cart-main-div">
      <div style={{ marginTop: "40px" }}>
        <div className="cart-div">
          <span className="cart-span">Order</span>
          <span className="cart-span">ArtWork Name</span>
          <span className="cart-span">Quantity</span>
          <span className="cart-span">Price</span>
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
                <span style={{marginRight:'30px'}}>{art.ArtWorkName}</span>
                <div>
                  <button
                    className="cart-btns"
                    onClick={() => {
                      dispatcher(decrementQuantity({ artid }));
                    }}
                  >
                    -
                  </button>
                  <span className="cart-spans">{art.quantity}</span>
                  <button
                    className="cart-btns"
                    onClick={() => {
                      dispatcher(incrementQuantity({ artid }));
                    }}
                  >
                    +
                  </button>
                </div>
                <span>&#8377;{art.ArtWorkPrice}</span>
              </div>
              <div className="cart-divs"></div>
            </div>
          );
        })}
        <div className="cart-divvs"></div>
        <span className="cart-spanss" style={{ fontWeight: "bold" }}>
          Total Price
        </span>
        <span className="cart-spanss">&#8377;{CartTotalAmount}</span>
        {/* <button
          style={{ marginTop: "20px" }}
          className="cart-btnss"
          onClick={() => placeOrder()}
        >
          Place Order
        </button> */}
        <button className="cart-btn" onClick={() => placeOrder()}>
          <svg
            height="20"
            width="20"
            fill="#FFFFFF"
            viewBox="0 0 24 24"
            data-name="Layer 1"
            id="Layer_1"
            className="cart-sparkle"
          >
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>
          <span className="cart-text">Place Order</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
