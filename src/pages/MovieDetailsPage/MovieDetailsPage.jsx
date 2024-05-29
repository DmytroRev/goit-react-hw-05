import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovieDetails } from "../../movies-list";
import { useEffect, useRef, useState } from "react";
// import MovieCast from "../../components/MovieCast/MovieCast";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backToPage = useRef(location.state ?? "/movies/");

  useEffect(() => {
    const openDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    openDetails();
  }, [movieId]);

  return (
    <div>
      <p>
        <Link to={backToPage.current}>Go back</Link>
      </p>
      {movieDetails !== null && (
        <section>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={`poster ${movieDetails.title}`}
          />
          <div>
            <h3>{movieDetails.title}</h3>
            {movieDetails.tagline && <p>{movieDetails.tagline}</p>}
          </div>
          <ul>
            <li>
              <h4>Year</h4>
              <p>{movieDetails.release_date}</p>
            </li>
            <li>
              <h4>Overview</h4>
              <p>{movieDetails.overview}</p>
            </li>
            <li>
              <h4>Genres</h4>
              <ul>
                {movieDetails.genres.map((genresMovie) => (
                  <li key={genresMovie.id}>{genresMovie.name}</li>
                ))}
              </ul>
            </li>
          </ul>
        </section>
      )}
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink>Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
