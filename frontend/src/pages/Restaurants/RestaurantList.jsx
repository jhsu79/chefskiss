import "./RestaurantList.css";
import { addImpression, deleteRestaurant } from "../../utilities/restaurant/restaurant-service";
import { useNavigate } from "react-router-dom";
import { useState } from "react"



export default function RestaurantList({ restaurants }) {
  const [newInput, setNewInput] = useState("")  

  const navigate = useNavigate();
  
 function handleChange(e) {
    e.preventDefault()
    console.log(e)
    setNewInput(e.currentTarget.value)
  }

  async function handleAdd(e){
    e.preventDefault()
    await addImpression(newInput, e.target.hidden.value)
     }


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
      <div className="restaurant-list">
        {restaurants.map((restaurantDetail) => (
          <div className="restaurant-card" key={restaurantDetail._id}>
            <h3>{restaurantDetail.name}</h3>
            <p>
              <strong>
                Phone:<br></br>
              </strong>{" "}
              {restaurantDetail.display_phone}
            </p>
            <p>
              <strong>
                Address:<br></br>
              </strong>{" "}
              {restaurantDetail.display_address0 + "."}
              <br />
              {" " + restaurantDetail.display_address1}
            </p>
            <p>
              <strong>Your Impressions:</strong>{" "}
                <div className='your-impressions'>{restaurantDetail.impression ? restaurantDetail.impression.impression : 
                <form onSubmit={(e)=>handleAdd(e)}>
                <input name="impression" onChange={handleChange}  type="text" placeholder="Enter your impressions" required/> 
                <input type="hidden" name="hidden" value={restaurantDetail._id}/></form>}           
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
              style={{ textDecoration: "none" }}>
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
    </section>
  );
}

//Create a component for all RestaurantDetail and refactor props
