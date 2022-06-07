import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.totalAmount = state.totalAmount + newItem.price * newItem.amount;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          amount: newItem.amount,
          totalPrice: newItem.price * newItem.amount,
          name: newItem.name,
        });
      } else {
        existingItem.totalPrice =
          existingItem.totalPrice + newItem.price * newItem.amount;
        existingItem.amount = existingItem.amount + newItem.amount;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalAmount = state.totalAmount - existingItem.price;
      if (existingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.amount--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    clearCart(state, action) {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
