import { createContext, useContext, useEffect, useState } from "react";
import {
    getSavedRecipes,
    saveRecipes,
} from "../utils/storage";

const SavedRecipesContext = createContext();

export function SavedRecipesProvider({ children }) {
    const [savedRecipes, setSavedRecipes] = useState([]);

    useEffect(() => {
        setSavedRecipes(getSavedRecipes());
    }, []);

    const saveRecipe = (recipe) => {
        if (savedRecipes.some((item) => item.id === recipe.id)) {
            return;
        }

        const updated = [...savedRecipes, recipe];
        setSavedRecipes(updated);
        saveRecipes(updated);
    };

    const removeRecipe = (id) => {
        const updated = savedRecipes.filter(
            (item) => item.id !== id
        );

        setSavedRecipes(updated);
        saveRecipes(updated);
    };

    const isSaved = (id) => {
        return savedRecipes.some(
            (item) => item.id === id
        );
    };

    return (
        <SavedRecipesContext.Provider
            value={{
                savedRecipes,
                saveRecipe,
                removeRecipe,
                isSaved,
            }}
        >
            {children}
        </SavedRecipesContext.Provider>
    );
}

export function useSavedRecipes() {
    return useContext(SavedRecipesContext);
}