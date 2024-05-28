import { Link, useLocation } from "react-router-dom";

export default function MovieList({ data }) {
  const location = useLocation();

  return (
    <div>
      <ul>
        {data.map((dataMovie) => (
          <li key={dataMovie.id}>
            <Link to={`/movies/${dataMovie.id}`} state={location}>
              {dataMovie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
