import { useEffect, useState } from "react";
import { getMovieCast } from "../../movies-list";
import { useParams } from "react-router-dom";
import logo from "../../images/logo.png";

export default function MovieCast() {
  const { castId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    console.log(`Current castId: ${castId}`);
    const openCast = async () => {
      try {
        const data = await getMovieCast(castId);
        setMovieCast(data);
      } catch (error) {
        console.log(error);
      }
    };
    openCast();
  }, [castId]);
  return (
    <ul>
      {movieCast.length > 0 &&
        movieCast.map((list) => {
          <li key={list.id}>
            <img
              src={
                list.profile_path
                  ? `https://image.tmdb.org/t/p/w500${list.profile_path}`
                  : logo
              }
              alt={list.name}
            />
          </li>;
        })}
    </ul>
  );
}
