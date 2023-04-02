import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/WriteReview.css";

import { useRef } from "react";

const WriteReview = () => {
  const navigate = useNavigate();
  const backButton = () => {
    navigate("/recipes");
  };

  const [title, setTitle] = useState("");
  const [recipePicked, setRecipePicked] = useState();
  const recipeInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit form now");
  };

  return (
    <div>
      <img
        className="icon"
        src="https://cdn-icons-png.flaticon.com/512/709/709624.png"
        onClick={backButton}
      ></img>
      <div className="review">
        <h1>Write a review</h1>
        <form onSubmit={handleSubmit}>
          <div className="review_title">
            <h2>Review Title:</h2>
            <label htmlFor="Review title:"></label>
            <input
              type="text"
              title="Review title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="review_title">
            <h2>Select Recipe:</h2>
            <label htmlFor="dropdownRecipes"></label>
            <select value={recipePicked}>
              <option value="A">Vegetable Soup</option>
              <option value="B">Lentil Soup</option>
              <option value="C">Veggie Pasta</option>
              <option value="D">Spinach Lemon Risotto</option>
            </select>
          </div>

          <div className="review_title">
            <h2>Review:</h2>
            <label htmlFor="Review body:"></label>
            <textarea
              type="text"
              title="Review body"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="review_title">
            <h2>Rating:</h2>
            <label htmlFor="Rating:"></label>
            <input
              type="text"
              title="Rating"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="submit">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteReview;
