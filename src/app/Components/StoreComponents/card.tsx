"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import defaultBookImg from "../../../../public/book management.jpg"; // Default book image
import { useRouter } from "next/navigation";
// Removed unnecessary imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeBook } from "@/app/store/booksSlice";

type CardProps = {
  id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  coverImage?: string; // Optional book cover image
  price: number;
  rating: number;
  reviews: number;
  buttonText1: string;
  buttonText2: string;
};

const Card: React.FC<CardProps> = ({
  id,
  title,
  author,
  genre,
  description,
  coverImage,
  price,
  rating,
  reviews,
  buttonText1,
  buttonText2,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  // Handle redirection to book details

  // Simulate adding the book to the cart (without Redux)

  return (
    <>
      <div className="max-w-md rounded-lg shadow-lg cursor-pointer bg-neutral-900 p-4">
        <div className="relative">
          <Image
            src="/book management.jpg" // Use the book cover or a placeholder
            alt={title}
            layout="fixed"
            width={350}
            height={300}
            className="rounded-md object-cover w-[350px] h-[300px] mx-auto object-fit"
            quality={100}
            loading="lazy"
          />
        </div>

        <div className="mt-4">
          <h4 className="text-lg font-bold text-white truncate">{title}</h4>
          <p className="text-sm text-neutral-300">by {author}</p>
          <span className="text-xs text-neutral-300">{genre}</span>
          <p className="text-sm text-neutral-400 mt-2">
            {description.length > 80
              ? description.slice(0, 78) + "..."
              : description}
          </p>
          <p className="text-lg text-white font-semibold mt-2">₹{price}</p>

          <p className="text-sm font-semibold text-gray-600 flex items-center mt-2">
            ⭐ {rating} ({reviews} reviews)
          </p>
          <div className="flex gap-2">
            <Link href="/AddBook" className="w-full mt-4">
              <button className="w-full flex justify-center items-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                {buttonText1}
              </button>
            </Link>

            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition" onClick={handleRemoveBook}>
              {buttonText2}
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Card;
