import "../styles/RecipeBox.css";

const RecipeBox = ({ recipeName, recipeURL, recipeDesc, handleClick }) => {
  return (
    <div className="recipeBox" onClick={handleClick}>
      <h2 className="recipeTitle">{recipeName}</h2>
      <div className="imageBox">
        <img className="recipeImage" src={recipeURL}></img>
      </div>
      <div className="para">
        <p>{recipeDesc}</p>
      </div>
    </div>
  );
};

export default RecipeBox;
