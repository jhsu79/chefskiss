import {useState} from "react"
import { useNavigate } from 'react-router-dom'
import {createRestaurant} from "../../utilities/restaurant/restaurant-service"


export default function SearchResultsList({ results }) {
    // HERE's the submit function.... 
    // async function handleSubmit(e){
    //   e.preventDefault() 
    //   console.log(e.target.name)
    //   await createRestaurant({name, categories, display_phone, display_address})
    //   navigate('/')

    return (
      <section className="search-results-list">
        {results.map((result, idx) => (
      
          <div className="search-card" key={result._id}>
            <h3>Name: {result.name}</h3>
            <p> Categories: {result.categories}</p>
            <p> Phone: {result.display_phone}</p>
            <p> Address: {result.display_address}</p>
            <p> Link: {result.url}</p>
            {/* <form onSubmit={(e)=>handleSubmit(e)}>
              <input type='hidden' value={result.name}/>
              <input type='hidden' value={result.categories}/>
              <input type='hidden' value={result.display_phone}/>
              <input type='hidden' value={result.display_address}/>
              <input type='hidden' value={result.url}/>
              <button>Save<Submit> 
            </form> */}
          </div>
        ))}
      </section>
    );
  }
  