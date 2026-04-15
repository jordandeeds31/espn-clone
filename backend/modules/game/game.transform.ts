import { formatTime } from "../../utils/utils.time";

const transformGames = (games: any[]) => {
  return games.map((game: any) => {
    const gameStarted = game.status.abstractGameState !== "Preview";

    const gameData: any = {
      awayTeam: {
        team: game.teams.away.team.name,
        teamId: game.teams.away.team.id,
      },
      homeTeam: {
        team: game.teams.home.team.name,
        teamId: game.teams.home.team.id,
      },
      gameState: game.status.abstractGameState,
      gameTime: formatTime(game.gameDate),
    };

    if (gameStarted) {
      gameData.awayTeam.score = game.teams.away.score;
      gameData.homeTeam.score = game.teams.home.score;
      gameData.liveData = {
        outs: game.linescore?.outs,
      };
    } else {
      gameData.awayTeam.record = {
        wins: game.teams.away.leagueRecord.wins,
        losses: game.teams.away.leagueRecord.losses,
      };
      gameData.homeTeam.record = {
        wins: game.teams.home.leagueRecord.wins,
        losses: game.teams.home.leagueRecord.losses,
      };
    }

    return gameData;
  });
};

export default transformGames;
