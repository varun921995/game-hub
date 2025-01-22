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

const useGames = (
	selectedGenre: Genre | null,
	selectedPlatform: Platforms | null,
) =>
	useFetchData<Game>(
		"/games",
		{
			params: {
				genres: selectedGenre?.id,
				parent_platforms: selectedPlatform?.id,
			},
		},
		[selectedGenre?.id, selectedPlatform?.id],
	);

export default useGames;
