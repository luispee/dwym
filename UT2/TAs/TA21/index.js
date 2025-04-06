const input = document.getElementById("TA21");

input.addEventListener("focus", (event) => {
  input.style.border = "5px solid";
  })

input.addEventListener("blur", (event) => {
  input.style.border = "";
  })