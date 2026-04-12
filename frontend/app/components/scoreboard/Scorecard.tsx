import { Game } from "@/app/types/games.types"

type ScoreboardProps = {
    game: Game
}

const Scorecard = ({ game }: ScoreboardProps) => {
    console.log(game);
    const { awayTeam, homeTeam, gameState, gameTime } = game;
    return (
        <div className="">
            {gameState !== "Preview" ? (
                <div className="w-50 border-r border-gray-300 p-1.25">
                    <p className="text-[12px]">{gameState}</p>
                    <div className="flex justify-between">
                        <p className="text-[12px]">{awayTeam.team}</p>
                        <p className="text-[12px]">{awayTeam.score}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-[12px]">{homeTeam.team}</p>
                        <p className="text-[12px]">{homeTeam.score}</p>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Scorecard
