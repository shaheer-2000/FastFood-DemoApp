import { createContext, useState } from "react";

export const AuthContext = createContext();
const admins = ["shaheer"];

export function AuthProvider({ children, ...props }) {
	const [user, setUser] = useState(null);

	function isUserAdmin(username) {
		return admins.includes(username.toLowerCase());
	}

	return (
		<AuthContext.Provider value={{
			user,
			setUser,
			isUserAdmin
		}}>
			{children}
		</AuthContext.Provider>
	)
}
