import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import {
	Button,
	ButtonGroup,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
	onSelectPlatform: (platform: number) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
	const { data, error, isLoading } = usePlatforms();

	if (error) return null;

	return (
		<div>
			<Menu>
				<MenuButton as={Button} rightIcon={<BsChevronDown />} marginX={5}>
					Platforms
				</MenuButton>
				<MenuList>
					{data.map((platform) => (
						<MenuItem
							key={platform.id}
							onClick={() => onSelectPlatform(platform.id)}>
							{platform.name}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</div>
	);
};

export default PlatformSelector;
