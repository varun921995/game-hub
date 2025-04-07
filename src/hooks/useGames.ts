import { GameQuery } from "@/App";
import apiClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (gameQuery: GameQuery) => {
  const fetchGames = () =>
    apiClient
      .get<FetchResponse<Game>>("/games", {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortValue,
          search: gameQuery.searchValue,
        },
      })
      .then((res) => res.data);

  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: fetchGames,
    staleTime: 24 * 60 * 60 * 100,
  });
};

export default useGames;
