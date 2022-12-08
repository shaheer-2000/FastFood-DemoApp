import { createContext, useState } from "react";

const currentUsers = {
	shaheer: "k190233",
	ahmed: "k190275"
};

/**
 * Item Structure
 * id: [str] - unique identifier
 * name: [str]
 * type: [str] - enumerable
 * image: [str] - url
 */

export const AppContext = createContext();

export function AppProvider({ children, ...props }) {
	const [users, setUsers] = useState(Object.assign({}, currentUsers));
	const [items, setItems] = useState([]);

	function isValidUser(username, password) {
		return username.toLowerCase() in users && password === users[username];
	}

	return (
		<AppContext.Provider value={{
			users,
			setUsers,
			items,
			setItems,
			isValidUser
		}}>
			{children}
		</AppContext.Provider>
	);
}
