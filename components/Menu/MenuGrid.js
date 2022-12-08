import { Grid, GridItem } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { MenuContext } from "../../context/MenuContext";
import MenuItem from "./MenuItem";

export default function MenuGrid(props) {
	const {
		menuItems
	} = useContext(MenuContext);

	useEffect(() => {
		console.log(menuItems);
	}, [menuItems]);

	return (
		<Grid {...props} templateColumns="repeat(3, 1fr)" gap={5}>
			{ menuItems && menuItems.map((item) => (
				<GridItem key={item.id} w="100%" h="100%">
					<MenuItem id={item.id} title={item.title} description={item.description} price={item.price} image={item.image} />
				</GridItem>
			))}
		</Grid>
	);
}
