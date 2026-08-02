import { Link, useParams } from "react-router-dom";

import { getMenuItemById } from "../../utils/getMenuItemById";

import { useSavedRecipes } from "../../context/SavedRecipesContext";

import "./FoodDetail.css";

function FoodDetail() {
  const { id } = useParams();

  const item = getMenuItemById(id);

  const {
    saveRecipe,
    removeRecipe,
    isSaved,
  } = useSavedRecipes();

  if (!item) {
    return <h2>Food Not Found</h2>;
  }

  return (
    <div className="detail-page">
      <Link to="/">← Back to Menu</Link>

      <Link
        className="saved-link"
        to="/saved-recipes"
      >
        Saved Recipes
      </Link>

      <div className="detail-card">
        <img
          src={item.image}
          alt={item.name}
        />

        <div className="detail-content">
          <span>{item.category}</span>

          <span
            className={
              item.isVeg ? "veg" : "nonveg"
            }
          >
            {item.isVeg ? "Veg" : "Non-Veg"}
          </span>

          <h1>{item.name}</h1>

          <p>{item.servings}</p>

          <p>{item.fullDescription}</p>

          <h3>Ingredients</h3>

          <ul>
            {item.ingredients.map((ingredient) => (
              <li key={ingredient.name}>
                {ingredient.name} - {ingredient.quantity}
              </li>
            ))}
          </ul>

          <button
            onClick={() =>
              isSaved(item.id)
                ? removeRecipe(item.id)
                : saveRecipe(item)
            }
          >
            {isSaved(item.id)
              ? "Saved"
              : "Save Recipe"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodDetail;