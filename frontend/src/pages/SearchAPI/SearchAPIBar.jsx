import { useState } from "react";
import { getSearchResultsList } from "../../utilities/SearchAPI/search-service";
import "./SearchAPIBar.css";

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
    const updatedQuery = { ...newSearch, [e.target.name]: e.target.value };
    setNewSearch(updatedQuery);
  }

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a location (City, State, Country)"
          value={newSearch.location}
          name="location"
          onChange={handleChange}
          required
          className="searchbar-input"
        />
        <button type="submit" className="searchbar-submit">Feeling Hungry!</button>
      </form>
    </div>
  );
}

//Add a loading state and add spinner
