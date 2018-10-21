typealias Symbol = String
typealias CardId = String
typealias CellCoords = Pair<Int, Int>

data class GameCard(
        val placement: CellCoords,
        val symbol: Symbol,
        val cardId: CardId
) {
    fun isEmpty() = symbol == Constants.EMPTY_CELL_SYMBOL

    fun withNewPlacement(newPlacement: CellCoords) = GameCard(newPlacement, symbol, cardId)
}

data class CardMove(
        val card: GameCard,
        val newPlacement: CellCoords
)

data class ShuffleResult(
        val shuffled: Pair<GameCard, GameCard>,
        val newCards: List<GameCard>
) {
    init {
        require(shuffled.first.cardId != shuffled.second.cardId) { "Expected different cards but got ${shuffled.first.cardId}" }
    }
}

data class GameRound(
        val moves: Int
)

data class GameLevel(
        val difficulty: Int,
        val rounds: Int
)

class ShufflesState(
        private val cardsCount: Int
) {
    private var counter = 0

    private val shuffleHistory: MutableList<ShuffleResult> = mutableListOf()

    fun getShuffleResults() = shuffleHistory.toList()

    fun addShuffleResult(shuffleResult: ShuffleResult) {
        shuffleHistory.add(shuffleResult)
        counter = if (cardsCount - counter * 2 > 0) counter + 1 else 0
    }

    fun resetCounter() {
        counter = 0
    }

    fun cardsAlreadyShuffled(): Set<CardId> =
            shuffleHistory
                    .takeLast(counter)
                    .flatMap { listOf(it.shuffled.first.cardId, it.shuffled.second.cardId) }
                    .toSet()

}

class CellsField(
        val rows: Int,
        val cols: Int,
        vararg values: Int) {
    init {
        require(cols > 0)
        require(rows > 0)
        require(values.size == cols * rows)
    }

    val cellCoords: List<CellCoords> =
            values
                    .asIterable()
                    .chunked(cols)
                    .withIndex()
                    .flatMap { (index, value) ->
                        value.withIndex().filter { it.value > 0 }.map { CellCoords(index, it.index) }
                    }

    val playableCellsCount = cellCoords.size
}