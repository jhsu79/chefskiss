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
  const [display_address0, setDisplayAddress0] = useState("")
  const [display_address1, setDisplayAddress1] = useState("")
  const [url, setUrl] = useState("")
const navigate = useNavigate()
 
  useEffect(()=>{
    setName(searchResult.name)
    setCategories(searchResult.categories)
    setDisplayPhone(searchResult.display_phone)
    setDisplayAddress0(searchResult.location.display_address[0])
    setDisplayAddress1(searchResult.location.display_address[1])
    setUrl(searchResult.url)
}, [searchResult])
  
  
  async function saveRestaurant() {
    console.log({name, categories, display_phone})
    await createRestaurant({name, display_phone, url, display_address0, display_address1 });
    navigate("/");
  }


  // , categories, display_phone, display_address

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
      <p> Address: {searchResult.location.display_address[0] + "."}{" " + searchResult.location.display_address[1]}</p>


      {/* 
      <p>{searchResult.location.city}{searchResult.location.country}</p> */}
      <a href={searchResult.url}> See the Yelp Reviews </a>
      <button onClick={saveRestaurant}>Save this Restaurant</button>
    </div>
  );
}
