import "./RestaurantList.css";
import { deleteRestaurant } from "../../utilities/restaurant/restaurant-service";
import { useNavigate } from "react-router-dom";

export default function RestaurantList({ restaurants }) {
  const navigate = useNavigate();

  async function handleDelete(id) {
    try {
      console.log(id);
      const deleteResponse = await deleteRestaurant(id).then(navigate(0));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <h1 className="Rest-list-head">Your Restaurants</h1>
      {restaurants.length === 0 ? (
        <p className="search-message">Search to add and save your favorite restaurants here!</p>
      ) : (
        <div className="restaurant-list">
          {restaurants.map((restaurantDetail, idx) => (
            <div className="restaurant-card" key={restaurantDetail._id}>
              <h3>{restaurantDetail.name}</h3>
              <p>
                <strong>
                  Phone:<br />
                </strong>{" "}
                {restaurantDetail.display_phone}
              </p>
              <p>
                <strong>
                  Address:<br />
                </strong>{" "}
                {restaurantDetail.display_address0 + "."}
                <br />
                {" " + restaurantDetail.display_address1}
              </p>
              <p>
                <strong>Your Impressions:</strong>{" "}
                <div className="your-impressions">
                <br />
                  {restaurantDetail.impression 
                    ? restaurantDetail.impression.impression 
                    : <button className="delete button">Add Impression</button>
                  }
                </div>
              </p>
              <p>
                <strong>Rating:</strong> {restaurantDetail.rating} ⭐️
              </p>
              <p>
                <strong>Price:</strong> {restaurantDetail.price}
              </p>
              <a
                className="review"
                href={restaurantDetail.url}
                style={{ textDecoration: "none" }}
              >
                <strong>Yelp Reviews</strong>
              </a>
              <br />
              <br />
              <button
                className="delete button"
                onClick={() => {
                  handleDelete(restaurantDetail._id);
                }}
              >
                Remove Restaurant
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

//Create a component for all RestaurantDetail and refactor props
