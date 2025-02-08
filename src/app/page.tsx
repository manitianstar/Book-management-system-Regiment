"use client";

import React from "react";
import NavBar from "../Components/NavBar";
import Image from "next/image";
import Card from "./Components/StoreComponents/card";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const HomePage = () => {
  const books = useSelector((state: RootState) => state.books.books);

  return (
    <div className="bg-neutral-900">
      {/* Navbar Section */}
      <section>
        <NavBar />
      </section>

      {/* Hero Section */}
      <div className="pt-[60px] md:pt-[60px]">
        <div className="hidden md:flex relative w-full h-[522px] justify-center items-center">
          <div className="relative w-full h-[522px]">
            <Image
              src="/libraryBooks.jpg"
              alt="Library Books"
              width={1280}
              height={522}
              className="w-full h-[522px] object-fit"
              quality={100}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="absolute flex flex-col justify-center items-center w-full max-w-[1140px]">
            <h1 className="text-[72px] text-[#F5F5F5] font-bold leading-normal text-center">
              Manage Your Library with Ease
            </h1>
            <p className="text-[32px] max-w-[710px] text-[#E5E5E5] font-regular leading-normal text-center mt-6">
              Organize, track, and discover books effortlessly with our intuitive book management system.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Grid Section */}
      <div className="flex flex-col justify-center items-center mt-10 mb-10">
        {books.length <= 0 ? (
          <div>No books available</div>
        ) : (
          <div className="inline-grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mb-10 w-full max-w-screen-xl px-4 md:px-8">
            {books.slice(0, 9).map((book) => (
              <div key={book.id}>
                <Card
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  genre={book.genre}
                  description={book.description}
                  coverImage={book.coverImage}
                  price={book.price}
                  rating={book.rating}
                  reviews={book.reviews}
                  buttonText1={book.buttonText1} // Pass the property
                  buttonText2={book.buttonText2}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* View More Button Section */}
      <div className="flex justify-center py-4">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          View More
        </button>
      </div>
    </div>
  );
};

export default HomePage;