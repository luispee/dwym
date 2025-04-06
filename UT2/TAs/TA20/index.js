const imagen = document.getElementById("imagen");

imagen.addEventListener("mouseenter", (event) => {
    imagen.setAttribute('src', 'version3.png')
  })

  imagen.addEventListener("mouseout", (event) => {
    imagen.setAttribute('src', 'version2.png')
  })