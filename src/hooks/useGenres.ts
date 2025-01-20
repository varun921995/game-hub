import apiClient from "@/services/api-client";
import fetchApiClient from "@/hooks/useData";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

interface FetchGenreResponse {
	count: number;
	results: Genre[];
}

const useGenres = () => fetchApiClient<Genre>("/genres");

export default useGenres;
