import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

function FavoritesList() {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favoriteRecipes = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter((r) => r !== undefined);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>My Favorites</h2>

      {favoriteRecipes.length === 0 && <p>No favorites yet.</p>}

      {favoriteRecipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: "20px" }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default FavoritesList;
