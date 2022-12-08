import { Flex, Heading, Stack } from "@chakra-ui/react";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const defaultItems = [
	{
		name: "Login",
		to: "/login"
	},
	{
		name: "Signup",
		to: "/signup"
	},
	// {
	// 	name: "Admin",
	// 	to: "/admin",
	// 	loggedInOnly: true,
	// 	adminOnly: true
	// },
	{
		name: "Menu",
		to: "/menu",
		loggedInOnly: true
	},
	{
		name: "Logout",
		to: "/",
		loggedInOnly: true
	}
];

export default function NavBar({ ...props }) {
	const { user } = useContext(AuthContext);
	const navItems = defaultItems.filter((item) => {
		if (user) {
			if (item.adminOnly && !user.isAdmin) {
				return false;
			}

			if (item.loggedInOnly) {
				return true;
			}
		} else if (!item.loggedInOnly) {
			return true;
		}
	});

	return (
		<Flex 
		px={5}
		py={3}
		justifyContent="space-between" 
		alignItems="center"
		position="absolute"
		top="0"
		width="100%"
		bg="orange.200"
		boxShadow="lg">
			<NavLogo boxSize={8} />
			<Stack 
			direction="row" 
			spacing={4} 
			alignItems="center">
				{navItems && navItems.map((item) => (
					<NavItem key={item.name} name={item.name} to={item.to} />
				))}
			</Stack>
		</Flex>
	);
}
