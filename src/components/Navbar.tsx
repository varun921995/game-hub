import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

import ColorModeSwitch from "./ColorModeSwitch";
import SearchField from "./SearchField";

const Navbar = () => {
	return (
		<HStack padding="10px">
			<Image src={logo} boxSize="60px"></Image>
			<SearchField></SearchField>
			<ColorModeSwitch></ColorModeSwitch>
		</HStack>
	);
};

export default Navbar;
