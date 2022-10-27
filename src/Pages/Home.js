import React, { useContext } from "react";
import Header from "../Components/Header";
import Card from "../Components/Card";
import "../App.css";
import { Context } from "../Context";
import axios from "axios";
import Pagination from "../Components/Pagination";

const Home = () => {
  const { next, setContents, setNext, prevPage, setPrevPage } =
    useContext(Context);

  const handleNextPage = () => {
    axios.get(next).then((res) => {
      setContents(res.data.results);
      setNext(res.data.next);
      setPrevPage(res.data.previous);
    });
  };

  const handlePrevPage = () => {
    axios.get(prevPage).then((res) => {
      setContents(res.data.results);
      setPrevPage(res.data.previous);
    });
  };
  return (
    <div>
      <Header />

      <Card />
      <span className="Pagination-box">
        <button onClick={handlePrevPage}>prev page</button>

        <Pagination />
        <button onClick={handleNextPage}>Next page</button>
      </span>
    </div>
  );
};

export default Home;
