import { useState } from "react";
import SearchResultsList from "./SearchResultsList";
import SearchAPIBar from "./SearchAPIBar";

export default function Search() {
  const [results, setResults] = useState({ businesses: [] });

  return (
    <div className="search">
      <SearchAPIBar setResults={setResults} />
      <SearchResultsList results={results} />
    </div>
  );
}

//Set a loading state and add spinner
