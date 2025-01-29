import Platform from "@/data/Platforms";

export interface Platforms {
	id: number;
	name: string;
}

const usePlatforms = () => ({ data: Platform, isLoading: false, error: null });

export default usePlatforms;
