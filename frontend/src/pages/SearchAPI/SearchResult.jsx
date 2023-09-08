import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createRestaurant } from "../../utilities/restaurant/restaurant-service";

export default function SearchResult({ searchResult, idx }) {
  // const [address1, address2] = searchResult.location.display_address
  // console.log('hello world')
  // console.log({address1, address2})
  const [name, setName] = useState("")
  const [categories, setCategories] = useState([])
  const [display_phone, setDisplayPhone] = useState("")
  const [display_address, setDisplayAddress] = useState("")
  
 
  useEffect(()=>{
    setName(searchResult.name)
    setCategories(searchResult.categories)
    setDisplayPhone(searchResult.display_phone)
    setDisplayAddress(searchResult.display_address)

}, [searchResult])
  
  
  async function saveRestaurant() {
    await createRestaurant({
      name,
      categories,
      display_phone,
      display_address,
    });
    navigate("/");
  }

  return (
    <div className="search-card" key={`searchResults-${idx}`}>
      <h3>Name: {searchResult.name}</h3>
      <p>
        {" "}
        Categories:{" "}
        {searchResult.categories.map((category) => {
          return <>{" " + category.title + ","}</>;
        })}
      </p>
      <p> Phone: {searchResult.display_phone}</p>
      {/* <p> Address: {searchResult.location.display_address[0]}</p>
      <p>{searchResult.location.display_address[1]}</p> */}
      <a href={searchResult.url}> Yelp Reviews </a>
      <button onClick={saveRestaurant}>Save this Restaurant</button>
    </div>
  );
}
