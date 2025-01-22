import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import Genres from "./components/Genres";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform] = useState<number | null>(null);
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
						onSelectGenre={(genre) => setSelectedGenre(genre)}
						selectedGenre={selectedGenre}></Genres>
				</GridItem>
			</Show>
			<GridItem area="main">
				<PlatformSelector
					onSelectPlatform={(platformId) =>
						setSelectedPlatform(platformId)
					}></PlatformSelector>
				<GameGrid
					selectedGenre={selectedGenre}
					selectedPlatform={selectedPlatform}></GameGrid>
			</GridItem>
		</Grid>
	);
}

export default App;
