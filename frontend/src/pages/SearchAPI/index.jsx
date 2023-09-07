import { useState, useEffect } from "react";
import SearchResultsList from "./SearchResultsList";
import SearchAPIBar from "./SearchAPIBar";
import { getSearchResult } from "../../utilities/SearchAPI/search-service";
//add a spinner
//**************Need props * */
export default function Search() { //need restaurant props
  const [results, setResults] = useState([]);

  async function handleRequest() {
    console.log("hello")
    const searchResponse = await getSearchResult();
    if (searchResponse.length) {
      setResults(searchResponse);
      console.log(results)
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
