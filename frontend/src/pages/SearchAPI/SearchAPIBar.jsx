import {useState} from "react"
import {createSearchResultsList} from "../../utilities/SearchAPI/search-service"
const initState = {
    location: "",
}

export default function SearchAPIBar({updateSearchResultsList}) {
    const [newSearch, setNewSearch] = useState(initState)

    async function handleSubmit(e){
        e.preventDefault() 
        console.log(newSearch)
        await createSearchResultsList(newSearch)
        updateSearchResultsList()
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