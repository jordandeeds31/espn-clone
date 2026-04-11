import { redisClient } from "./redis.client";

export const cacheService = {
  get: async (key: string) => {
    const data = await redisClient.get(key);
    return data ? JSON.parse(data) : null;
  },
  set: async (key: string, value: any, ttlSeconds: number) => {
    await redisClient.set(key, JSON.stringify(value), "EX", ttlSeconds);
  },
};
