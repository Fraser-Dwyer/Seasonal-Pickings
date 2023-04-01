import "../styles/IndividualRecipe.css";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const IndividualRecipe = ({ recipe }) => {
  const navigate = useNavigate();
  const backButton = () => {
    navigate("/recipes");
  };

  const {
    content: allRecipes,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/recipes");

  return (
    <div>
      <img
        className="icon"
        src="https://cdn-icons-png.flaticon.com/512/709/709624.png"
        onClick={backButton}
      ></img>
      {allRecipes &&
        allRecipes
          .filter((aRecipe) => aRecipe.url_suffix == recipe)
          .map((filteredRecipe) => (
            <div>
              <h1 className="recipe_title">{filteredRecipe.recipe_name}</h1>
              <h3 className="recipe_desc">{filteredRecipe.description}</h3>
              <img src={filteredRecipe.recipe_url}></img>
              <div>
                {filteredRecipe.ingredients_all.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </div>
              <div>
                {filteredRecipe.method.map((step) => (
                  <li>{step}</li>
                ))}
              </div>
            </div>
          ))}
    </div>
  );
};

export default IndividualRecipe;
