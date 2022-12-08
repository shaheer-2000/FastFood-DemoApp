import { Box } from "@chakra-ui/react";
import NavBar from "./Nav/NavBar";

export default function Layout({ children, ...props }) {
	return (
		<Box w="100vw" h="100vh">
			<NavBar />
			{children}
		</Box>
	);
}
