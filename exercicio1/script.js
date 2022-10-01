function primeiroItem(texto, posicao){
    const lista = document.getElementById("lista")
    const item0 = document.createElement("li")
    const itemTexto = document.createTextNode(texto)
    item0.appendChild(itemTexto)
    lista.insertAdjacentElement(posicao, item0)
}
primeiroItem("item 0", "afterbegin")
primeiroItem("Item 5", "beforeend")

    // const lista = document.getElementById("lista")
    // const item0 = document.createElement("li")
    // const texto = document.createTextNode("Item 0")
    // item0.appendChild(texto)
    // lista.insertAdjacentElement("afterbegin", item0)
























