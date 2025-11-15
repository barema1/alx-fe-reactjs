import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{ padding: "16px" }}>
      {recipes.length === 0 && <p>No recipes yet.</p>}

      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #ddd",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "6px"
          }}
        >
          <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: "none" }}>
            <h3 style={{ margin: 0 }}>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
