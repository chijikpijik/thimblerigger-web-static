class TwoDArray<T> constructor(
        val rows: Int,
        val cols: Int,
        vararg values: T
) {
    private var array: List<List<T>> = listOf()

    init {
        require(cols > 0)
        require(rows > 0)
        require(values.size == cols * rows)

        val arr = ArrayList<List<T>>(rows)

        for (i in 0..rows) {
            arr[i] = values.slice(i * cols..(i + 1) * cols)
        }
        array = arr
    }


    fun get(row: Int, col: Int): T = array[row][col]
}

fun <T> twoDArray(rows: Int,
                  cols: Int,
                  vararg values: T)
        : List<List<T>> {
    require(cols > 0)
    require(rows > 0)
    require(values.size == cols * rows)


    return values.asIterable().chunked(cols)
}

fun <T> twoDMutableArray(rows: Int,
                         cols: Int,
                         vararg values: T)
        : MutableList<MutableList<T>> {
    require(cols > 0)
    require(rows > 0)
    require(values.size == cols * rows)

    val arr = ArrayList<MutableList<T>>(rows)

    for (i in 0..rows) {
        arr[i] = values.slice(i * cols..(i + 1) * cols - 1).toMutableList()
    }

    return arr
}