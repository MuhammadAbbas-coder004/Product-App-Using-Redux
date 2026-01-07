import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addProduct: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseProduct: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload);
      if (existingItem && existingItem.quantity > 0) {
        existingItem.quantity -= 1;
        if (existingItem.quantity < 0) existingItem.quantity = 0;
      }
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    }
  }
});

export const { addProduct, decreaseProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
