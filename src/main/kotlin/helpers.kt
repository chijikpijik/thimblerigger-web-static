import org.w3c.dom.Element
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLInputElement
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.coroutines.experimental.*
import kotlin.js.Promise

fun newDiv(init: HTMLDivElement.() -> Unit): HTMLDivElement = newElement("div", init)

fun newInput(init: HTMLInputElement.() -> Unit): HTMLInputElement = newElement("input", init)

fun <T : Element> newElement(localName: String, init: T.() -> Unit): T {
    val el = document.createElement(localName) as T
    el.init()
    return el
}

fun <T : Element> T.withChildren(vararg children: Element): T {
    children.forEach { this.appendChild(it) }
    return this
}


fun launch(block: suspend () -> Unit) {
    block.startCoroutine(object : Continuation<Unit> {
        override val context: CoroutineContext get() = EmptyCoroutineContext
        override fun resume(value: Unit) {}
        override fun resumeWithException(e: Throwable) {
            println("Coroutine failed: $e")
        }
    })
}

suspend fun <T> Promise<T>.await(): T = suspendCoroutine { cont ->
    then({ cont.resume(it) }, { cont.resumeWithException(it) })
}

suspend fun loadResource(url: String): String {
    return getRequest(url).await().responseText

//            .then {
//        println(it.responseText)
//    }

//    openFile("images/question-64-vectorpaint.svg").await()
//    println("step2!")
//    openFile("https://yesno.wtf/api").await()
//    println("step2!")
//    openFile("https://yesno.wtf/api").await()
//    println("done!")

}

fun getRequest(url: String): Promise<XMLHttpRequest> {
    val p = Promise<XMLHttpRequest> { resolve, reject ->
        val xhr = XMLHttpRequest()
        xhr.open("GET", url)
        xhr.addEventListener("load", { e ->
            resolve(xhr)
        })
        xhr.send()
    }
    return p
}