import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  // Add other properties as needed
}

interface CartState {
  cart: Book[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Book>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
