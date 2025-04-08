import ApiClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => ({ data: genres, isLoading: false, error: null });
const apiClient = new ApiClient<Genre>("genres");
const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres, next: null },
  });
};

export default useGenres;
