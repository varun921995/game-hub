import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

import ColorModeSwitch from "./ColorModeSwitch";
import SearchField from "./SearchField";

interface Props {
	searchValue: (search: string) => void;
}

const Navbar = ({ searchValue }: Props) => {
	return (
		<HStack padding="10px">
			<Image src={logo} boxSize="60px"></Image>
			<SearchField searchValue={(search) => searchValue(search)}></SearchField>
			<ColorModeSwitch></ColorModeSwitch>
		</HStack>
	);
};

export default Navbar;
