class PlatformRandom {
    fun nextInt(size: Int): Int = size
}

fun <T> randomChoose(source: List<T>): T = source.shuffled().asSequence().take(1).first()


fun <T> randomChoose(source: List<T>, count: Int): List<T> {
    require(count > 0 && count <= source.size);

    val result = source.shuffled().take(count)

    return result
}


fun <T> randomChooseWithIndexes(source: List<T>, count: Int = 1): List<IndexedValue<T>> {
    require(count > 0 && count <= source.size);

    val result = source.withIndex().shuffled().take(count)

    return result
}

