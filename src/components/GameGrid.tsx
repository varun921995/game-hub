import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
	const { games, error } = useGames();

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={{ sm: 1, md: 2, xl: 5 }} spacing={10} padding={5}>
				{games.map((game) => (
					<GameCard key={game.id} game={game}></GameCard>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
