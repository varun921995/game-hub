import useFetchData from "@/hooks/useData";
import fetchApiClient from "@/hooks/useData";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () => useFetchData<Genre>("/genres");

export default useGenres;
