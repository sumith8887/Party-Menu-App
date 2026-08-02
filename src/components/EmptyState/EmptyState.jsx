import { Link } from "react-router-dom";
import "./EmptyState.css";

function EmptyState({
    title,
    subtitle,
    buttonText,
    buttonLink,
}) {
    return (
        <div className="empty-state">
            <h2>{title}</h2>

            <p>{subtitle}</p>

            {buttonText && (
                <Link
                    to={buttonLink}
                    className="empty-btn"
                >
                    {buttonText}
                </Link>
            )}
        </div>
    );
}

export default EmptyState;