import "../styles/Recipes.css";
import RecipeBox from "./RecipeBox";
import useFetch from "../components/useFetch.js";
import { useNavigate } from "react-router-dom";
import { React, useRef } from "react";

const Recipes = () => {
  const navigate = useNavigate();
  let ref1 = useRef();
  let ref2 = useRef();

  const {
    content: allRecipes,
    isLoading,
    error,
  } = useFetch(
    "https://my-json-server.typicode.com/Fraser-Dwyer/seasonal-pickings-backend/recipes"
  );

  const handleClick = (url_suffix) => {
    const url = "/recipes" + url_suffix;
    navigate(url);
  };

  function handleNext() {
    ref1.current.scrollIntoView({ behavior: "smooth" });
  }

  function handlePrev() {
    ref2.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <h1 className="title">Recipes Page - Spring</h1>
      <img
        src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
        className="next_button"
        onClick={handleNext}
      ></img>
      <img
        src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
        className="prev_button"
        onClick={handlePrev}
      ></img>
      <div className="recipeContainer">
        <p className="end" ref={ref2}>
          s
        </p>
        {allRecipes &&
          allRecipes.map((recipe) => (
            <RecipeBox
              recipeName={recipe.recipe_name}
              recipeURL={recipe.recipe_url}
              recipeDesc={recipe.description}
              handleClick={() => handleClick(recipe.url_suffix)}
              numberOfRatings={recipe.numberOfRatings}
              numberOfStars={recipe.numberOfStars}
            />
          ))}
        <p className="end" ref={ref1}>
          e
        </p>
      </div>
    </div>
  );
};

export default Recipes;
