const nombres = document.querySelector("ul").innerText.split("\n");
function buscarElemento() {
    let input = document.querySelector("input");
    
    let resultado = nombres.filter((elemento) => {
        return elemento.toLowerCase().startsWith(input.value.toLowerCase());
    });
    
    console.log(resultado);
    let display = document.querySelector("ul");
    let html = "";
    resultado.forEach(nombre => {
        html += "<li>" + nombre + "</li>";
    });

    display.innerHTML = html;
}


