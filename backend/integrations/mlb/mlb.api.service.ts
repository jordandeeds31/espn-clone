import { mlbApiClient } from "./mlb.api.client";

export const mlbApiService = {
  getTodaysGames: async () => {
    const date = new Date().toISOString().split("T")[0];
    const res = await mlbApiClient.get(
      `/schedule?sportId=1&date=${date}&hydrate=linescore`,
    );
    return res.data.dates[0].games;
  },
};
