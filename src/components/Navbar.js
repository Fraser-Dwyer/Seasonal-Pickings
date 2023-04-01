import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [gameSelected, setGameSelected] = useState("selected");
  const [recipeSelected, setRecipeSelected] = useState("links");
  const [aboutSelected, setAboutSelected] = useState("links");

  const selectRecipe = () => {
    setRecipeSelected("selected");
    setGameSelected("links");
    setAboutSelected("links");
  };

  const selectGame = () => {
    setRecipeSelected("links");
    setGameSelected("selected");
    setAboutSelected("links");
  };

  const selectAbout = () => {
    setRecipeSelected("links");
    setGameSelected("links");
    setAboutSelected("selected");
  };

  return (
    <div>
      <div className="navbar">
        <div className="newTop">
          <div className="topbar">
            <h1>Seasonal Pickings</h1>
            <h3>Educating Bath's children to love locally-sourced foods</h3>
          </div>
          <img className="logo" src="/images/logo.png"></img>
        </div>
        <div className="allLinks">
          <Link className={gameSelected} onClick={selectGame} to="/">
            Game
          </Link>
          <Link className={recipeSelected} onClick={selectRecipe} to="/recipes">
            Recipes
          </Link>
          <Link
            className={aboutSelected}
            onClick={selectAbout}
            to="/local-vendors"
          >
            Local Vendors
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
