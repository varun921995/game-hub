import apiClient from "@/services/api-client";
import fetchApiClient from "@/services/fetch-api-client";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";

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

const useGames = () => fetchApiClient<Game>("/games");

export default useGames;
