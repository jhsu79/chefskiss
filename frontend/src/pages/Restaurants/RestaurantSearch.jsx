import {useState} from "react"
import "./RestaurantSearch.css"
import {createRestaurant} from "../../utilities/restaurant-service"
const initState = {
    location: "",
}

//What fields should we put into the init state on Line 4/9. What does the API Need? 

export default function NewRestaurantSearch({updateRestaurant}) {
    const [newSearch, setNewSearch] = useState(initState)

    async function handleSubmit(e){
        e.preventDefault() 
        console.log(newSearch)
        await createRestaurant(newSearch)
        updateRestaurant()
        setNewSearch(initState)
}
    function handleChange(e){
        const updatedQuery = {[e.target.location]: e.target.value}
        setNewSearch(updatedQuery)
    }
    
    return (
        <div className="searchbar">
            <form onSubmit={handleSubmit}>
                 <input type="text" placeholder='Enter a location (City, State, Country) to search for local restaurants in your area' value={newSearch.location} onChange={handleChange} required/>
                 <input type='submit' value="Search"/>
            </form>
            </div>
    )
}