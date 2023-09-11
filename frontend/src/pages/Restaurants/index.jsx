import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import { getRestaurant } from "../../utilities/restaurant/restaurant-service";

export default function Restaurants(props) {
  const [restaurant, setRestaurant] = useState([]);

  async function handleRequest() {
    const restaurantResponse = await getRestaurant();

    if (restaurantResponse.length) {
      setRestaurant(restaurantResponse);
    } else {
    }
  }

  useEffect(() => {
    handleRequest();
  }, []);

  return (
    <div className="restaurants">
      <RestaurantList restaurants={restaurant} />
    </div>
  );
}
