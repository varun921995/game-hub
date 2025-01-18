import useGenres from "@/hooks/useGenres";
import React from "react";

const Genres = () => {
	const { genres, error, isLoading } = useGenres();
	return (
		<div>
			<ul>
				{genres.map((genre) => (
					<li key={genre.id}>{genre.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Genres;
