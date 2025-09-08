import { Link } from "react-router-dom";
import { FaBookOpen, FaShoppingCart } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800 pt-8">


      {/* Hero Section left side */}
      <section className="relative bg-gradient-to-r from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Discover Your Next <span className="text-indigo-500">Favorite Book</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Explore thousands of books across genres. From classics to the latest
              releases, we’ve got something for every reader.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                to="/books"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
              >
                Shop Now
              </Link>
              <Link
                to="/create"
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-xl shadow hover:bg-gray-300 transition"
              >
                Create your book
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
              alt="Books"
              className="rounded-2xl shadow-lg max-h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Categories Section  code hai ye*/}

      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Shop by Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Fiction",
              img: "https://images.unsplash.com/photo-1528209392022-1f63cbd31d79",
            },
            {
              name: "Non-Fiction",
              img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
            },
            {
              name: "Science",
              img: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
            },
            {
              name: "Children",
              img: "https://images.unsplash.com/photo-1531219432768-dbe1e56b9a01",
            },
          ].map((cat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition text-center cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="h-28 w-full object-cover rounded-xl mb-4"
              />
              <h3 className="font-semibold">{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Featured Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Silent Patient",
                img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
                price: "₹ 799",
              },
              {
                title: "Educated",
                img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
                price: "₹ 599",
              },
              {
                title: "Atomic Habits",
                img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
                price: "₹ 550",
              },
            ].map((book, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow hover:shadow-md transition p-6"
              >
                <img
                  src={book.img}
                  alt={book.title}
                  className="rounded-xl h-56 w-full object-cover mb-4"
                />
                <h3 className="font-semibold text-lg">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  A must-read bestseller that inspires and entertains.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold">{book.price}</span>
                  <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} BookStore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
