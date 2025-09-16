import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // hamburger & cross icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black/60 backdrop-blur-md text-white fixed w-full z-20 flex items-center justify-between px-6 py-4 shadow-md">
      {/* Logo */}
      <NavLink to="/">
        <h1 className="text-xl md:text-2xl font-bold">📚 The Book Lounge</h1>
      </NavLink>

      {/* Hamburger button (only mobile pe dikhna chahiye) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Nav links */}
      <nav
        className={`flex-col md:flex-row md:flex md:gap-x-8 text-lg font-medium absolute md:static left-0 w-full md:w-auto bg-black/80 md:bg-transparent top-[64px] md:top-auto transition-all duration-300 ease-in-out ${
          isOpen ? "flex p-5 gap-y-4" : "hidden"
        }`}
      >
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `transition duration-300 pb-1 ${
              isActive
                ? "text-white border-b-2 border-indigo-500"
                : "hover:text-indigo-400"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `transition duration-300 pb-1 ${
              isActive
                ? "text-white border-b-2 border-indigo-500"
                : "hover:text-indigo-400"
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/books"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `transition duration-300 pb-1 ${
              isActive
                ? "text-white border-b-2 border-indigo-500"
                : "hover:text-indigo-400"
            }`
          }
        >
          Books
        </NavLink>

        <NavLink
          to="/create"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `transition duration-300 pb-1 ${
              isActive
                ? "text-white border-b-2 border-indigo-500"
                : "hover:text-indigo-400"
            }`
          }
        >
          Create
        </NavLink>

        <NavLink
          to="/favourite"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `transition duration-300 pb-1 ${
              isActive
                ? "text-white border-b-2 border-indigo-500"
                : "hover:text-indigo-400"
            }`
          }
        >
          Favourite
        </NavLink>

        <NavLink to="/SignIn">
          <button
          onClick={() => setIsOpen(false)}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Sign In
        </button>
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
