import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ data }) {
  const location = useLocation();

  return (
    <div>
      <ul className={css.container}>
        {data.map((dataMovie) => (
          <li key={dataMovie.id} className={css.list}>
            <img
              className={css.img}
              src={`https://image.tmdb.org/t/p/w500${dataMovie.poster_path}`}
              alt={dataMovie.title}
            />
            <p className={css.text}>
              <Link to={`/movies/${dataMovie.id}`} state={location}>
                {dataMovie.title}
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
