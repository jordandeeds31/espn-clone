import { Request, Response } from "express";
import { gameService } from "./game.service";

export const gameController = {
  getTodaysGames: async (req: Request, res: Response) => {
    try {
      const games = await gameService.getTodaysGames();
      res.status(200).json({ success: true, data: games });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },
  getGameById: async (req: Request, res: Response) => {
    try {
      const { gameId } = req.params;
      if (typeof gameId !== "string") {
        res.status(400).json({ success: false, message: "Invalid Game ID" });
      }
      const game = await gameService.getGameById(Number(gameId));
      res.status(200).json({ success: true, data: game });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },
};
