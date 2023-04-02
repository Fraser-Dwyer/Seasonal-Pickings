import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutFarms from "./components/AboutFarms";
import Recipes from "./components/Recipes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndividualRecipe from "./components/IndividualRecipe";
import IndividualFarm from "./components/IndividualFarm";
import ReviewPage from "./components/ReviewPage";
import WriteReview from "./components/WriteReview";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />

            <Route
              path="recipes/vegetable-soup"
              element={<IndividualRecipe recipe="/vegetable-soup" />}
            />
            <Route
              path="recipes/lentil-salad"
              element={<IndividualRecipe recipe="/lentil-salad" />}
            />
            <Route
              path="recipes/spinach-lemon-risotto"
              element={<IndividualRecipe recipe="/spinach-lemon-risotto" />}
            />
            <Route
              path="recipes/veggie-pasta"
              element={<IndividualRecipe recipe="/veggie-pasta" />}
            />
            <Route
              exact
              path="local-vendors/penhill-produce"
              element={<IndividualFarm farm="penhill-produce" />}
            />
            <Route
              exact
              path="local-vendors/bath-city-farm"
              element={<IndividualFarm farm="bath-city-farm" />}
            />
            <Route
              exact
              path="local-vendors/bath-organic-group"
              element={<IndividualFarm farm="bath-organic-group" />}
            />
            <Route path="/local-vendors" element={<AboutFarms />} />
            <Route
              path="/review-page/spinach-lemon-risotto"
              element={
                <ReviewPage
                  recipeName={"/spinach-lemon-risotto"}
                  theDish="Spinach Lemon Risotto"
                />
              }
            />
            <Route
              path="/review-page/vegetable-soup"
              element={
                <ReviewPage
                  recipeName={"/vegetable-soup"}
                  theDish="Vegetable Soup"
                />
              }
            />
            <Route
              path="/review-page/lentil-salad"
              element={
                <ReviewPage
                  recipeName={"/lentil-salad"}
                  theDish="Lentil Salad"
                />
              }
            />
            <Route
              path="/review-page/veggie-pasta"
              element={
                <ReviewPage
                  recipeName={"/veggie-pasta"}
                  theDish="Veggie Pasta"
                />
              }
            />
            <Route path="/review-page/write-review" element={<WriteReview />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
