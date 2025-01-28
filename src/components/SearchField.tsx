import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchField = () => {
	const searchInput = useRef<HTMLInputElement>(null);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				console.log(searchInput.current?.value);
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
