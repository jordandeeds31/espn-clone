import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { startsGamesJob } from "./jobs/games.jobs";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
  startsGamesJob();
});
