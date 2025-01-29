import Genres from "@/data/genres";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () => ({ data: Genres, isLoading: false, error: null });

export default useGenres;
