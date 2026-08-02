import { createContext, useContext, useState } from "react";
import {
    getToken,
    getUser,
    saveAuth,
    clearAuth,
} from "../utils/storage";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    const login = (token, user) => {
        saveAuth(token, user);
        setToken(token);
        setUser(user);
    };

    const logout = () => {
        clearAuth();
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                user,
                login,
                logout,
                isAuthenticated: !!token,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}