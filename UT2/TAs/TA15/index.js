function añadirElemento() {
    const input = document.getElementById("userInput");
    // Crear un nuevo elemento de lista
    const nuevoElemento = document.createElement("li");
    // Asignar un texto al nuevo elemento
    nuevoElemento.textContent = input.value;
    // Añadir el nuevo elemento a la lista
    document.querySelector("ul").appendChild(nuevoElemento);
    // Limpiar el campo de entrada
    input.value = "";
}

const deleteButton = document.createElement("button");
deleteButton.textContent = "Eliminar Elemento";
deleteButton.addEventListener("click", function() {
    const lista = document.querySelector("ul");
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild);
    }
});
document.getElementsByTagName("button")[0].after(deleteButton);
