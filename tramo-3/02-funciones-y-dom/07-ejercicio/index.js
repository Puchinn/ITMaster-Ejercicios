const formulario = document.getElementById("form")
const inputNumero = document.getElementById("numero")
const parrafo = document.querySelector(".parrafo")

formulario.addEventListener("submit", (e) => {
  e.preventDefault()
  const esDivisible = inputNumero.value % 100 === 0
  if (esDivisible) {
    parrafo.textContent = "Siii, es divisible ! 😁"
  } else {
    parrafo.textContent = "nop, no es divisible 😒"
  }
})