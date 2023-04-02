import useFetch from "./useFetch";
import "../styles/ReviewPage.css";
import { useNavigate } from "react-router-dom";

const ReviewPage = ({ recipeName, theDish }) => {
  const {
    content: allRecipes,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/reviews");

  const navigate = useNavigate();
  const backButton = () => {
    const url = "/recipes" + recipeName;
    navigate(url);
  };

  return (
    <div>
      <h1 className="main_title">{theDish}</h1>
      <div className="main_one">
        <img
          className="icon"
          src="https://cdn-icons-png.flaticon.com/512/709/709624.png"
          onClick={backButton}
        ></img>
        {allRecipes &&
          allRecipes
            .filter((thisReview) => thisReview.dish == recipeName)
            .map((review) => (
              <div className="review_container">
                <div className="review_top_box">
                  <h2 className="review_title">{review.title}</h2>
                  <p>{review.rating} of 5.0</p>
                  <img
                    className="review_star"
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828961.png"
                  ></img>
                </div>
                <p className="review_body">{review.main_body}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ReviewPage;
