"use client"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const res = await axios.get("http://localhost:4789/api/games");
      setGames(res.data.data);
    };

    fetchGames();
    const interval = setInterval(fetchGames, 2 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {games.map((game: any, i: number) => (
        <div key={i}>
          <span>{game.awayTeam.team} {game.awayTeam.score ?? game.awayTeam.record?.wins + "-" + game.awayTeam.record?.losses}</span>
          <span> vs </span>
          <span>{game.homeTeam.team} {game.homeTeam.score ?? game.homeTeam.record?.wins + "-" + game.homeTeam.record?.losses}</span>
          <span> — {game.gameState} {game.gameState === "Preview" ? game.gameTime : null}</span>
        </div>
      ))}
    </div>
  );
}