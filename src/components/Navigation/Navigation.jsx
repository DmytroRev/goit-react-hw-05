import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
}
