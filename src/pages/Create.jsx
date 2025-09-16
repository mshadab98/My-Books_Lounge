import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {BookContext} from "../context/BookContext";


const Create = () => {
 const navigate = useNavigate()
  const {data,setData} = useContext(BookContext)

  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (book) => {
    book.id = nanoid(1);
    toast.success('New Book Created')  
     navigate("/books"); 
     
    console.log("📚 New Book:", book);
    reset();


    const bookcopydata = [...data];
    bookcopydata.push(book);
    setData(bookcopydata);
    localStorage.setItem('book', JSON.stringify(bookcopydata))
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create <span className="text-blue-600">New Book</span>
        </h2>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          {/* Image URL */}
          <input
            type="url"
            {...register("image")}
            placeholder="Enter image URL"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Book Title */}
          <input
            type="text"
            {...register("title")}
            placeholder="Enter the book title"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Author */}
          <input
            type="text"
            {...register("AuthorName")}
            placeholder="Enter the Author Name"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Price */}
          <input
            type="number"
            {...register("Price")}
            placeholder="Enter Price (₹)"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            {...register("des")}
            placeholder="Enter Description of book"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Category */}
          <select
            {...register("category")}
            required
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-fiction">Non-fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Self-help">Self-help</option>
            <option value="Educational">Educational</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Create Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
