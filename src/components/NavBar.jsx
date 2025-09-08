import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="bg-black/60 backdrop-blur-md text-white fixed w-full z-20 flex items-center justify-between px-10 py-4 shadow-md">
     
        <NavLink to="/">
          <h1 className="text-2xl text-white font-bold">📚 The Book Lounge</h1>
        </NavLink>
        <nav 
        className='gap-x-8 text-lg font-medium flex'
        >
        <NavLink 
          to="/" 
          className={({ isActive }) =>
            `transition duration-300 pb-1 ${
              isActive ? "text-white border-b-2 border-indigo-500" : "hover:text-white"
            }`
          }
        >
          Home
        </NavLink>
        
<NavLink 
          to="/about" 
          className={({ isActive }) =>
            `transition duration-300 pb-1 ${
              isActive ? "text-white border-b-2 border-indigo-500" : "hover:text-white"
            }`
          }
        >
          About
        </NavLink>

        <NavLink 
          to="/books" 
          className={({ isActive }) =>
            `transition duration-300 pb-1 ${
              isActive ? "text-white border-b-2 border-indigo-500" : "hover:text-white"
            }`
          }
        >
          Books
        </NavLink>

        <NavLink 
          to="/create" 
          className={({ isActive }) =>
            `transition duration-300 pb-1 ${
              isActive ? "text-white border-b-2 border-indigo-500" : "hover:text-white"
            }`
          }
        >
          Create
        </NavLink>
        <NavLink 
          to="/fav" 
          className={({ isActive }) =>
            `transition duration-300 pb-1 ${
              isActive ? "text-white border-b-2 border-indigo-500" : "hover:text-white"
            }`
          }
        >
          Favourite
        </NavLink>

       
 <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
        Sign In
      </button>
        </nav>
        
    </div>
  )
}

export default NavBar