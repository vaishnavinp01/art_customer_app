import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartItems: [],
  ItemCount: 0,
  CartTotalAmount: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.CartItems = [];
    },

    addItem: (state, action) => {
      const newItem = { ...action.payload, quantity: 1 };
      state.CartItems = [...state.CartItems, newItem];
      state.ItemCount = state.CartItems.length;
    },

    incrementQuantity: (state, { payload }) => {
      const createItem = state.CartItems.find(
        (art) => art._id === payload.artid
      );
      createItem.quantity += 1;
    },

    decrementQuantity: (state, { payload }) => {
      const createItem = state.CartItems.find(
        (art) => art._id === payload.artid
      );
      if (createItem.quantity < 1) {
        state.CartItems = state.CartItems.filter(
          (art) => art._id !== payload.artid
        );
      }
      createItem.quantity -= 1;
    },

    calculateTotal: (state) => {
      let totalQuantity = 0;
      let totalAmount = 0;
      state.CartItems.forEach((art) => {
        totalQuantity += art.quantity;
        totalAmount += art.quantity * art.ArtWorkPrice;
      });
      state.CartTotalAmount = totalAmount;
    },
  },
});

export const {
  calculateTotal,
  addItem,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;
