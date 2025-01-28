import { GameQuery } from "@/App";
import { Genre } from "./useGenres";
import useFetchData from "@/hooks/useData";
import { Platforms } from "@/hooks/usePlatforms";
export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const useGames = (gameQuery: GameQuery) =>
	useFetchData<Game>(
		"/games",
		{
			params: {
				genres: gameQuery.genre?.id,
				parent_platforms: gameQuery.platform?.id,
				ordering: gameQuery.sortValue,
			},
		},
		[gameQuery],
	);

export default useGames;
