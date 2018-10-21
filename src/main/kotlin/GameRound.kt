import Constants.EMPTY_CELL_SYMBOL

fun List<GameCard>.getWithId(cardId: CardId) = this.first { it.cardId == cardId }

fun symbolsForRound(count: Int): List<Symbol> = MutableList(count, { Constants.SYMBOLS[1] })

fun spreadSymbols(playableCells: List<CellCoords>, count: Int): List<GameCard> {
    require(playableCells.size >= count)

    val symbols = symbolsForRound(count)

    val chosenCells = randomChoose(
            playableCells.withIndex().toList(),
            count)

    val chosenIndexes = chosenCells.map { it.index }

    return playableCells.withIndex().map {

        when (it.index) {
            in chosenIndexes -> GameCard(it.value, symbols[chosenIndexes.indexOf(it.index)], it.index.toString())
            else -> GameCard(it.value, EMPTY_CELL_SYMBOL, it.index.toString())
        }
    }
}

fun getPlayableCells(rows: Int, columns: Int, minPlayableCellsCount: Int): List<CellCoords> =
        Constants.CELLS_PLACEMENT
                .filter { it.rows == rows && it.cols == columns }
                .filter { it.playableCellsCount == minPlayableCellsCount }
                .shuffled().first()
                .cellCoords

fun shuffle(cards: List<GameCard>, shufflesState: ShufflesState): ShuffleResult {
    val choose = chooseCardsToInterchange(cards, shufflesState)

    println(choose)

    val newCards = cards.toMutableList()

    newCards[newCards.indexOf(choose.first)] = choose.first.withNewPlacement(choose.second.placement)
    newCards[newCards.indexOf(choose.second)] = choose.second.withNewPlacement(choose.first.placement)

    return ShuffleResult(
            Pair(choose.first, choose.second),
            newCards
    )
}


fun chooseCardsToInterchange(cards: List<GameCard>, shufflesState: ShufflesState): Pair<GameCard, GameCard> {
    val nonEmptyCards = cards.filterNot { it.isEmpty() }.map { it.cardId }.toSet()

    val lastShuffledCards = shufflesState.cardsAlreadyShuffled()

    val nonEmptyLeft = nonEmptyCards.minus(lastShuffledCards)

    return when (nonEmptyLeft.size) {
        0 -> {
            shufflesState.resetCounter()
            val firstToShuffle = nonEmptyCards.first()
            cards.getWithId(firstToShuffle) to randomChoose(othersToShuffle(cards, firstToShuffle, lastShuffledCards))
        }
        else -> {
            val firstToShuffle = randomChoose(nonEmptyLeft.toList())
            cards.getWithId(firstToShuffle) to randomChoose(othersToShuffle(cards, firstToShuffle, lastShuffledCards))
        }
    }

}

fun othersToShuffle(cards: List<GameCard>, firstToShuffle: CardId, lastShuffledCards: Set<CardId>) =
        if (lastShuffledCards.size == cards.size || lastShuffledCards.isEmpty())
            cards.filterNot { it.cardId == firstToShuffle }
        else
            cards.filterNot { it.cardId == firstToShuffle || lastShuffledCards.contains(it.cardId) }


fun shufflesForRound(cards: List<GameCard>, moves: Int): List<ShuffleResult> {
    var moveCards: List<GameCard> = cards
    val shufflesState = ShufflesState(cards.size)

    for (i in 1..moves) {
        val shuffleResult = shuffle(moveCards, shufflesState)
        shufflesState.addShuffleResult(shuffleResult)
        moveCards = shuffleResult.newCards
    }

    return shufflesState.getShuffleResults()
}

fun toCardMoves(shuffled: Pair<GameCard, GameCard>): List<CardMove> =
        listOf(
                CardMove(shuffled.first, shuffled.second.placement),
                CardMove(shuffled.second, shuffled.first.placement)
        )