import { useState } from "react";
import { useMazeSearch } from "../../hooks/useSearchShow";
import Loading from "./Loading";
import SearchCard from "./SearchCard";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { results, loading, error, search } = useMazeSearch();

  const handleSubmit = (e: any) => {
    e.preventDefault(); //* eliminare comportamento default
    search(query);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            handleSubmit(e);
          }}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading && <Loading />}

      <ul>
        {results.map((item) => (
          <SearchCard show={item.show} />
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
