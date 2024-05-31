import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../movies-list";
import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const openReviews = async () => {
      try {
        setLoader(true);

        const data = await getMovieReviews(movieId);
        setMovieReviews(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    openReviews();
  }, [movieId]);

  return (
    <ul className={css.container}>
      {loader && <Loader />}
      {movieReviews.length > 0 ? (
        movieReviews.map((list) => (
          <li key={list.id} className={css.reviewsList}>
            <h3 className={css.username}>{list.author_details.username}</h3>
            <p>{list.content}</p>
          </li>
        ))
      ) : (
        <li>
          <p className={css.notInfo}>Not info</p>
        </li>
      )}
    </ul>
  );
}
