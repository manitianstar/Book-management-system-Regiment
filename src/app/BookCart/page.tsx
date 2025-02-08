"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const BookCart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author} - ${book.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookCart;
