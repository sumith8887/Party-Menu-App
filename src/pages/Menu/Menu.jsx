import { useState } from "react";

import menuData from "../../data/menuData";

import Header from "../../components/Header/Header";
import FoodCard from "../../components/FoodCard/FoodCard";
import FilterBar from "../../components/FilterBar/FilterBar";

import { filterMenuItems } from "../../utils/filterMenuItems";

import "./Menu.css";

function Menu() {
  const [category, setCategory] = useState("all");
  const [diet, setDiet] = useState("all");

  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = filterMenuItems(
    menuData,
    category,
    diet,
    searchTerm
  );

  return (
    <>
      <Header />

      <div className="menu-page">
        <FilterBar
          category={category}
          setCategory={setCategory}
          diet={diet}
          setDiet={setDiet}
          search={searchInput}
          setSearch={setSearchInput}
          onSearch={() => setSearchTerm(searchInput)}
        />

        <h2>{filteredItems.length} Items Found</h2>

        {filteredItems.length === 0 ? (
          <EmptyState
            title="No Dishes Found"
            subtitle="Try changing the filters."
          />
        ) : (
          <div className="food-grid">
            {filteredItems.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Menu;