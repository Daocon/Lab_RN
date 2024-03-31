//b2
import { createReducer } from "@reduxjs/toolkit";
import { addItem, removeItem } from "./action";

const initState = { items: [] };

const cartReducer = createReducer(initState, (builder) => {
  builder
    .addCase(addItem, (state, action) => {
      //xu li khi da ton tai san pha trong gio hang
      const tontaiItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      // xu li khi chua co san pham trong gio hang
      if (tontaiItemIndex !== -1) {
        state.items[tontaiItemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    })
    .addCase(removeItem, (state, action) => {
      const tontaiItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (tontaiItemIndex !== -1) {
        state.items[tontaiItemIndex].quantity--;
      }
      if (state.items[tontaiItemIndex].quantity == 0) {
        state.items.splice(tontaiItemIndex, 1);
      }
    });
});

export default cartReducer;
