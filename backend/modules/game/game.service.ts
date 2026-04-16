import { cacheService } from "../../integrations/redis/redis.service";
import { mlbApiService } from "../../integrations/mlb/mlb.api.service";
import transformGames from "./game.transform";

export const gameService = {
  getTodaysGames: async () => {
    const date = new Date().toLocaleDateString("en-CA");
    const cacheKey = `games:mlb:${date}`;

    const cached = await cacheService.get(cacheKey);
    if (cached) return cached;

    const rawGames = await mlbApiService.getTodaysGames();
    const games = transformGames(rawGames);
    await cacheService.set(cacheKey, games, 30);
    return games;
  },
  getGameById: async (gameId: number) => {
    return mlbApiService.getGameById(gameId);
  },
};
