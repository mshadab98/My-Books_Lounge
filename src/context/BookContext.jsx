import { createContext, useEffect, useState } from "react";


export const BookContext = createContext(null);

export const BookProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("books")) || []);
  }, []);

  return (
    <BookContext.Provider value={{ data, setData }}>
      {children}
    </BookContext.Provider>
  );
};
