// EJERCICIO 7
const formulario_7 = document.getElementById("form-7")
const parrafo_7 = document.querySelector(".parrafo-7")

formulario_7.addEventListener("submit", (e) => {
  e.preventDefault()
  const inputNumero = e.target.numero.value
  const esDivisible = inputNumero % 100 === 0
  if (esDivisible) {
    parrafo_7.textContent = "Siii, es divisible ! 😁"
  } else {
    parrafo_7.textContent = "nop, no es divisible 😒"
  }
})

// EJERCICIO 8
const formulario_8 = document.getElementById("form-8")
const parrafo_8 = document.querySelector(".parrafo-8")

formulario_8.addEventListener("submit", (e) => {
  e.preventDefault()
  const texto = e.target.texto.value
  const textoComienzaConA = texto.startsWith("A")
  const textoTieneLongitudDe8 = texto.length === 8

  if (textoComienzaConA && textoTieneLongitudDe8) {
    parrafo_8.textContent = "El texto es válido 😎"
  } else {
    parrafo_8.textContent = "El texto no es válido 😢"
  }
})

// EJERCICIO 9
const formulario_9 = document.getElementById("form-9")
const parrafo_9 = document.getElementById("parrafo-9")
const mensaje_9 = document.getElementById("mensaje-9")

formulario_9.addEventListener("submit", (e) => {
  e.preventDefault()
  const numero = e.target.numero.value
  const nroMayorIgual10 = numero >= 10
  if (nroMayorIgual10) {
    parrafo_9.style.fontSize = `${numero}px`
    mensaje_9.textContent = "Tamaño de fuente actualizado ! 😏"
  } else {
    mensaje_9.textContent = "El numero es inferior a 10 😠"
  }
})

// EJERCICIO 10
const caja = document.getElementById("caja")
const boton = document.getElementById("boton-10")

boton.addEventListener("click", () => {
  caja.classList.toggle("seleccionado")
})