import Image from "next/image";
import { Game } from "@/app/types/games.types"
import { typography, layout, logoSize } from "@/app/styles/common.styles"
import { scorecardStyles } from "./Scorecard.styles"
import MLB_TEAMS from "@/app/lib/constants/mlbTeams"

type ScoreboardProps = {
    game: Game
}

const Scorecard = ({ game }: ScoreboardProps) => {
    const { awayTeam, homeTeam, gameState, gameTime } = game;

    const MLB_TEAMS_REVERSE = Object.fromEntries(
        Object.entries(MLB_TEAMS).map(([abbr, name]) => [name, abbr])
    );

    const getAbbreviation = (teamName: string): string => {
        return MLB_TEAMS_REVERSE[teamName] ?? teamName;
    };

    return (
        <div>
            {gameState !== "Preview" ? (
                <div className={scorecardStyles.container}>
                    <p className={`${typography.xs} mb-2`}>{gameState}</p>
                    <div className={layout.row}>
                        <div className="flex gap-2">
                            <Image className="mb-2" src={`https://www.mlbstatic.com/team-logos/${awayTeam.teamId}.svg`} alt="" width={logoSize.width} height={logoSize.height} />
                            <p className={typography.xs}>{getAbbreviation(awayTeam.team)}</p>
                        </div>
                        <p className={typography.xs}>{awayTeam.score}</p>
                    </div>
                    <div className={layout.row}>
                        <div className="flex gap-2">
                            <Image src={`https://www.mlbstatic.com/team-logos/${homeTeam.teamId}.svg`} alt="" width={logoSize.width} height={logoSize.height} />
                            <p className={typography.xs}>{getAbbreviation(homeTeam.team)}</p>
                        </div>
                        <p className={typography.xs}>{homeTeam.score}</p>
                    </div>
                </div>
            ) : (
                <div className={scorecardStyles.container}>
                    <p className={typography.xs}>{gameTime}</p>
                    <div className={layout.row}>
                        <div className="flex gap-2">
                            <Image className="" src={`https://www.mlbstatic.com/team-logos/${awayTeam.teamId}.svg`} alt="" width={logoSize.width} height={logoSize.height} />
                            <p className={typography.xs}>{getAbbreviation(awayTeam.team)}</p>
                        </div>
                    </div>
                    <div className={layout.row}>
                        <div className="flex gap-2">
                            <Image src={`https://www.mlbstatic.com/team-logos/${homeTeam.teamId}.svg`} alt="" width={logoSize.width} height={logoSize.height} />
                            <p className={typography.xs}>{getAbbreviation(homeTeam.team)}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Scorecard