# **Book Listing and Cart Management System** #

This is a **Book Listing and Cart Management System** built using **Next.js**, **Redux Toolkit**, **Typescript** and **Tailwind CSS**. Users can add books to a list, remove them, and manage a cart of selected books.

## **Features** ##

- 📚 **Add Books**: Users can add new books to the homepage.
- ❌ **Remove Books**: Users can remove books from the listing.
- 📄 **Book Details**: Each book has a title, author, genre, description, cover image, price, rating, and reviews.
- ⚡ **State Management**: Redux Toolkit is used to manage book and cart states efficiently.

## **Technologies Used** ##

- **Next.js** (React framework for SSR & routing)
- **Redux Toolkit** (State management)
- **TypeScript** (Static typing for better code maintainability)
- **Tailwind CSS** (Styling framework)

## **Installation & Setup** ##

**1️. Clone the Repository**

git clone https://github.com/manitianstar/book-listing-app.git

cd book-listing-app

**2️. Install Dependencies**

npm install   or yarn install

**3️. Run the Development Server**

npm run dev or yarn dev

- The app will be available at <http://localhost:3000>

## **Project Structure** ##

/book-listing-app

src/

├── app/

│   ├── AddBook/

│   │   ├── page.tsx            // AddBook page component

│   ├── BookCart/

│   │   ├── page.tsx            // BookCart page component

│   ├── layout.tsx              // RootLayout for the app

│   ├── page.tsx                // HomePage component

│   ├── globals.css             // Global styles

│   ├── store/

│   │   ├── booksSlice.ts       // Redux slice for managing books

│   │   ├── cartSlice.ts        // Redux slice for managing cart

│   │   ├── store.ts            // Redux store configuration

├── Components/

│   ├── ReviewCards/

│   │   ├── card\_review.tsx     // Component for rendering review cards

│   ├── StoreComponents/

│   │   ├── card.tsx            // Book card component

│   ├── Hero.tsx                // Hero section component

│   ├── KeyFeature.tsx          // Key features section component

│   ├── NavBar.tsx              // Navigation bar component

│   ├── Review.tsx              // Review section component

├── public/

│   ├── libraryBooks.jpg        // Static assets (images)

├── README.md                   // Project documentation

## **How It Works** ##

1️. **Adding a Book**

- Navigate to /AddBook.
- Fill out the book details and click Add Book.
- The book will be added to the homepage.

  ![](Aspose.Words.36c1e44a-b282-4c6f-aaad-7bbd41926b7e.001.png)

2\. **Removing a Book**

- Click Remove Book on a book card.
- The book will be removed from the homepage listing.

  ![](Aspose.Words.36c1e44a-b282-4c6f-aaad-7bbd41926b7e.002.png)

## **Routes** ##

**1. / - Homepage**

- Displays a list of books.
- Users can:
  - View book details.
  - Remove books from the homepage.
  - Add books to the cart.

    ![](Aspose.Words.36c1e44a-b282-4c6f-aaad-7bbd41926b7e.003.png)

**2. /AddBook - Add Book Page**

- Contains a form to add new books to the collection.
- Books are dynamically added to the Redux state and displayed on the homepage.

**3. /BookCart - Book Cart Page**

- Displays the list of books added to the cart.
- Users can view and manage the books in their cart.
