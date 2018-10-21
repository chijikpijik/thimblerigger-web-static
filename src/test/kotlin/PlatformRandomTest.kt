import kotlin.test.*


class PlatformRandomTest {

    @Test
    fun nextInt() {
        val l = mutableListOf(1,2,3,4)
        println(l)
        println(l.shuffle())
    }
}