import { Platforms } from "@/hooks/usePlatforms";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
	onSelectPlatform: (platform: Platforms) => void;
	selectedPlatform: Platforms | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
	const { data, error, isLoading } = usePlatforms();

	if (error) return null;

	return (
		<div>
			<Menu>
				<MenuButton as={Button} rightIcon={<BsChevronDown />} marginX={5}>
					{selectedPlatform !== null ? selectedPlatform.name : "Platforms"}
				</MenuButton>
				<MenuList>
					{data.map((platform) => (
						<MenuItem
							key={platform.id}
							onClick={() => onSelectPlatform(platform)}>
							{platform.name}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</div>
	);
};

export default PlatformSelector;
