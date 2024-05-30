import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../movies-list";
import MovieList from "../../components/MovieList/MovieList";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

export default function HomePage() {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchTrendingList = async () => {
      try {
        setIsError(false);
        const moviesData = await getTrendingMovies();
        setTrendingMovie(moviesData);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsError(false);
      }
    };

    fetchTrendingList();
  }, []);
  return (
    <div>
      <h2>Trending Today</h2>
      {<MovieList data={trendingMovie} />}
      {isError && <ErrorMessage />}
    </div>
  );
}
