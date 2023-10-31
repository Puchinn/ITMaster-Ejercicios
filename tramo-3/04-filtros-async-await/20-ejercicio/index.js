const formulario = document.querySelector("form")
const lista = document.querySelector("ul")

let listaLibros = []

function guardarLibro (e){
  e.preventDefault()
  const formValues = e.target
  const titulo = formValues.titulo.value
  const autor = formValues.autor.value
  const anho = formValues.anho.value

  if(titulo.length > 1 && autor.length > 1 && anho.length > 1){
    const libro = {
      titulo,
      autor,
      anho
    }

    listaLibros.push(libro)
    window.localStorage.setItem("lista-libros",JSON.stringify(listaLibros))
    lista.innerHTML += `
    <li id=${libro.titulo.replace(/\s/gi,"-")}>
      <details>
        <summary> ${libro.titulo} </summary>
        <p>Autor: ${libro.autor}</p>
        <p>Fecha de publicación: ${libro.anho}</p>
        <button onclick={eliminarLibro("${libro.titulo.replace(/\s/gi,"-")}")}>Eliminar</button>
      </details>
    </li>
    `
  }else{
    alert("Completar todos los campos")
  }
}

function cargarLibros(){
  const libros = JSON.parse(window.localStorage.getItem("lista-libros"))
  if(libros){
    listaLibros = libros
  }
}

function eliminarLibro(titulo){
  cargarLibros()
  const nuevaLista = listaLibros.filter(l => l.titulo !== titulo.replace(/-/gi," "))
  window.localStorage.setItem("lista-libros",JSON.stringify(nuevaLista))
  document.getElementById(titulo).remove()
  listaLibros = nuevaLista
}

formulario.addEventListener("submit",guardarLibro)
document.addEventListener("DOMContentLoaded",()=>{
  cargarLibros()
  listaLibros.forEach(libro => {
    const titulo = libro.titulo.replace(/\s/gi,"-")
    lista.innerHTML += `
    <li id=${titulo}>
      <details>
        <summary> ${libro.titulo} </summary>
        <p>Autor: ${libro.autor}</p>
        <p>Fecha de publicación: ${libro.anho}</p>
        <button onclick=eliminarLibro("${titulo}") >Eliminar</button>
      </details>
    </li>
    `
  })
})

