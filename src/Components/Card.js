import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

const Card = () => {
  const { contents, handleFav } = useContext(Context);
  return (
    <div>
      <div className="card-container">
        {contents.map((content, i) => {
          return (
            <div className="card" key={i}>
              <div className="card-fav" onClick={() => handleFav(content)}>
                <FaRegHeart />
              </div>

              <div className="card-name">{content.name}</div>
              <Link to="/" className="card-details">
                More details
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
