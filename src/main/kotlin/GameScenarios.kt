import kotlinx.coroutines.experimental.delay

typealias RoundResult = Boolean

suspend fun runShuffles(gameCards: List<GameCard>, gameRound: GameRound, moveCards: (List<CardMove>) -> Unit) {
    for (s in shufflesForRound(gameCards, gameRound.moves)) {
        delay(1000)

        moveCards(toCardMoves(s.shuffled))

    }

}


suspend fun runRound(
        enableInteraction: (Boolean) -> Unit,
        gameCards: List<GameCard>,
        gameRound: GameRound,
        moveCards: (List<CardMove>) -> Unit,
        showCards: (List<GameCard>) -> Unit,
        hideCards: (List<GameCard>) -> Unit,
        showCardQuest: (GameCard, Int) -> Unit,
        hideCardQuest: () -> Unit,
        userCardChoose: suspend (List<GameCard>) -> GameCard

): RoundResult {
    enableInteraction(false)

    delay(1000)

    showCards(gameCards.filter { !it.isEmpty() })

    delay(2000)

    hideCards(gameCards.filter { !it.isEmpty() })

    delay(1000)

    runShuffles(gameCards, gameRound, moveCards)

    delay(1000)

    val roundResult = runQuest(
            gameCards,
            gameRound,
            { showCards(listOf(it)) },
            { hideCards(listOf(it)) },
            showCardQuest,
            hideCardQuest,
            userCardChoose,
            enableInteraction)

    enableInteraction(false)

    return roundResult
}

suspend fun runQuest(
        gameCards: List<GameCard>,
        gameRound: GameRound,
        showCard: (GameCard) -> Unit,
        hideCard: (GameCard) -> Unit,
        showCardQuest: (GameCard, Int) -> Unit,
        hideCardQuest: () -> Unit,
        userCardChoose: suspend (List<GameCard>) -> GameCard,
        enableInteraction: (Boolean) -> Unit


): RoundResult {

    for (symbolGameCards in gameCards.filter { !it.isEmpty() }.groupBy { it.symbol }) {
        var cardsLeft = symbolGameCards.value.size

        for (questedCard in symbolGameCards.value) {
            showCardQuest(questedCard, cardsLeft)

            enableInteraction(true)

            val chosenCard = userCardChoose(gameCards)

            enableInteraction(false)

            println("User chose $chosenCard")

            showCard(chosenCard)

            delay(1000)

            if (chosenCard.symbol == questedCard.symbol) {
                cardsLeft--
            } else {
                hideCardQuest()

                //TODO отразить корректность / ошибку

                println("User chose ${chosenCard.symbol}, but right was ${questedCard.symbol}")

                return false
            }

            println("cardsLeft = $cardsLeft")
        }
    }

    hideCardQuest()

    return true
}

suspend fun runLevel(
        gameLevelNumber: GameLevelNumber,
        gameLevelConditions: GameLevelConditions,

        createUICards: (List<GameCard>) -> Unit,
        deleteUICards: (List<GameCard>) -> Unit,

        showLevelGamerStatus: (GameLevelNumber, Int) -> Unit,

        enableInteraction: (Boolean) -> Unit,
//        gameCards: List<GameCard>,
//        gameRound: GameRound,
        moveCards: (List<CardMove>) -> Unit,
        showCards: (List<GameCard>) -> Unit,
        hideCards: (List<GameCard>) -> Unit,
        showCardQuest: (GameCard, Int) -> Unit,
        hideCardQuest: () -> Unit,
        userCardChoose: suspend (List<GameCard>) -> GameCard
): CurrentLevelGamerStatus {
    val playableCells = getPlayableCells(4, 4, gameLevelConditions.cardsCount)

    var currentLevelGamerStatus = CurrentLevelGamerStatus(gameLevelNumber, gameLevelConditions, 0)

    showLevelGamerStatus(currentLevelGamerStatus.gameLevelNumber, currentLevelGamerStatus.rounds)

    while (!nextLevelReached(currentLevelGamerStatus) &&
            !mustDecreaseLevel(currentLevelGamerStatus)) {

        val gameCards = spreadSymbols(playableCells, 2)

        createUICards(gameCards)

        val roundResult = runRound(enableInteraction, gameCards, GameRound(gameLevelConditions.roundMoves), moveCards, showCards, hideCards, showCardQuest, hideCardQuest, userCardChoose)

        currentLevelGamerStatus = currentLevelGamerStatus.forRoundResult(roundResult)

        delay(1000)

        showLevelGamerStatus(currentLevelGamerStatus.gameLevelNumber, currentLevelGamerStatus.rounds)

        deleteUICards(gameCards)
    }

    return currentLevelGamerStatus
}

suspend fun runLevels(
        gameLevelsConditions: List<GameLevelConditions>,
        initialLevelNumber: GameLevelNumber,

        createUICards: (List<GameCard>) -> Unit,
        deleteUICards: (List<GameCard>) -> Unit,

        showLevelGamerStatus: (GameLevelNumber, Int) -> Unit,

        enableInteraction: (Boolean) -> Unit,

        moveCards: (List<CardMove>) -> Unit,
        showCards: (List<GameCard>) -> Unit,
        hideCards: (List<GameCard>) -> Unit,
        showCardQuest: (GameCard, Int) -> Unit,
        hideCardQuest: () -> Unit,
        userCardChoose: suspend (List<GameCard>) -> GameCard
) {
    var currentLevelGamerStatus = CurrentLevelGamerStatus(initialLevelNumber, gameLevelsConditions[initialLevelNumber - 1], 0)

    while (true) {
        currentLevelGamerStatus = runLevel(
                currentLevelGamerStatus.gameLevelNumber,
                currentLevelGamerStatus.gameLevelConditions,
                createUICards,
                deleteUICards,
                showLevelGamerStatus,
                enableInteraction,
                moveCards,
                showCards,
                hideCards,
                showCardQuest,
                hideCardQuest,
                userCardChoose
        )

        val nextLevelNumber = nextLevelIfAny(currentLevelGamerStatus, gameLevelsConditions)

        currentLevelGamerStatus = CurrentLevelGamerStatus(nextLevelNumber, gameLevelsConditions[nextLevelNumber - 1], 0)
    }
}