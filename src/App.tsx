import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import Genres from "./components/Genres";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/usePlatforms";

export interface GameQuery {
	genre: Genre | null;
	platform: Platforms | null;
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
				<Navbar></Navbar>
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<Genres
						onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
						selectedGenre={gameQuery.genre}></Genres>
				</GridItem>
			</Show>
			<GridItem area="main">
				<PlatformSelector
					onSelectPlatform={(platform) =>
						setGameQuery({ ...gameQuery, platform })
					}
					selectedPlatform={gameQuery.platform}></PlatformSelector>
				<GameGrid gameQuery={gameQuery}></GameGrid>
			</GridItem>
		</Grid>
	);
}

export default App;
