import { useState } from "react";
import SearchResultsList from "./SearchResultsList";
import SearchAPIBar from "./SearchAPIBar";
//add a spinner

export default function Search() {
  const [results, setResults] = useState({businesses:[]});
  

  return (
    <div className="search">
      <SearchAPIBar setResults={setResults}/>
      <SearchResultsList results={results} />
    </div>
  );
}
