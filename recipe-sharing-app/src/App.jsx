import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <Router>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center" }}>Recipe Sharing App</h1>

        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
                <FavoritesList />
                <RecommendationsList />
              </>
            }
          />

          {/* RECIPE DETAILS PAGE */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
