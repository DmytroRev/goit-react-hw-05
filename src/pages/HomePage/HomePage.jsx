import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../movies-list";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
    const fetchTrendingList = async () => {
      try {
        const moviesData = await getTrendingMovies();
        setTrendingMovie(moviesData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendingList();
  }, []);
  return (
    <div>
      <h2>Trending Today</h2>
      {<MovieList data={trendingMovie} />}
    </div>
  );
}
