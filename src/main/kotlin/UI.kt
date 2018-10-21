import CommonUIConstants.COMMON_MOVABLE_BOX_CLASS
import CommonUIConstants.FLEX_ITEM_AUTO_CLASS
import CommonUIConstants.GAME_FIELD_CONTAINER_ID
import CommonUIConstants.INVISIBLE_CLASS
import CommonUIConstants.SCALABLE_BOX_NS_NORMAL_CLASS
import CommonUIConstants.SCALABLE_BOX_NS_SQUEEZED_CLASS
import CommonUIConstants.SCALABLE_BOX_SN_NORMAL_CLASS
import CommonUIConstants.SCALABLE_BOX_SN_SQUEEZED_CLASS
import CommonUIConstants.VISIBLE_CLASS
import Constants.GAME_CARD_ID_PREFIX
import Constants.MOVABLE_BOX_CLASSES
import Constants.MOVABLE_BOX_ID_PREFIX
import Constants.SCALABLE_BOX_ID_PREFIX
import Constants.SYMBOLS_IMAGES
import kotlinx.coroutines.experimental.GlobalScope
import kotlinx.coroutines.experimental.launch
import kotlinx.html.classes
import kotlinx.html.div
import kotlinx.html.dom.append
import kotlinx.html.id
import kotlinx.html.js.div
import org.w3c.dom.Node
import org.w3c.dom.asList
import org.w3c.dom.parsing.DOMParser
import kotlin.browser.document


class UICard(
        val cardId: CardId,
        val movable_box_1_id: String,
        val movable_box_class: String,
        val scalable_box_1_id: String,
        val scalable_box_2_id: String,
        val cardFaceSvg: String,
        val cardBackSvg: String,
        private val onClick: suspend (UICard) -> Unit


) {
    val uiElementId: String = GAME_CARD_ID_PREFIX + cardId


    init {
//val svg =
//        document.create.svg(null, "") as SVGSVGElement


        document.getElementById(GAME_FIELD_CONTAINER_ID)!!.append {
            div {
                id = uiElementId
                classes = setOf(movable_box_class, COMMON_MOVABLE_BOX_CLASS)

                div {
                    id = scalable_box_1_id
                    classes = setOf(SCALABLE_BOX_NS_NORMAL_CLASS)
                }

                div {
                    id = scalable_box_2_id
                    classes = setOf(SCALABLE_BOX_SN_SQUEEZED_CLASS)
                }
            }
        }

        val cardFaceDoc = DOMParser().parseFromString(cardFaceSvg, "image/svg+xml")
        val cardBackDoc = DOMParser().parseFromString(cardBackSvg, "image/svg+xml")

        document.getElementById(scalable_box_1_id)!!.appendChild(cardBackDoc.rootElement!!)
        document.getElementById(scalable_box_2_id)!!.appendChild(cardFaceDoc.rootElement!!)

        val thisCard = this

        document.getElementById(uiElementId)!!.addEventListener("click", { GlobalScope.launch { onClick(thisCard) } })
    }


}


fun moveUICard(uiCard: UICard, move: CardMove) {
//    println("\nTransition ${uiCard.cardId} ${uiCard.uiElementId} ${move}");

    val x = document.getElementById(uiCard.uiElementId)!!

//    println(MOVABLE_BOX_CLASSES[move.newPlacement.first][move.newPlacement.second])

    x.className = "${MOVABLE_BOX_CLASSES[move.newPlacement.first][move.newPlacement.second]} $COMMON_MOVABLE_BOX_CLASS"
}


fun updateCardsScale(uiCards: List<UICard>) {
    uiCards.forEach { scale(it.scalable_box_1_id, it.scalable_box_2_id) }
}

fun showCards(uiCards: List<UICard>) {
    uiCards.forEach { scale2toNormal(it.scalable_box_1_id, it.scalable_box_2_id) }
}

fun hideCards(uiCards: List<UICard>) {
    uiCards.forEach { scale1toNormal(it.scalable_box_1_id, it.scalable_box_2_id) }
}

fun scale(scalable_box_1_id: String,
          scalable_box_2_id: String) {
    val x = document.getElementById(scalable_box_1_id)!!
    if (x.className == SCALABLE_BOX_NS_SQUEEZED_CLASS) {
        x.className = SCALABLE_BOX_NS_NORMAL_CLASS;
    } else {
        x.className = SCALABLE_BOX_NS_SQUEEZED_CLASS;
    }

    val y = document.getElementById(scalable_box_2_id)!!
    if (y.className == SCALABLE_BOX_SN_SQUEEZED_CLASS) {
        y.className = SCALABLE_BOX_SN_NORMAL_CLASS;
    } else {
        y.className = SCALABLE_BOX_SN_SQUEEZED_CLASS;
    }
}

fun scale1toNormal(scalable_box_1_id: String,
                   scalable_box_2_id: String) {
    val x = document.getElementById(scalable_box_1_id)!!
    if (x.className == SCALABLE_BOX_NS_SQUEEZED_CLASS) {
        x.className = SCALABLE_BOX_NS_NORMAL_CLASS;
    }

    val y = document.getElementById(scalable_box_2_id)!!
    if (y.className == SCALABLE_BOX_SN_NORMAL_CLASS) {
        y.className = SCALABLE_BOX_SN_SQUEEZED_CLASS;
    }
}

fun scale2toNormal(scalable_box_1_id: String,
                   scalable_box_2_id: String) {
    val x = document.getElementById(scalable_box_1_id)!!
    if (x.className == SCALABLE_BOX_NS_NORMAL_CLASS) {
        x.className = SCALABLE_BOX_NS_SQUEEZED_CLASS;
    }

    val y = document.getElementById(scalable_box_2_id)!!
    if (y.className == SCALABLE_BOX_SN_SQUEEZED_CLASS) {
        y.className = SCALABLE_BOX_SN_NORMAL_CLASS;
    }
}

