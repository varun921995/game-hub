import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
	criticScore: number;
}

const CriticScore = ({ criticScore }: Props) => {
	const color = criticScore >= 70 ? "green" : criticScore > 60 ? "yellow" : "";

	return <Badge colorScheme={color}>{criticScore}</Badge>;
};

export default CriticScore;
