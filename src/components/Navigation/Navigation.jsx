import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
export default function Navigation() {
  return (
    <nav>
      <ul className={css.container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
}
