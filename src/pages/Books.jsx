import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookCard from "../components/BookCard";

const Books = () => {
  const { data } = useContext(BookContext);

  const readHandler = data.map((book) => (
    <BookCard key={book.id} book={book} />
  ));

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">All Books 📚</h1>

      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {readHandler}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="text-gray-500 text-xl mb-4">📚 No Books Found!</p>
          <p className="text-gray-400 text-sm">Add some books to get started.</p>
        </div>
      )}
    </div>
  );
};

export default Books;
