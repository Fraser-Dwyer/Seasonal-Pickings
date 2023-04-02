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
              <div className="both_sides">
                <div className="left_side">
                  <h3 className="method_title">Method - (Serves 4)</h3>
                  <div className="method_steps">
                    <ul>
                      {filteredRecipe.method.map((step) => (
                        <li>{step}</li>
                      ))}
                    </ul>
                  </div>
                  <button>Review Recipe</button>
                  <button
                    onClick={() => {
                      const url = "/review-page" + recipe;
                      navigate(url);
                    }}
                  >
                    Read Reviews
                  </button>
                </div>
                <div className="right_side">
                  <div className="img_container">
                    <img
                      className="recipe_img"
                      src={filteredRecipe.recipe_url}
                    ></img>
                  </div>
                  <h3 className="ingredients_title">Ingredients</h3>
                  <div className="ingredients">
                    {filteredRecipe.ingredients_all.map((ingredient) => (
                      <li>{ingredient}</li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default IndividualRecipe;
