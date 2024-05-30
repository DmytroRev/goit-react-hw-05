import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../movies-list";
import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";

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
    <ul>
      {loader && <Loader />}
      {movieReviews.length > 0 &&
        movieReviews.map((list) => (
          <li key={list.id}>
            <h3>{list.author_details.username}</h3>
            <p>{list.content}</p>
          </li>
        ))}
    </ul>
  );
}
