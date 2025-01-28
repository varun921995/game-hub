import { Grid, GridItem, HStack, Show, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import Genres from "./components/Genres";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import "./App.css";

export interface GameQuery {
	genre: Genre | null;
	platform: Platforms | null;
	sortValue: string;
	searchValue: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}>
			<GridItem area="nav">
				<Navbar
					searchValue={(searchValue) =>
						setGameQuery({ ...gameQuery, searchValue })
					}></Navbar>
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<Genres
						onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
						selectedGenre={gameQuery.genre}></Genres>
				</GridItem>
			</Show>
			<GridItem area="main">
				<HStack marginX={5}>
					<PlatformSelector
						onSelectPlatform={(platform) =>
							setGameQuery({ ...gameQuery, platform })
						}
						selectedPlatform={gameQuery.platform}></PlatformSelector>
					<SortSelector
						onSortSelect={(sortValue) =>
							setGameQuery({ ...gameQuery, sortValue })
						}
						selectedSortValue={gameQuery.sortValue}></SortSelector>
				</HStack>
				<Text marginX={5} fontSize="3xl">
					{gameQuery.platform?.name} {gameQuery.genre?.name} Games
				</Text>
				<GameGrid gameQuery={gameQuery}></GameGrid>
			</GridItem>
		</Grid>
	);
}

export default App;
