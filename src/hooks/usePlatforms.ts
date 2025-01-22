import useFetchData from "./useData";

export interface Platforms {
	id: number;
	name: string;
}

const usePlatforms = () => useFetchData<Platforms>("/platforms/lists/parents");

export default usePlatforms;
