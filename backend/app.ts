import express from "express";
import gameRoutes from "./modules/game/game.routes";

const app = express();

app.use(express.json());

app.use("/api/games", gameRoutes);

export default app;
