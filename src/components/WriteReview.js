import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/WriteReview.css";
import useFetch from "./useFetch";

import { useRef } from "react";

const WriteReview = () => {
  const navigate = useNavigate();
  const backButton = () => {
    navigate("/recipes");
  };

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState("");
  const [recipePicked, setRecipePicked] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(body);
    console.log(rating);
    console.log(recipePicked);
    const id = allReviews.length;
    const newReview = {
      id,
      dish: recipePicked,
      rating: rating,
      title: title,
      main_body: body,
    };
    fetch("http://localhost:8000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    }).then(() => {
      console.log("Review Posted");
      const goTo = "/review-page" + recipePicked;
      navigate(goTo);
    });
  };
  function handleChange(event) {
    setRecipePicked(event.target.value);
  }

  const {
    content: allReviews,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/reviews");

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
            <select value={recipePicked} onChange={handleChange}>
              <option value="/vegetable-soup">Vegetable Soup</option>
              <option value="/lentil-salad">Lentil Salad</option>
              <option value="/veggie-pasta">Veggie Pasta</option>
              <option value="/spinach-lemon-risotto">
                Spinach Lemon Risotto
              </option>
            </select>
          </div>

          <div className="review_title">
            <h2>Review:</h2>
            <label htmlFor="Review body:"></label>
            <textarea
              type="text"
              title="Review body"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <div className="review_title">
            <h2>Rating:</h2>
            <label htmlFor="Rating:"></label>
            <input
              type="text"
              title="Rating"
              required
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <div className="submit">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteReview;
