import { useEffect, useState } from "react";
import { getMovieCast } from "../../movies-list";
import { useParams } from "react-router-dom";
import logo from "../../images/logo.png";
import { Loader } from "../Loader/Loader";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const openCast = async () => {
      try {
        setLoader(true);
        const data = await getMovieCast(movieId);
        setMovieCast(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    openCast();
  }, [movieId]);

  return (
    <div>
      <ul className={css.container}>
        {loader && <Loader />}
        {movieCast.length > 0 &&
          movieCast.map((list) => (
            <li key={list.id} className={css.list}>
              <img
                className={css.img}
                src={
                  list.profile_path
                    ? `https://image.tmdb.org/t/p/w500${list.profile_path}`
                    : logo
                }
                alt={list.name}
                style={{ width: 200 }}
              />
              <div className={css.containerText}>
                <p className={css.text}>{list.character}</p>
                <p className={css.text}>{list.original_name}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
