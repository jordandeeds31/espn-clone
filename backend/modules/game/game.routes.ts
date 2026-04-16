import express from "express";
import { gameController } from "./game.controller";

const router = express.Router();

router.get("/", gameController.getTodaysGames);
router.get("/:gameId", gameController.getGameById);

export default router;
