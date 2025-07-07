import { useState } from "react";
import { fetchShows } from "../api/show.api";

export const useMazeSearch = () => {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (query: string) => {
    if (!query) return;

    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const data = await fetchShows(query);
      setResults(data);
    } catch (err) {
      setError("Errore nel recupero dei dati.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, error, search };
};
