export default function SearchResultsList({ results }) {
    return (
      <section className="search-results-list">
        {results.map((result, idx) => (
          <div className="search-card" key={result._id}>
            <h3>{result.name}</h3>
            <p>Cuisine: {result.cuisine}</p>
            <p>Tel: {result.phoneNumber}</p>
            <p>Address: {result.address}</p>
            <p>Link: {result.restaurantLink}</p>
          </div>
        ))}
      </section>
    );
  }
  