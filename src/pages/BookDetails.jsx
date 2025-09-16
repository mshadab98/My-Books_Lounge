import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Heart } from "lucide-react";
import { BookContext } from "../context/BookContext";

const BookDetails = () => {
  const { data, setData } = useContext(BookContext);
  const params = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [favourite, setFavourite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  useEffect(() => {
    const foundBook = data.find((b) => b.id === params.id);
    setBook(foundBook);
  }, [data, params.id]);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: book?.title,
      image: book?.image,
      AuthorName: book?.AuthorName,
      Price: book?.Price,
      des: book?.des,
      category: book?.category,
    },
  });

  // ✅ Update Book
  const UpdateHandler = (updatedBook) => {
    const index = data.findIndex((b) => b.id === params.id);
    const copyData = [...data];
    copyData[index] = { ...copyData[index], ...updatedBook };
    setData(copyData);
    localStorage.setItem("books", JSON.stringify(copyData));
    toast.success("Book Updated Successfully");
  };

  // ✅ Delete Book
  const deleteHandler = () => {
    const filteredData = data.filter((b) => b.id !== params.id);
    setData(filteredData);
    localStorage.setItem("books", JSON.stringify(filteredData));
    toast.error("Book Deleted");
    navigate("/books");
  };

  // ✅ Favourite Handler
  const FavHandler = () => {
    if (!favourite.find((f) => f.id === book.id)) {
      const copyFav = [...favourite, book];
      setFavourite(copyFav);
      localStorage.setItem("fav", JSON.stringify(copyFav));
      toast.success("Book Added to Favourites");
    }
  };

  const UnFavHandler = () => {
    const updatedFav = favourite.filter((f) => f.id !== book.id);
    setFavourite(updatedFav);
    localStorage.setItem("fav", JSON.stringify(updatedFav));
    toast.info("Book Removed from Favourites");
  };

  if (!book) return <p className="text-center mt-24 text-lg">Loading...</p>;

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 min-h-screen pt-24">
      {/* ✅ Added pt-24 to avoid navbar overlapping */}

      {/* Left Side - Book Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 md:w-1/2 relative flex flex-col items-center">
        {/* Favourite Heart */}
        {favourite.find((f) => f.id === book.id) ? (
          <Heart
            onClick={UnFavHandler}
            fill="red"
            className="absolute top-4 right-4 text-3xl cursor-pointer"
          />
        ) : (
          <Heart
            onClick={FavHandler}
            className="absolute top-4 right-4 text-3xl text-gray-400 cursor-pointer"
          />
        )}

        <div className="p-4 bg-gray-50 rounded-lg w-full flex justify-center">
          <img
            src={book.image}
            alt={book.title}
            className="h-64 w-full object-contain rounded-lg"
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mt-4 text-center">
          {book.title}
        </h1>
        <h3 className="text-indigo-600 font-semibold mt-1">{book.AuthorName}</h3>
        <p className="text-green-600 font-bold text-lg mt-1">₹ {book.Price}</p>
        <p className="text-gray-700 mt-2 text-center">{book.des}</p>
        <span className="mt-2 text-sm text-gray-500">
          Category: {book.category}
        </span>
      </div>

      {/* Right Side - Update Form */}
      <div className="bg-white shadow-lg rounded-xl p-4 md:p-6 md:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Update Book
        </h2>

        <form onSubmit={handleSubmit(UpdateHandler)} className="space-y-2 md:space-y-3">
          <input
            {...register("image")}
            type="url"
            placeholder="Image URL"
            className="w-full p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            {...register("title")}
            type="text"
            placeholder="Book Title"
            className="w-full p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            {...register("AuthorName")}
            type="text"
            placeholder="Author Name"
            className="w-full p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            {...register("Price")}
            type="number"
            placeholder="Price"
            className="w-full p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            {...register("des")}
            placeholder="Book Description"
            className="w-full p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
          <select
            {...register("category")}
            className="w-full p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-fiction">Non-fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Self-help">Self-help</option>
            <option value="Educational">Educational</option>
          </select>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-3 mt-3">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Update
            </button>
            <button
              type="button"
              onClick={deleteHandler}
              className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookDetails;
