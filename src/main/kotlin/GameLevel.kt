import kotlin.math.max
import kotlin.math.min

typealias GameLevelNumber = Int


data class GameLevelConditions(
        val roundsToNextLevel: Int,
        val roundsToPreviousLevel: Int,
        val cardsCount: Int,
        val nonEmptyCardsCount: Int,
        val symbolsCount: Int,
        val roundMoves: Int
) {
    init {
        require(roundsToNextLevel > 0)
        require(roundsToPreviousLevel >= 0)
        require(cardsCount > 0)
        require(nonEmptyCardsCount > 0)
        require(symbolsCount > 0)
        require(roundMoves > 0)

        require(nonEmptyCardsCount <= cardsCount)
        require(symbolsCount <= nonEmptyCardsCount)
    }
}

data class CurrentLevelGamerStatus(
        val gameLevelNumber: GameLevelNumber,
        val gameLevelConditions: GameLevelConditions,
        val rounds: Int
) {
    init {
        require(rounds <= gameLevelConditions.roundsToNextLevel &&
                rounds >= -gameLevelConditions.roundsToPreviousLevel)
    }

    fun forRoundResult(roundResult: RoundResult) =
            CurrentLevelGamerStatus(
                    gameLevelNumber,
                    gameLevelConditions,
                    if (roundResult)
                        min(rounds + 1, gameLevelConditions.roundsToNextLevel)
                    else
                        max(rounds - 1, -gameLevelConditions.roundsToPreviousLevel)
            )
}

fun nextLevelReached(currentLevelGamerStatus: CurrentLevelGamerStatus) =
        currentLevelGamerStatus.rounds == currentLevelGamerStatus.gameLevelConditions.roundsToNextLevel

fun mustDecreaseLevel(currentLevelGamerStatus: CurrentLevelGamerStatus) =
        currentLevelGamerStatus.rounds == -currentLevelGamerStatus.gameLevelConditions.roundsToPreviousLevel

fun nextLevelIfAny(currentLevelGamerStatus: CurrentLevelGamerStatus, gameLevelsConditions: List<GameLevelConditions>): GameLevelNumber {
    if (!nextLevelReached(currentLevelGamerStatus) && !mustDecreaseLevel(currentLevelGamerStatus)) return currentLevelGamerStatus.gameLevelNumber

    if (nextLevelReached(currentLevelGamerStatus) && currentLevelGamerStatus.gameLevelNumber == gameLevelsConditions.size) return currentLevelGamerStatus.gameLevelNumber

    if (mustDecreaseLevel(currentLevelGamerStatus) && currentLevelGamerStatus.gameLevelNumber == 1) return 1

    return if (nextLevelReached(currentLevelGamerStatus))
        currentLevelGamerStatus.gameLevelNumber + 1
    else
        currentLevelGamerStatus.gameLevelNumber - 1
}


