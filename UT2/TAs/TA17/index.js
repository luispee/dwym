
let contador = 1;
const contadorButton = document.createElement("button");
contadorButton.textContent = "Incrementar";
contadorButton.addEventListener("click", function() {
    const x = document.querySelector("p");
    
    x.innerHTML = contador
    contador++;
  });
  
document.getElementsByTagName("p")[0].after(contadorButton);
