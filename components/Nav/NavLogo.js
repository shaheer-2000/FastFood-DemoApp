import { SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { Heading, Link, Stack } from "@chakra-ui/react";

export default function NavLogo({ boxSize, ...props }) {
	return (
		<Link as={NextLink} href="/" style={{ textDecoration: "none" }}>
			<Stack
			direction="column"
			spacing={2}
			alignItems="center"
			justifyContent="center">
				<SunIcon boxSize={boxSize ?? 8} color="orange.600" />
				<Heading as="h1" fontSize="lg">
					SunRidge Foods
				</Heading>
			</Stack>
		</Link>
	);
}
