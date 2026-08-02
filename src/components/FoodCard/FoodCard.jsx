import { Link } from "react-router-dom";
import "./FoodCard.css";

function FoodCard({ item }) {
    return (
        <Link
            to={`/menu/${item.id}`}
            className="food-card"
        >
            <div className="image-container">
                <img
                    src={item.image}
                    alt={item.name}
                />

                <span
                    className={
                        item.isVeg
                            ? "badge veg"
                            : "badge nonveg"
                    }
                >
                    {item.isVeg ? "Veg" : "Non-Veg"}
                </span>
            </div>

            <div className="food-content">
                <small className="category">
                    {item.category.toUpperCase()}
                </small>

                <h3>{item.name}</h3>

                <p>{item.description}</p>

                <span>{item.servings}</span>
            </div>
        </Link>
    );
}

export default FoodCard;