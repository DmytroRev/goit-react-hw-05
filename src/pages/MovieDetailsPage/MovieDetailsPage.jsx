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
import css from "./MovieDetailsPage.module.css";

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
    <div className={css.container}>
      {loader && <Loader />}
      <button className={css.goBack}>
        <Link to={backToPage.current}>Go back</Link>
      </button>
      {movieDetails !== null && (
        <section className={css.section}>
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={`poster ${movieDetails.title}`}
          />
          <div className={css.list}>
            <h3 className={css.titleName}>{movieDetails.title}</h3>
            {movieDetails.tagline && (
              <p className={css.text}>{movieDetails.tagline}</p>
            )}

            <ul>
              <li className={css.listDesign}>
                <h4 className={css.title}>Year:</h4>
                <p className={css.text}>{movieDetails.release_date}</p>
              </li>
              <li className={css.listDesign}>
                <h4 className={css.title}>Overview:</h4>
                <p className={css.text}>{movieDetails.overview}</p>
              </li>
              <li className={css.listDesign}>
                <h4 className={css.title}>Genres:</h4>
                <ul>
                  {movieDetails.genres.map((genresMovie) => (
                    <li className={css.textList} key={genresMovie.id}>
                      {genresMovie.name}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
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
