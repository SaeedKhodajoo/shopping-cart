import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    items: [],
  },
  reducers: {
    removeFromFavoriteList(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    addToFavoriteList(state, action) {
      const newItem = action.payload;
      state.items.push({
        id: newItem.id,
        price: newItem.price,
        name: newItem.name,
        imgSrc: newItem.imgSrc,
      });
    },
    clearFavoriteList(state) {
      state.items = [];
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice;
