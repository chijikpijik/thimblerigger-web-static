object Constants {


    const val MOVABLE_BOX_ID_PREFIX = "MOVABLE_BOX_ID_"
    const val SCALABLE_BOX_ID_PREFIX = "SCALABLE_BOX_ID_"

    const val GAME_CARD_ID_PREFIX = "UI_GAME_CARD_ID_"

    const val MOVABLE_BOX_1_ID = "MOVABLE_BOX_1_ID"
    const val SCALABLE_BOX_1_ID = "SCALABLE_BOX_1_ID"
    const val SCALABLE_BOX_2_ID = "SCALABLE_BOX_2_ID"


    const val EMPTY_CELL_SYMBOL = "EMPTY_CELL_SYMBOL"

    val SYMBOLS = listOf("support", "sun")

    val SYMBOLS_IMAGES = mapOf(
            "support" to "icons8-support-framed-0.svg",
            "sun" to "icons8-sun.svg")

    val MOVABLE_BOX_CLASSES = twoDArray(
            4,
            4,
            "box-0-0",
            "box-0-1",
            "box-0-2",
            "box-0-3",
            "box-1-0",
            "box-1-1",
            "box-1-2",
            "box-1-3",
            "box-2-0",
            "box-2-1",
            "box-2-2",
            "box-2-3",
            "box-3-0",
            "box-3-1",
            "box-3-2",
            "box-3-3")


    val CELLS_PLACEMENT = listOf(

            CellsField(4, 4,
                    0, 0, 0, 0,
                    0, 1, 1, 0,
                    0, 1, 1, 0,
                    0, 0, 0, 0
            ),
            CellsField(4, 4,
                    1, 0, 0, 1,
                    0, 0, 0, 0,
                    0, 0, 0, 0,
                    1, 0, 0, 1
            ),
            CellsField(4, 4,
                    1, 0, 0, 1,
                    0, 0, 0, 0,
                    0, 1, 1, 0,
                    0, 0, 0, 0
            ),
            CellsField(4, 4,
                    1, 0, 0, 1,
                    0, 0, 0, 0,
                    0, 0, 0, 0,
                    0, 1, 1, 0
            ),
            CellsField(4, 4,
                    1, 0, 1, 0,
                    0, 0, 0, 0,
                    0, 0, 0, 0,
                    0, 1, 0, 1
            ),
            CellsField(4, 4,
                    0, 1, 0, 0,
                    0, 0, 0, 1,
                    1, 0, 0, 0,
                    0, 0, 1, 0
            ),
            CellsField(4, 4,
                    1, 0, 0, 0,
                    0, 1, 1, 0,
                    0, 1, 0, 0,
                    0, 0, 0, 0
            ),
            CellsField(4, 4,
                    1, 0, 0, 0,
                    0, 1, 0, 1,
                    1, 0, 0, 1,
                    0, 0, 1, 0),

            CellsField(4, 4,
                    1, 0, 1, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    0, 1, 0, 1
            ),
            CellsField(4, 4,
                    0, 1, 0, 0,
                    0, 1, 0, 1,
                    1, 0, 0, 0,
                    0, 0, 1, 1
            ),
            CellsField(4, 4,
                    1, 0, 0, 1,
                    0, 1, 1, 0,
                    0, 1, 0, 0,
                    0, 0, 0, 1
            ),
            CellsField(4, 4,
                    1, 0, 0, 1,
                    0, 1, 0, 0,
                    0, 0, 0, 1,
                    1, 0, 1, 0))

}

object CommonUIConstants {
    const val MOVABLE_BOX_CLASS = "box-0-1"
    const val MOVABLE_BOX_1_CLASS = "box-3-2"

    const val COMMON_MOVABLE_BOX_CLASS = "box-common"

    const val SCALABLE_BOX_NS_SQUEEZED_CLASS = "scalable-box-ns-squeezed"
    const val SCALABLE_BOX_NS_NORMAL_CLASS = "scalable-box-ns-normal"

    const val SCALABLE_BOX_SN_SQUEEZED_CLASS = "scalable-box-sn-squeezed"
    const val SCALABLE_BOX_SN_NORMAL_CLASS = "scalable-box-sn-normal"

    const val VISIBLE_CLASS = "visible"
    const val INVISIBLE_CLASS = "invisible"

    const val FLEX_ITEM_AUTO_CLASS = "flex-item-auto"

    const val TOP_CONTAINER_ID = "top-container"
    const val GAME_FIELD_CONTAINER_ID = "game-field-container"
    const val BOTTOM_CONTAINER_ID = "bottom-container"
}