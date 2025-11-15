import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

function RecipeList() {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);

  const listToDisplay =
    filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      {listToDisplay.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: "20px" }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>

          {/* link to details */}
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
