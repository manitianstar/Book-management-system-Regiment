"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "@/app/store/booksSlice";
import { v4 as uuidv4 } from "uuid";

const AddBookPage = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    coverImage: "",
    price: "",
    rating: "",
    reviews: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newBook = {
      ...formData,
      id: uuidv4(),
      buttonText1: "Add Book",
      buttonText2: "Remove Book",
      price: Number(formData.price),
      rating: Number(formData.rating),
      reviews: Number(formData.reviews),
    };

    dispatch(addBook(newBook));
    alert("Book added successfully!");
    setFormData({
      title: "",
      author: "",
      genre: "",
      description: "",
      coverImage: "",
      price: "",
      rating: "",
      reviews: "",
    });
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Add a New Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="coverImage"
          placeholder="Cover Image URL"
          value={formData.coverImage}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="reviews"
          placeholder="Reviews"
          value={formData.reviews}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add the book
        </button>
      </form>
    </div>
  );
};

export default AddBookPage;
