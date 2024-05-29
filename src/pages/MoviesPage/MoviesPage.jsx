import { useEffect, useState } from "react";
import { getSearchMovies } from "../../movies-list";
import Search from "../../components/Search/Search";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [searchedMovies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const searchedMovies = await getSearchMovies(
          searchMovie || searchParams.get("query")
        );
        setMovies(searchedMovies.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [searchMovie, searchParams]);

  const handleSearch = async (topic) => {
    setSearchMovie(topic);
    searchParams.set("query", topic);
    setSearchParams(searchParams);
  };
  return (
    <div>
      <Search onSearch={handleSearch} />
      {searchedMovies.length > 0 && <MovieList data={searchedMovies} />}
    </div>
  );
}
