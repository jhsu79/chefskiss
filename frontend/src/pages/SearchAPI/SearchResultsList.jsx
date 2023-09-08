import {useState} from "react"
import { useNavigate } from 'react-router-dom'
import {createRestaurant} from "../../utilities/restaurant/restaurant-service"

//create a useState or useContext to pull down the info from search-api. 

export default function SearchResultsList({ results }) {
  console.log({searchResultsList: results})
    // HERE's the submit function.... 
    // async function handleSubmit(e){
    //   e.preventDefault() 
    //   console.log(e.target.name)
    //   await createRestaurant({name, categories, display_phone, display_address})
    //   navigate('/')

    return (
      <section className="search-results-list">
        { results.businesses.map((business, idx) => {
          return (
          <div className="search-card" key={business._id}>
            <h3>Name: {business.name}</h3>
            <p> Categories: {business.categories}</p>
            <p> Phone: {business.display_phone}</p>
            <p> Address: {business.display_address}</p>
            <p> Link: {business.url}</p>
            {/* <form onSubmit={(e)=>handleSubmit(e)}>
              <input type='hidden' value={business.name}/>
              <input type='hidden' value={business.categories}/>
              <input type='hidden' value={business.display_phone}/>
              <input type='hidden' value={business.display_address}/>
              <input type='hidden' value={business.url}/>
              <button>Save<Submit> 
            </form> */}
          </div>)
        })}
      </section>
    );
  }
  