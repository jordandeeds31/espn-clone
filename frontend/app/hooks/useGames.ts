"use client";
import { useState, useEffect } from "react";
import { apiClient } from "../lib/api";
import { Game } from "../types/games.types";

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await apiClient.get("/games");
        setGames(res.data.data);
      } catch (err) {
        setError("Failed to fetch games");
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
    const interval = setInterval(fetchGames, 2 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return { games, loading, error };
};
