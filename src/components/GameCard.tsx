import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedImage from "@/services/image-url";
import { wrap } from "framer-motion";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<>
			<Card>
				<Image src={getCroppedImage(game.background_image)}></Image>
				<CardBody>
					<HStack
						justifyContent="space-between"
						style={{ flexWrap: "wrap" }}
						marginBottom={3}>
						<PlatformIcons
							platform={game.parent_platforms.map(
								(p) => p.platform,
							)}></PlatformIcons>
						<CriticScore criticScore={game.metacritic}></CriticScore>
					</HStack>
					<Heading fontSize="2xl">{game.name}</Heading>
				</CardBody>
			</Card>
		</>
	);
};

export default GameCard;
