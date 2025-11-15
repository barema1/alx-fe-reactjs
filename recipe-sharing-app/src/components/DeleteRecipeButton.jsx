import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  function handleDelete() {
    deleteRecipe(recipeId);
    navigate("/");
  }

  return (
    <button
      onClick={handleDelete}
      style={{
        marginTop: "20px",
        backgroundColor: "red",
        color: "white",
        padding: "8px 12px"
      }}
    >
      Delete Recipe
    </button>
  );
}

export default DeleteRecipeButton;
