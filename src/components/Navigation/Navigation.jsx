import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const designList = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <header className={css.container}>
      <nav>
        <ul className={css.list}>
          <li>
            <NavLink className={designList} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={designList} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
