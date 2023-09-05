export default function RestaurantList({ restaurants }) {
  return (
    <section className="restaurant-list">
      {restaurants.map((restaurant, idx) => (
        <div className="restaurant-card" key={restaurant._id}>
          <h3>{restaurant.name}</h3>
          <p>Cuisine: {restaurant.cuisine}</p>
          <p>Tel: {restaurant.phoneNumber}</p>
          <p>Address: {restaurant.address}</p>
          <p>Link: {restaurant.restaurantLink}</p>
        </div>
      ))}
    </section>
  );
}
