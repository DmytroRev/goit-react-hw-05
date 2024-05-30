import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovieDetails } from "../../movies-list";
import { Suspense, useEffect, useRef, useState } from "react";
import { Loader } from "../../components/Loader/Loader";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const backToPage = useRef(location.state ?? "/movies/");

  useEffect(() => {
    const openDetails = async () => {
      try {
        setLoader(true);
        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    openDetails();
  }, [movieId]);

  return (
    <div>
      {loader && <Loader />}
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
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
