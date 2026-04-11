import { Request, Response } from "express";
import { gameService } from "./game.service";

export const gameController = {
  getTodaysGames: async (req: Request, res: Response) => {
    try {
      const games = await gameService.getTodaysGames();
      res.json({ success: true, data: games });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },
};
