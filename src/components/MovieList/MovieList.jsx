import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
import poster from "../../images/poster.jpg";

export default function MovieList({ data }) {
  const location = useLocation();

  return (
    <div>
      <ul className={css.container}>
        {data.map((dataMovie) => (
          <li key={dataMovie.id} className={css.list}>
            <Link to={`/movies/${dataMovie.id}`} state={location}>
              <img
                className={css.img}
                src={
                  dataMovie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${dataMovie.poster_path}`
                    : poster
                }
                alt={dataMovie.title}
              />
              <p className={css.text}>{dataMovie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
