import apiClient from "@/services/api-client";
import fetchApiClient from "@/services/fetch-api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Genre {
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
