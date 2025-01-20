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
} from "@chakra-ui/react";
import React from "react";

interface Props {
	onSelectGenre: (genre: Genre) => void;
}

const Genres = ({ onSelectGenre }: Props) => {
	const { data, error, isLoading } = useGenres();

	if (isLoading) return <Spinner></Spinner>;
	//if (error) return null;

	return (
		<div>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} padding={2}>
						<HStack>
							<Image
								boxSize="32px"
								borderRadius="5px"
								src={getCroppedImage(genre.image_background)}></Image>
							<Button
								variant="link"
								onClick={() => onSelectGenre(genre)}
								fontSize="lg">
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
