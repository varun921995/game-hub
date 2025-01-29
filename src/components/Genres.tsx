import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImage from "@/services/image-url";
import {
	HStack,
	Image,
	List,
	ListItem,
	Text,
	Spinner,
	Button,
	Heading,
} from "@chakra-ui/react";
import React from "react";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const Genres = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data, error, isLoading } = useGenres();

	if (isLoading) return <Spinner></Spinner>;
	//if (error) return null;

	return (
		<div>
			<Heading fontSize={"2xl"}>Genres</Heading>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} padding={2}>
						<HStack>
							<Image
								boxSize="32px"
								borderRadius="5px"
								objectFit={"cover"}
								src={getCroppedImage(genre.image_background)}></Image>
							<Button
								fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
								variant="link"
								onClick={() => onSelectGenre(genre)}
								fontSize="lg"
								whiteSpace={"normal"}
								textAlign={"left"}>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default Genres;
