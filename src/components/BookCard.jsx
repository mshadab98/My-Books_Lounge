import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  const { id, title, image, des, AuthorName, Price } = book;

  return (
    <Link
      to={`/books/booldetails/${id}`}
      className="block bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transform transition duration-300 hover:shadow-2xl"
    >
      {/* Image with padding */}
      <div className="p-4 bg-gray-50 flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="w-full h-60 md:h-64 lg:h-72 object-contain rounded-lg"
        />
      </div>

      {/* Book Details */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-bold text-gray-800 truncate">{title}</h2>
        <p className="text-gray-500 text-sm">By {AuthorName}</p>
        <p className="text-gray-600 text-sm">
          {des?.slice(0, 100)}... <span className="text-blue-600 font-semibold">more</span>
        </p>

        <div className="flex justify-between items-center mt-2">
          <span className="text-green-600 font-bold text-lg">₹{Price}</span>
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition">
            View
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
