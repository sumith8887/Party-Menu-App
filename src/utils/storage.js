import {
    TOKEN_KEY,
    USER_KEY,
    SAVED_RECIPES_KEY,
} from "./constants";

export const saveAuth = (token, user) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

export const getUser = () => {
    const user = localStorage.getItem(USER_KEY);

    return user ? JSON.parse(user) : null;
};

export const clearAuth = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
};

// ---------- Saved Recipes ----------

export const getSavedRecipes = () => {
    const recipes = localStorage.getItem(
        SAVED_RECIPES_KEY
    );

    return recipes ? JSON.parse(recipes) : [];
};

export const saveRecipes = (recipes) => {
    localStorage.setItem(
        SAVED_RECIPES_KEY,
        JSON.stringify(recipes)
    );
};