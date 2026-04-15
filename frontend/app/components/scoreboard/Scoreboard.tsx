"use client"
import { useGames } from "@/app/hooks/useGames";
import Scorecard from "./Scorecard";
import { Game } from "@/app/types/games.types";

const Scoreboard = () => {
    const { games, loading, error } = useGames();

    const sortedGames: Game[] = [];
    games.forEach((game: Game) => {
        if (game.gameState === "Live") {
            sortedGames.unshift(game);
        } else {
            sortedGames.push(game);
        }
    });

    console.log(games);
    return (
        <div className="flex">
            {sortedGames.map((game, i) => (
                <Scorecard key={i} game={game} />
            ))}
        </div>
    )
}

export default Scoreboard;