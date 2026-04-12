"use client"
import { useGames } from "@/app/hooks/useGames";
import Scorecard from "./Scorecard";

const Scoreboard = () => {
    const { games, loading, error } = useGames();
    console.log(games);
    return (
        <div className="flex">
            {games.map((game, i) => (
                <Scorecard key={i} game={game} />
            ))}
        </div>
    )
}

export default Scoreboard