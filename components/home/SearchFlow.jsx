"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { searchPeople } from "../../lib/getGenomeBio";

export default function SearchFlow() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setIsLoading(true);
    setError(null);
    setResults([]);

    try {
      const data = await searchPeople(query);

      if (!data || data.length === 0) {
        setError(`No se encontraron usuarios con "${query}"`);
      } else {
        setResults(data);
      }
    } catch (err) {
      console.error("Error searching people:", err);
      setError("Error al buscar. Por favor intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} isLoading={isLoading} />
      <SearchResults results={results} isLoading={isLoading} error={error} />
    </>
  );
}
