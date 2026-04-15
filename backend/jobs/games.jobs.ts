import cron from "node-cron";
import { mlbApiService } from "../integrations/mlb/mlb.api.service";
import { cacheService } from "../integrations/redis/redis.service";
import transformGames from "../modules/game/game.transform";

export const startsGamesJob = () => {
  cron.schedule("*/30 * * * *", async () => {
    try {
      console.log("polling mlb api");
      const date = new Date().toLocaleDateString("en-CA");
      const cacheKey = `games:mlb:${date}`;
      const rawGames = await mlbApiService.getTodaysGames();
      const games = transformGames(rawGames);
      await cacheService.set(cacheKey, games, 120);
      console.log("redis updated");
    } catch (err) {
      console.error("games job failed: ", err);
    }
  });
};