fun removeUIElementWithId(id: String) {
    val element = document.getElementById(id);
    element?.parentNode?.removeChild(element);
}

//fun updateScale() {
//    println("Scale");
//
//
//    val x = document.getElementById(SCALABLE_BOX_1_ID)!!
//    if (x.className == SCALABLE_BOX_NS_SQUEEZED_CLASS) {
//        x.className = SCALABLE_BOX_NS_NORMAL_CLASS;
//    } else {
//        x.className = SCALABLE_BOX_NS_SQUEEZED_CLASS;
//    }
//
//    val y = document.getElementById(SCALABLE_BOX_2_ID)!!
//    if (y.className == SCALABLE_BOX_SN_SQUEEZED_CLASS) {
//        y.className = SCALABLE_BOX_SN_NORMAL_CLASS;
//    } else {
//        y.className = SCALABLE_BOX_SN_SQUEEZED_CLASS;
//    }
//}

fun cellsToCards(gameCards: List<GameCard>,
                 cardBackSvg: String,
                 cardFaceSvgs: Map<String, String>,
                 onClick: suspend (UICard) -> Unit) =
        gameCards.withIndex().map {
            UICard(
                    it.value.cardId,
                    MOVABLE_BOX_ID_PREFIX + "_${it.index}",
                    MOVABLE_BOX_CLASSES[it.value.placement.first][it.value.placement.second],
                    SCALABLE_BOX_ID_PREFIX + "_${it.index}_1",
                    SCALABLE_BOX_ID_PREFIX + "_${it.index}_2",
                    when (it.value.isEmpty()) {
                        false -> cardFaceSvgs[SYMBOLS_IMAGES[it.value.symbol]]!!
                        true -> cardBackSvg
                    },
                    cardBackSvg,
                    onClick
            )
        }

fun moveUICards(moves: List<CardMove>, uiCards: List<UICard>) {
    moves.forEach { move ->
        moveUICard(
                getUICard(move.card, uiCards),
                move)
    }
}

fun getUICard(gameCard: GameCard, uiCards: List<UICard>) = uiCards.first { it.cardId == gameCard.cardId }

fun getGameCard(gameCards: List<GameCard>, uiCard: UICard) = gameCards.first { it.cardId == uiCard.cardId }


class Quest(
        private val cardFaceSvgs: Map<Symbol, String>
) {
    val elementId = "quest-container"
    val questedCardId = "QUESTED_CARD"
    val questedTextId = "QUESTED_TEXT"

    fun init(node: Node): Quest {
        node.append {
            div {
                id = elementId
                classes = setOf(INVISIBLE_CLASS)

//                div {
//                    id = scalable_box_1_id
//                    classes = setOf(SCALABLE_BOX_NS_NORMAL_CLASS)
//                }
//
//                div {
//                    id = scalable_box_2_id
//                    classes = setOf(SCALABLE_BOX_SN_SQUEEZED_CLASS)
//                }
            }
        }

        return this
    }

    fun quest(symbol: Symbol, count: Int = 0) {
        document.getElementById(elementId)!!.className = VISIBLE_CLASS

        val childNodes = document.getElementById(elementId)!!.childNodes

        println("quest child nodes count = ${childNodes.asList().count()}")

        listOf(document.getElementById(questedCardId), document.getElementById(questedTextId))
                .filterNotNull()
                .forEach { document.getElementById(elementId)!!.removeChild(it) }


        document.getElementById(elementId)!!.append {

            div {
                id = questedCardId
                classes = setOf(FLEX_ITEM_AUTO_CLASS)
            }

            div {
                id = questedTextId
                classes = setOf(FLEX_ITEM_AUTO_CLASS)
                +"${if (count > 0) " * $count" else ""} - ?"

            }

        }

        val cardFaceDoc = DOMParser().parseFromString(cardFaceSvgs[SYMBOLS_IMAGES[symbol]]!!, "image/svg+xml")

        document.getElementById(questedCardId)!!.appendChild(cardFaceDoc.rootElement!!)
    }

    fun hide() {
        document.getElementById(elementId)!!.className = INVISIBLE_CLASS
    }
}

class LevelInfo {
    val elementId = "level-info-container"
    val levelNumberId = "level-info-level-number"
    val roundsToId = "level-info-rounds-to"

    fun init(node: Node): LevelInfo {
        node.append {
            div {
                id = elementId
                classes = setOf(VISIBLE_CLASS)

                div {
                    id = levelNumberId
                    classes = setOf(FLEX_ITEM_AUTO_CLASS)
                    +"Level: 1"
                }

                div {
                    id = roundsToId
                    classes = setOf(FLEX_ITEM_AUTO_CLASS)
                    +"Rounds: 0"
                }
            }
        }

        return this
    }

    fun showStatus(levelNumber: GameLevelNumber, rounds: Int) {
//        val childNodes = document.getElementById(elementId)!!.childNodes

//        println("quest child nodes count = ${childNodes.asList().count()}")

        listOf(document.getElementById(levelNumberId), document.getElementById(roundsToId))
                .filterNotNull()
                .forEach { document.getElementById(elementId)!!.removeChild(it) }


        document.getElementById(elementId)!!.append {

            div {
                id = levelNumberId
                classes = setOf(FLEX_ITEM_AUTO_CLASS)
                +"Level: $levelNumber"
            }

            div {
                id = roundsToId
                classes = setOf(FLEX_ITEM_AUTO_CLASS)
                +"Rounds: $rounds"
            }

        }
    }
}
