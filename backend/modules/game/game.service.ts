import { cacheService } from "../../integrations/redis/redis.service";

export const gameService = {
  getTodaysGames: async () => {
    const date = new Date().toLocaleDateString("en-CA");
    console.log(date);
    const cacheKey = `games:mlb:${date}`;
    const cached = await cacheService.get(cacheKey);
    if (cached) return cached;
    return [];
  },
};
