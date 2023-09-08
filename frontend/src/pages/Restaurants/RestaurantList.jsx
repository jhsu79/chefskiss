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

          <p>Phone: {restaurantDetail.display_phone}</p>
          <p>
            Address: {restaurantDetail.display_address0 + "."}
            {" " + restaurantDetail.display_address1}
          </p>
          <p> Rating: {restaurantDetail.rating}</p>
          <p> Price: {restaurantDetail.price}</p>
          <a href={restaurantDetail.url}>See Yelp Reviews</a>
          <button
            className="button"
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