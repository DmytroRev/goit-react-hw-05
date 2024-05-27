import { Route, Routes } from "react-router-dom";
import moviesList from "../../movies-list";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";

export default function App() {
  return (
    <>
      <Navigation />
      <HomePage />
    </>
    // <Routes>

    // </Routes>);
  );
}
