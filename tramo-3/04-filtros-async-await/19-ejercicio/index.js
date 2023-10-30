const url = "https://jsonplaceholder.typicode.com/photos"
const input = document.getElementById("text")

document.addEventListener("DOMContentLoaded", async()=>{
  const datos = await fetch(url).then(d => d.json())
  const maxDatos = datos.slice(0,500)
  input.addEventListener("keyup",()=>{
    document.getElementById("content").innerHTML = ""
    const datosFiltrados = maxDatos.filter(d => d.title.startsWith(input.value))
    const maxFiltrados = datosFiltrados.slice(0,10)
    let contenido = ""
    maxFiltrados.forEach(d => {
      contenido += `
      <p> ${d.title} </p>
      <img src=${d.thumbnailUrl}>
      `
    })
    document.getElementById("content").innerHTML = contenido
  })
})