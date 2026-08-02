export function filterMenuItems(
    menuItems,
    category,
    diet,
    search
) {
    return menuItems.filter((item) => {

        const categoryMatch =
            category === "all" ||
            item.category === category;

        const dietMatch =
            diet === "all" ||
            (diet === "veg" && item.isVeg) ||
            (diet === "nonveg" && !item.isVeg);

        const searchMatch =
            item.name
                .toLowerCase()
                .includes(search.toLowerCase());

        return (
            categoryMatch &&
            dietMatch &&
            searchMatch
        );
    });
}