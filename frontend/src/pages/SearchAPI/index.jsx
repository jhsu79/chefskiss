import { useState, useEffect } from "react";
import SearchResultsList from "./SearchResultsList";
import SearchAPIBar from "./SearchAPIBar";
import { getSearchResult } from "../../utilities/SearchAPI/search-service";
//add a spinner

export default function Search() {
  const [results, setResults] = useState([]);

  async function handleRequest() {
    const searchResponse = await getSearchResult();
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
