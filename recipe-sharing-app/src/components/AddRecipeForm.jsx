import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: '16px' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        rows={4}
        style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      <button type="submit" style={{ padding: '8px 12px' }}>Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
