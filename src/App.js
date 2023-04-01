import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutFarms from "./components/AboutFarms";
import Recipes from "./components/Recipes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndividualRecipe from "./components/IndividualRecipe";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/about-farms" element={<AboutFarms />} />
            <Route
              path="/vegetable-soup"
              element={<IndividualRecipe recipe="/vegetable-soup" />}
            />
            <Route
              path="/lentil-salad"
              element={<IndividualRecipe recipe="/lentil-salad" />}
            />
            <Route
              path="/veggie-pasta"
              element={<IndividualRecipe recipe="/veggie-pasta" />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
