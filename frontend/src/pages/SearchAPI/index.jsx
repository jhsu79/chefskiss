import { useState, useEffect } from "react";
import SearchResultsList from "./SearchResultsList";
import SearchAPIBar from "./SearchAPIBar";
import { getSearchRestaurant } from "../../utilities/SearchAPI/search-service";

export default function Search() {
  const [results, setResults] = useState([]);

  async function handleRequest() {
    const searchResponse = await getSearchRestaurant();

    if (searchResponse.length) {
      setResults(searchResponse);
    } else {
      console.log(searchResponse);
    }
  }
  useEffect(() => {}, []);

  return (
    <div className="search">
      <SearchAPIBar updateSearch={handleRequest} />
      <SearchResultsList results={results} />
    </div>
  );
}
