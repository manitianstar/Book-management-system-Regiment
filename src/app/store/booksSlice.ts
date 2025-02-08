import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Book = {
  id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  coverImage?: string;
  price: number; // Changed to string
  rating: number; // Changed to string
  reviews: number; // Changed to string
  buttonText1: string;
  buttonText2: string;
};

type BooksState = {
  books: Book[];
};

const initialState: BooksState = {
  books: [
    {
      id: "1",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic Fiction",
      description: "A novel about the American Dream and the roaring 1920s.",
      coverImage: "https://example.com/gatsby.jpg",
      price: 10.99,
      rating: 4.7,
      reviews: 1200,
      buttonText1: "Add Book",
      buttonText2: "Remove Book",
    },
    {
      id: "2",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Historical Fiction",
      description: "A novel about racial injustice and growing up in the South.",
      coverImage: "https://example.com/mockingbird.jpg",
      price: 12.99,
      rating: 4.9,
      reviews: 1500,
      buttonText1: "Add Book",
      buttonText2: "Remove Book",
    },
    {
      id: "3",
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      description: "A chilling dystopian novel about a totalitarian regime south.",
      coverImage: "https://example.com/1984.jpg",
      price: 9.99,
      rating: 4.8,
      reviews: 2000,
      buttonText1: "Add Book",
      buttonText2: "Remove Book",
    },
    {
      id: "4",
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Philosophical Fiction",
      description: "A journey of self-discovery and following one's dreams.",
      coverImage: "https://example.com/alchemist.jpg",
      price: 11.99,
      rating: 4.5,
      reviews: 1800,
      buttonText1: "Add Book",
      buttonText2: "Remove Book",
    },
    // Add remaining books with price, rating, and reviews as strings
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;