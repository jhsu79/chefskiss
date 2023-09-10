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
    <section className="restaurant-list">
      {restaurants.map((restaurantDetail, idx) => (
        <div className="restaurant-card" key={restaurantDetail._id}>
          <h3>{restaurantDetail.name}</h3>

          <p>
            <strong>Phone:</strong> {restaurantDetail.display_phone}
          </p>
          <p>
            <strong>Address:</strong> {restaurantDetail.display_address0 + "."}
            {" " + restaurantDetail.display_address1}
          </p>
          <p>
            <strong>Rating:</strong> {restaurantDetail.rating}
          </p>
          <p>
            <strong>Price:</strong> {restaurantDetail.price}
          </p>
          <a href={restaurantDetail.url} style={{ textDecoration: "none" }}>
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
            Remove Restaurant from list
          </button>
        </div>
      ))}
    </section>
  );
}

//Create a component for all RestaurantDetail and refactor props
