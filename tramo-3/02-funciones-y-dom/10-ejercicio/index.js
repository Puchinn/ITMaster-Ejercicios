const caja = document.getElementById("caja")
const boton = document.querySelector("button")

boton.addEventListener("click", () => {
  caja.classList.toggle("seleccionado")
})