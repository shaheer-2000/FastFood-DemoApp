import { Button, Flex, FormControl, FormLabel, Heading, Image, Input, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Layout from "../components/Layout";
import { AppContext } from "../context/AppContext";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
	const { isValidUser } = useContext(AppContext);
	const { isUserAdmin, setUser } = useContext(AuthContext); 
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	function mockLoginEvent() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(true);
			}, 1500);
		})
	}

	async function handleLogin() {
		setIsLoading(true);
		await mockLoginEvent();
		setIsLoading(false);
		if (isValidUser(username, password)) {
			const user = {
				username,
				isAdmin: isUserAdmin(username)
			};
			localStorage.setItem("user", JSON.stringify(user));

			setUser(user);

			// route to next page
			router.push("/menu");

			return;
		}

		// show error toast
	}

	return (
		<Layout>
			<Stack
			direction="row"
			width="100%"
			height="100%"
			justifyContent="center"
			alignItems="center"
			px={10}
			spacing={50}>
				<Flex
				w="100%"
				h="100%"
				justifyContent="center"
				alignItems="center">
					<Stack
					boxSize="lg" 
					boxShadow="xl" 
					border="1px solid rgba(0, 0, 0, 0.1)" 
					borderRadius="lg" 
					px={5}
					justifyContent="center"
					alignItems="center">
						<Heading as="h1" color="teal.500" textShadow="inner" textAlign="center" mb={5}>Login</Heading>
						<FormControl isRequired>
							<FormLabel color="teal.500">Username</FormLabel>
							<Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
						</FormControl>
						<FormControl isRequired>
							<FormLabel color="teal.500">Password</FormLabel>
							<Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
						</FormControl>
						<Text alignSelf="start" as="span" fontSize="sm" style={{ marginTop: "1rem" }}>Forgot Password?</Text>
						<Button 
						isLoading={isLoading} 
						w="100%" 
						colorScheme="teal" 
						size="lg" 
						style={{ marginTop: "1.2rem" }} 
						onClick={handleLogin}>Login</Button>
					</Stack>
				</Flex>
				<Flex boxSize="lg" w="100%" h="100%" justifyContent="center" alignItems="center">
					<Image src="/images/login.jpg" alt="" />
				</Flex>
			</Stack>
		</Layout>
	)
}
