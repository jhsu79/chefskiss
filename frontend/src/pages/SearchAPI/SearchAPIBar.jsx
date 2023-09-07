import { useState } from "react";
import { createSearchResultsList } from "../../utilities/SearchAPI/search-service";
const initState = {
  location: "",
};

export default function SearchAPIBar() {
  const [newSearch, setNewSearch] = useState(initState);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(newSearch);
    await createSearchResultsList(newSearch);
    setNewSearch(initState);
  }
  function handleChange(e) {
    const updatedQuery = { [e.target.name]: e.target.value };
    console.log(e.target)
    console.log(updatedQuery);
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

//maybe an input type component?
