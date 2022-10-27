import React from "react";
import { AiFillHeart } from "react-icons/ai";

import { Link } from "react-router-dom";
import Header from "./Header";

const Fav = () => {
  const favDataFromLocal = JSON.parse(localStorage.getItem("favData"));
  return (
    <>
    
      <Header />
      <div className="card-container">
        {favDataFromLocal &&
          favDataFromLocal.map((content) => {
            return (
              <div className="card">
                <div className="card-fav">
                  <AiFillHeart style={{ color: "red" }} />
                </div>

                <div className="card-name">{content.name}</div>
                <Link to="/details" className="card-details">
                  More details
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Fav;
