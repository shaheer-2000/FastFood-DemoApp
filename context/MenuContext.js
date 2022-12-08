import { createContext, useState } from "react";

export const MenuContext = createContext();
const defaultMenuItems = [
	{
		title: "Spicy Chicken Burger & Drink",
		description: "Lorem ipsum",
		price: 1.20,
		image: "https://www.mcdelivery.com.pk/pk//static/1670188375723/assets/92/products/8121.png",
	},
	{
		title: "Spicy Chicken Burger & Drink",
		description: "Lorem ipsum",
		price: 1.20,
		image: "https://www.mcdelivery.com.pk/pk//static/1670188375723/assets/92/products/8121.png",
	}
];

export function MenuProvider({ children, ...props }) {
	const [menuItems, setMenuItems] = useState([].concat(defaultMenuItems.map((item, idx) => ({ id: idx, ...item }))));

	return (
		<MenuContext.Provider value={{
			menuItems,
			setMenuItems
		}}>
			{children}
		</MenuContext.Provider>
	)
}
