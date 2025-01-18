import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<>
			<Card borderRadius={10} overflow="hidden">
				<Image src={game.background_image}></Image>
				<CardBody>
					<Heading fontSize="2xl">{game.name}</Heading>
					<HStack justifyContent="space-between">
						<PlatformIcons
							platform={game.parent_platforms.map(
								(p) => p.platform,
							)}></PlatformIcons>
						<CriticScore criticScore={game.metacritic}></CriticScore>
					</HStack>
				</CardBody>
			</Card>
		</>
	);
};

export default GameCard;
