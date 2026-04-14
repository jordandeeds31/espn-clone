export type GameRecord = {
  wins: number;
  losses: number;
};

export type Team = {
  teamId: number;
  team: string;
  score?: number;
  record?: GameRecord;
};

export type Game = {
  awayTeam: Team;
  homeTeam: Team;
  gameState: "Preview" | "Live" | "Final";
  gameTime: string;
};
