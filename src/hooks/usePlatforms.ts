import useFetchData from "./useData";

interface PlatformResponse {
	id: number;
	name: string;
}

const usePlatforms = () =>
	useFetchData<PlatformResponse>("/platforms/lists/parents");

export default usePlatforms;
