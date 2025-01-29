import platforms from "../data/platforms";

export interface Platforms {
	id: number;
	name: string;
}

const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatforms;
