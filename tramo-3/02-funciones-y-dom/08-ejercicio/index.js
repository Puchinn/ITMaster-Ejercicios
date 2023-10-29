const formulario = document.querySelector("form")
const inputTexto = document.getElementById("texto")
const parrafo = document.querySelector("p")

formulario.addEventListener("submit",(e)=>{
  e.preventDefault()
  const textoComienzaConA = inputTexto.value.startsWith("A")
  const textoTieneLongitudDe8 = inputTexto.value.length === 8

  if(textoComienzaConA && textoTieneLongitudDe8){
    parrafo.textContent = "El texto es válido 😎"
  }else{
    parrafo.textContent = "El texto no es válido 😢"
  }
})
