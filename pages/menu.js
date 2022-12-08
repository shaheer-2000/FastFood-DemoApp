import { AddIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";
import Layout from "../components/Layout";
import MenuGrid from "../components/Menu/MenuGrid";
import { AuthContext } from "../context/AuthContext";
import { MenuContext } from "../context/MenuContext";

export default function Menu() {
	const { user, isUserAdmin } = useContext(AuthContext);
	const { setMenuItems } = useContext(MenuContext);
	const { isOpen, onOpen, onClose } = useDisclosure();

	function addNewItem() {
		// same modal strategy applied here
	};

	return (
		<Layout>
			<MenuGrid 
			width="100%"
			height="100%"
			pt={120}
			px={10} />
			{ user && isUserAdmin(user.username) && (
			<IconButton 
				position="absolute" 
				bottom="5" 
				right="10" 
				ml={5} 
				mb={5} 
				icon={<AddIcon />} 
				borderRadius={50} 
				colorScheme="teal"
				onClick={() => {}} />
			) }
			<Modal size="4xl" isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add new item to the menu</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						{/* update form goes here */}
					</ModalBody>
					<ModalFooter>
						<ButtonGroup spacing={5}>
							<Button colorScheme="gray" onClick={onClose}>
								Cancel
							</Button>
							<Button colorScheme="green" onClick={addNewItem}>
								Save
							</Button>
						</ButtonGroup>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Layout>
	)
}
