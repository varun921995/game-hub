import apiClient from "@/services/api-client";
import fetchApiClient from "@/hooks/useData";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import { Genre } from "./useGenres";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

interface FetchGamesResponse {
	count: number;
	results: Game[];
}

const useGames = (selectedGenre: Genre | null) =>
	fetchApiClient<Game>("/games", { params: { genres: selectedGenre?.id } }, [
		selectedGenre?.id,
	]);

export default useGames;
