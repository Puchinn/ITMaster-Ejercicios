const formulario = document.querySelector("form")
const numero = document.getElementById("numero")
const parrafo = document.getElementById("parrafo")
const mensaje = document.getElementById("mensaje")

formulario.addEventListener("submit",(e)=>{
  e.preventDefault()
  const nroMayorIgual10 = numero.value >= 10
  if(nroMayorIgual10){
    parrafo.style.fontSize = `${numero.value}px`
    mensaje.textContent = "Tamaño de fuente actualizado ! 😏"
  }else{
    mensaje.textContent = "El numero es inferior a 10 😠"
  }
})