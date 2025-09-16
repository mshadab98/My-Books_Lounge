import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

const Favourite = () => {
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    // ✅ Fetch favourite books from localStorage
    const favBooks = JSON.parse(localStorage.getItem("fav")) || [];

    // ✅ Optional: Clear old unwanted data if it's not from BookStore
    const filteredFav = favBooks.filter(
      (book) => book.title && book.AuthorName
    );

    setFavourite(filteredFav);
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        My Favourite Books 📚
      </h1>

      {favourite.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favourite.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-lg text-center mt-12">
          No Book Found in Favourites 📚
        </p>
      )}
    </div>
  );
};

export default Favourite;
