import menuData from "../data/menuData";

export function getMenuItemById(id) {
    return menuData.find(
        (item) => item.id === Number(id)
    );
}