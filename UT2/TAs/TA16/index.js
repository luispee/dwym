const toggleButton = document.createElement("button");
toggleButton.textContent = "Mostrar/Ocultar";
toggleButton.addEventListener("click", function() {
    const x = document.querySelector("p");
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
});
document.getElementsByTagName("p")[0].before(toggleButton);
