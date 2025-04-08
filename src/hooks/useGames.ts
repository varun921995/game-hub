import { GameQuery } from "@/App";
import apiClient, { FetchResponse } from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import ApiClient from "@/services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
const apiClient = new ApiClient<Game>("games");

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<FetchResponse<Game>>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortValue,
          search: gameQuery.searchValue,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next == null ? undefined : allPage.length + 1;
    },
  });
};
// return useInfiniteQuery<FetchResponse<Game>, Error>({
//   queryKey: ["games", gameQuery],
//   queryFn: ({ pageParam = 1 }) =>
//     apiClient.getAll({
//       params: {
//         genres: gameQuery.genre?.id,
//         parent_platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortValue,
//         search: gameQuery.searchValue,
//         page: pageParam,
//       },
//     }),
//   getNextPageParam: (lastPage, allPage) => {
//     return lastPage.next == null ? undefined : allPage.length + 1;
//   },
// });

export default useGames;
