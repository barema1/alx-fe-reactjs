import { useRecipeStore } from "./recipeStore";
import { useParams } from "react-router-dom";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

function RecipeDetails() {
  const { id } = useParams();
  const recipeId = Number(id);

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  if (!recipe) return <p>Recipe not found.</p>;

  const isFavorite = favorites.includes(recipeId);

  function toggleFavorite() {
    if (isFavorite) removeFavorite(recipeId);
    else addFavorite(recipeId);

    generateRecommendations();
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <button onClick={toggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipeId} />
    </div>
  );
}

export default RecipeDetails;
