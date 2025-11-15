import { useRecipeStore } from "./recipeStore";

function SearchBar() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  function handleChange(event) {
    setSearchTerm(event.target.value);
    filterRecipes();
  }

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
      style={{ padding: "10px", marginBottom: "20px", width: "100%" }}
    />
  );
}

export default SearchBar;
