import { useState, useEffect } from "react";
import type { product } from "../../models/product.model";
import { searchProductsByName } from "../../api/products.api";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<product[]>([]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    searchProductsByName(query).then(setResults);
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cerca prodotto..."
      />
      <div className="search-box">
        {results.map((product) => (
          <div key={product.id} className="box product">
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <p>{product.price} $</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
