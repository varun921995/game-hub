import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
	searchValue: (search: string) => void;
}

const SearchField = ({ searchValue }: Props) => {
	const searchInput = useRef<HTMLInputElement>(null);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				searchValue(searchInput.current?.value as string);
			}}>
			<InputGroup>
				<InputLeftElement>
					<BsSearch />
				</InputLeftElement>
				<Input ref={searchInput} placeholder="Search Games..."></Input>
			</InputGroup>
		</form>
	);
};

export default SearchField;
