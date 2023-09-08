import SearchResult from "./SearchResult";


export default function SearchResultsList({ results }) {
  console.log({ searchResultsList: results });

  return (
    <section className="search-results-list">
      {results.businesses.map((business, idx) => {
        return <SearchResult searchResult={business} idx={idx}/>;
      })}
    </section>
  );
}


