import { useRecipeStore } from "./recipeStore";

function RecommendationsList() {
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Recommended For You</h2>

      {recommendations.length === 0 && <p>No recommendations yet.</p>}

      {recommendations.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: "20px" }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}

export default RecommendationsList;
