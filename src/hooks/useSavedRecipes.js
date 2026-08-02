import { useEffect, useState } from "react";

import {
    getSavedRecipes,
    saveRecipes,
} from "../utils/storage";

export default function useSavedRecipes() {
    const [savedRecipes, setSavedRecipes] = useState([]);

    useEffect(() => {
        setSavedRecipes(getSavedRecipes());
    }, []);

    const saveRecipe = (recipe) => {
        const exists = savedRecipes.some(
            (item) => item.id === recipe.id
        );

        if (exists) return;

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

    return {
        savedRecipes,
        saveRecipe,
        removeRecipe,
        isSaved,
    };
}