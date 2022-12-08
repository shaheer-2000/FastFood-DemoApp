import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { MenuContext } from "../../context/MenuContext";
import {
	DeleteIcon,
	EditIcon
} from "@chakra-ui/icons";

export default function MenuItem({ id, title, description, price, image, ...props }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { user, setUser, isUserAdmin } = useContext(AuthContext);
	const [updatedItem, setUpdatedItem] = useState({
		id,
		title,
		description,
		price,
		image
	});
	const { menuItems, setMenuItems } = useContext(MenuContext);
	const router = useRouter();

	useEffect(() => {
		const _user = localStorage.getItem("user");
		if (!user && !_user) {
			router.replace("/");
		} else {
			if (!user) {
				setUser(JSON.parse(_user));
			} else {
				localStorage.setItem("user", JSON.stringify(user));
			}
		}
	}, []);

	function handleItemUpdate() {
		// handle modal
	}

	function handleItemDelete() {
		setMenuItems(menuItems.filter((item) => item.id !== id ));
	}

	return (
		<>
			<Card direction={{ base: "column", sm: "row" }} overflow="hidden" variant="elevated" maxW="lg">
				<Image objectFit="contain" src={image} maxW={{ base: "100%", sm: "200px" }} alt="" borderRadius="md" />
				<Stack mt={5} spacing={5}>
					<CardBody>
							<Heading as="h2" size="md">{title}</Heading>
							<Text as="p" py="1">{description ?? ""}</Text>
							<Text color="green.400" fontSize="2xl" py="2">
								${price}
							</Text>
					</CardBody>
				{ user && isUserAdmin(user.username) && (
					<CardFooter>
						<Divider />
						<ButtonGroup spacing={5}>
							<Button leftIcon={<EditIcon />} variant="solid" colorScheme="yellow" onClick={onOpen}>Update</Button>
							<Button leftIcon={<DeleteIcon />} variant="solid" colorScheme="red" onClick={handleItemDelete}>Remove</Button>
						</ButtonGroup>
					</CardFooter>
				)}
				</Stack>
			</Card>
			<Modal size="4xl" isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Update details for {title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						{/* update form goes here */}
					</ModalBody>
					<ModalFooter>
						<ButtonGroup spacing={5}>
							<Button colorScheme="gray" onClick={onClose}>
								Cancel
							</Button>
							<Button colorScheme="green" onClick={handleItemUpdate}>
								Save
							</Button>
						</ButtonGroup>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
