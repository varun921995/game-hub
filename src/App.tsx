import { Grid, GridItem, Heading, HStack, Show, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import Genres from "./components/Genres";
import useGenres, { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import "./App.css";
import usePlatforms, { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortValue: string;
  searchValue: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const platform = platforms.results.find((p) => p.id === gameQuery.platformId);
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar
          searchValue={(searchValue) =>
            setGameQuery({ ...gameQuery, searchValue })
          }
        ></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <Genres
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
            selectedGenreId={gameQuery.genreId}
          ></Genres>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Heading marginX={5} marginY={3} fontSize="3xl">
          {platform?.name} {genre?.name} Games
        </Heading>
        <HStack marginX={5}>
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platformId: platform.id })
            }
            selectedPlatformId={gameQuery.platformId}
          ></PlatformSelector>
          <SortSelector
            onSortSelect={(sortValue) =>
              setGameQuery({ ...gameQuery, sortValue })
            }
            selectedSortValue={gameQuery.sortValue}
          ></SortSelector>
        </HStack>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
