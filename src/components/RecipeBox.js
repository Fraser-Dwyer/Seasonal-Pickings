import "../styles/RecipeBox.css";

const RecipeBox = ({
  recipeName,
  recipeURL,
  recipeDesc,
  handleClick,
  numberOfRatings,
  numberOfStars,
}) => {
  return (
    <div className="recipeBox" onClick={handleClick}>
      <h2 className="recipeTitle">{recipeName}</h2>
      <div className="imageBox">
        <img className="recipeImage" src={recipeURL}></img>
      </div>
      <div className="para">
        <p>{recipeDesc}</p>
      </div>
      <div className="reviews">
        <h4>{numberOfRatings} Reviews</h4>
        <div className="sides">
          <h4>{numberOfStars} of 5.0 </h4>
          <img
            className="star"
            src="https://cdn-icons-png.flaticon.com/512/1828/1828961.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default RecipeBox;
