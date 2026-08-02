import "./FilterBar.css";

const categories = [
    "all",
    "starter",
    "main",
    "sides",
    "desert",
];

const diets = [
    "all",
    "veg",
    "nonveg",
];

function FilterBar({
    category,
    setCategory,
    diet,
    setDiet,
    search,
    setSearch,
    onSearch,
}) {
    return (
        <div className="filter-container">
            {/* Category Filter */}
            <div className="filter-group">
                <h4>Category</h4>

                <div className="chip-container">
                    {categories.map((item) => (
                        <button
                            key={item}
                            type="button"
                            className={category === item ? "chip active" : "chip"}
                            onClick={() => setCategory(item)}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Diet Filter */}
            <div className="filter-group">
                <h4>Diet</h4>

                <div className="chip-container">
                    {diets.map((item) => (
                        <button
                            key={item}
                            type="button"
                            className={diet === item ? "chip active" : "chip"}
                            onClick={() => setDiet(item)}
                        >
                            {item === "nonveg"
                                ? "Non-Veg"
                                : item.charAt(0).toUpperCase() + item.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Search */}
            <div className="search-section">
                <input
                    type="text"
                    placeholder="Search dishes..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onSearch();
                        }
                    }}
                />

                <button
                    type="button"
                    className="search-btn"
                    onClick={onSearch}
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export default FilterBar;