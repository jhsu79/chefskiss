import "./SearchResult.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createRestaurant } from "../../utilities/restaurant/restaurant-service";

export default function SearchResult({ searchResult, idx }) {
  const [name, setName] = useState("");
  const [display_phone, setDisplayPhone] = useState("");
  const [display_address0, setDisplayAddress0] = useState("");
  const [display_address1, setDisplayAddress1] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState();
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setName(searchResult.name);
    setDisplayPhone(searchResult.display_phone);
    setDisplayAddress0(searchResult.location.display_address[0]);
    setDisplayAddress1(searchResult.location.display_address[1]);
    setUrl(searchResult.url);
    setRating(searchResult.rating);
    setPrice(searchResult.price);
  }, [searchResult]);

  async function saveRestaurant() {
    await createRestaurant({
      name,
      display_phone,
      url,
      display_address0,
      display_address1,
      rating,
      price,
    });
    navigate("/");
  }

  return (
    <div className="search-results-container">
      <div className="restaurant-card search-card" key={`searchResults-${idx}`}>
        <h3>Name: {searchResult.name}</h3>
        <p>
          <strong>
            Categories:
            <br />
          </strong>{" "}
          {searchResult.categories.map((category, idx) => (
            <span key={idx}>
              {" "}
              {category.title}
              {idx < searchResult.categories.length - 1 ? "," : ""}{" "}
            </span>
          ))}
        </p>
        <p>
          <strong>
            Phone:
            <br />
          </strong>{" "}
          {searchResult.display_phone}
        </p>
        <p>
          <strong>
            Address:
            <br />
          </strong>
          {searchResult.location.display_address[0] + "."}
          {" " + searchResult.location.display_address[1]}
        </p>
        <p>
          <strong>Rating:</strong> {searchResult.rating} ⭐️{" "}
        </p>
        <p>
          <strong>Price:</strong> {searchResult.price}
        </p>
        <a
          className="review"
          href={searchResult.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Yelp Reviews</strong>
        </a>
        <br />
        <button className="save-button" onClick={saveRestaurant}>
          Save Restaurant
        </button>
      </div>
    </div>
  );
}
