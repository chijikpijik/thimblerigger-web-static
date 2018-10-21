import CommonUIConstants.BOTTOM_CONTAINER_ID
import CommonUIConstants.TOP_CONTAINER_ID
import Constants.SYMBOLS_IMAGES
import kotlinx.coroutines.experimental.channels.Channel
import kotlin.browser.document

fun main(args: Array<String>) {


    launch {
        val face = loadResource("images/${SYMBOLS_IMAGES["sun"]}")
        val back = loadResource("images/question-64-vectorpaint-framed.svg")

        val cardFaceSvgs = mapOf("${SYMBOLS_IMAGES["sun"]}" to face)

        val userChosenUICardsChannel = Channel<UICard>()

        var interactionEnabled = false

        var uiCards: List<UICard> = listOf()

        val quest = Quest(cardFaceSvgs).init(document.getElementById(BOTTOM_CONTAINER_ID)!!)

        val levelInfo = LevelInfo().init(document.getElementById(TOP_CONTAINER_ID)!!)

        runLevels(
                listOf(
                        GameLevelConditions(3, 2, 4, 2, 1, 2),
                        GameLevelConditions(3, 2, 6, 2, 1, 3)),
                1,
                {
                    uiCards = cellsToCards(
                            it,
                            back,
                            cardFaceSvgs,
                            { if (interactionEnabled) userChosenUICardsChannel.send(it) }
                    )
                },
                { cards -> cards.map { getUICard(it, uiCards).uiElementId }.forEach { removeUIElementWithId(it) } },
                { n, r -> levelInfo.showStatus(n, r) },
                { interactionEnabled = it },
                { moves -> moveUICards(moves, uiCards) },
                { showCards(it.map { getUICard(it, uiCards) }.toList()) },
                { hideCards(it.map { getUICard(it, uiCards) }.toList()) },
                { gameCard, i -> quest.quest(gameCard.symbol, i) },
                { quest.hide() },
                { getGameCard(it, userChosenUICardsChannel.receive()) }

        )

    }
}
