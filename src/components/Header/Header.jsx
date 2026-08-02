import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useSavedRecipes } from "../../context/SavedRecipesContext";
import "./Header.css";

function Header() {
    const { user, logout } = useAuth();
    const { savedRecipes } = useSavedRecipes();

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/signin");
    };

    return (
        <header className="header">
            <div className="header-left">
                <h2>🍽 Party Menu</h2>
                <p>Welcome, {user?.name}</p>
            </div>

            <div className="header-actions">
                <Link className="saved-link" to="/saved-recipes">
                    Saved Recipes
                    <span className="saved-count">
                        {savedRecipes.length}
                    </span>
                </Link>

                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </header>
    );
}

export default Header;