import useGenres from "@/hooks/useGenres";
import getCroppedImage from "@/services/image-url";
import { HStack, Image, List, ListItem, Text, Spinner } from "@chakra-ui/react";
import React from "react";

const Genres = () => {
	const { data, error, isLoading } = useGenres();

	if (isLoading) return <Spinner></Spinner>;

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
							<Text fontSize="lg">{genre.name}</Text>
						</HStack>
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default Genres;
