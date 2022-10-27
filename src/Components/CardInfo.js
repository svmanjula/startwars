import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { Context } from '../Context'

const CardInfo = () => {
    const [movieTitle, setMovieTitle] = useState([])
    const {content} = useContext(Context)

    useEffect(() => {
      axios
        .get(content.films)
        .then((response) => setMovieTitle(response.data.title));

    }, []);
  return (
    <div>
      {content &&
        content.map((data) => {
          return <h2> {data.films} </h2>;
        })}
    </div>
  );
}

export default CardInfo