import { useState } from "react";
import { getSearchResultsList } from "../../utilities/SearchAPI/search-service";
const initState = {
  location: "",
};

export default function SearchAPIBar({ setResults }) {
  const [newSearch, setNewSearch] = useState(initState);

  async function handleSubmit(e) {
    e.preventDefault();
    const results = await getSearchResultsList(newSearch);
    if (results.businesses) {
      setResults(results);
    }
    setNewSearch(initState);
  }
  function handleChange(e) {
    const updatedQuery = { [e.target.name]: e.target.value };
    setNewSearch(updatedQuery);
  }

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a location (City, State, Country) to search for local restaurants in your area"
          value={newSearch.location}
          name="location"
          onChange={handleChange}
          required
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

//Add a loading state and add spinner
