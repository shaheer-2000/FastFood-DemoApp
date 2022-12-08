import { Button, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function NavItem({ name, to, ...props }) {
	const { setUser } = useContext(AuthContext);
	const router = useRouter();

	function handleLogout() {
		localStorage.removeItem("user");
		setUser(null);
	}

	return (
		<Link as={NextLink} href={to} style={{ textDecoration: "none" }}>
			<Button 
			colorScheme={router.asPath === to ? "orange" : "teal"}
			color="white"
			textShadow="inner"
			size="md"
			variant="solid"
			boxShadow="md"
			onClick={name.toLowerCase() === "logout" ? handleLogout : () => {}}>
					{name}
			</Button>
		</Link>
	);
}
