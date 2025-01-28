import { MenuButton, MenuList, MenuItem, Menu, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
	onSortSelect: (sortBy: string) => void;
	selectedSortValue: string;
}

const SortSelector = ({ onSortSelect, selectedSortValue }: Props) => {
	const sortList = [
		{
			key: "name",
			value: "name",
			name: "Name",
		},
		{
			key: "released",
			value: "-released",
			name: "Date Released",
		},
		{
			key: "added",
			value: "-added",
			name: "Date Added",
		},
		{
			key: "metacritic",
			value: "-metacritic",
			name: "Popularity",
		},
		{
			key: "rating",
			value: "rating",
			name: "Rating",
		},
	];
	const sortValue = sortList.find((sort) => sort.value === selectedSortValue);
	return (
		<div>
			<Menu>
				<MenuButton as={Button} rightIcon={<BsChevronDown />}>
					Order By :{" "}
					{sortValue?.value != undefined ? sortValue?.name : "Relevance"}
				</MenuButton>
				<MenuList>
					<MenuItem value="" onClick={() => onSortSelect("")}>
						Relevance
					</MenuItem>
					{sortList.map((sort) => (
						<MenuItem
							key={sort.key}
							value={sort.value}
							onClick={() => onSortSelect(sort.value)}>
							{sort.name}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</div>
	);
};

export default SortSelector;
