export default function RestaurantList({ restaurants }) {
  return (
    <section className="restaurant-list">
      {restaurants.map((restaurant, idx) => (
        <div className="restaurant-card" key={restaurant._id}>
          <h3>{restaurant.name}</h3>
          {/* <p>Categories: {restaurant.categories}</p> */}
          <p>Phone: {restaurant.display_phone}</p>
          <p>
            Address: {restaurant.display_address0 + "."}
            {" " + restaurant.display_address1}
            </p>
          <a href={restaurant.url}>See Yelp Reviews</a>
        </div>
      ))}
    </section>
  );
}
