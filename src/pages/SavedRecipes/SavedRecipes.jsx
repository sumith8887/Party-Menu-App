import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import FoodCard from "../../components/FoodCard/FoodCard";

import { useSavedRecipes } from "../../context/SavedRecipesContext";

import "./SavedRecipes.css";

function SavedRecipes() {
  const {
    savedRecipes,
    removeRecipe,
  } = useSavedRecipes();

  return (
    <>
      <Header />

      <div className="saved-page">
        <h2>Saved Recipes</h2>

        <p>
          {savedRecipes.length} Saved Recipes
        </p>

        <Link to="/">← Back to Menu</Link>

        {savedRecipes.length === 0 ? (
          <EmptyState
            title="No Saved Recipes Yet"
            subtitle="Browse the menu and save your favorite dishes."
            buttonText="Browse Menu"
            buttonLink="/"
          />
        ) : (
          <div className="food-grid">
            {savedRecipes.map((item) => (
              <div key={item.id}>
                <FoodCard item={item} />

                <button
                  onClick={() =>
                    removeRecipe(item.id)
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default SavedRecipes;