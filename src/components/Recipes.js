import "../styles/Recipes.css";
import RecipeBox from "./RecipeBox";
import useFetch from "../components/useFetch.js";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const navigate = useNavigate();

  const {
    content: allRecipes,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/recipes");

  const handleClick = (url_suffix) => {
    const url = "/recipes" + url_suffix;
    navigate(url);
  };

  return (
    <div>
      <h1 className="title">Recipes Page - Spring</h1>
      <div className="recipeContainer">
        {allRecipes &&
          allRecipes.map((recipe) => (
            <RecipeBox
              recipeName={recipe.recipe_name}
              recipeURL={recipe.recipe_url}
              recipeDesc={recipe.description}
              handleClick={() => handleClick(recipe.url_suffix)}
            />
          ))}
      </div>
    </div>
  );
};

export default Recipes;
