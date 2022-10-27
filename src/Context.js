import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [contents, setContents] = useState([]);
  const [next, setNext] = useState([]);
  const [prevPage, setPrevPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)

  const [favData, setFavData] = useState(
    JSON.parse(localStorage.getItem("favData")) !== null
      ? JSON.parse(localStorage.getItem("favData"))
      : []
  );

  const handleFav = (content) => {
    setFavData([...favData, content]);
  };

  useEffect(() => {
    localStorage.setItem("favData", JSON.stringify(favData));
  }, [favData]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/?page=${currentPage}`).then((res) => {
      setContents(res.data.results);
      setNext(res.data.next);
      (res.data.previous !== null) && setPrevPage(res.data.previous);
    });
  }, [currentPage]);

  return (
    <Context.Provider
      value={{
        contents,
        setContents,
        next,
        setNext,
        prevPage,
        setPrevPage,
        favData,
        handleFav,
        currentPage,
        setCurrentPage
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
