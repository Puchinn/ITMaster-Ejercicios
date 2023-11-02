const formulario = document.querySelector("form")
const lista = document.querySelector("ul")

let listaLibros = []

formulario.addEventListener("submit", guardarLibro)
document.addEventListener("DOMContentLoaded", renderizarLibros)

function renderizarLibros() {
  cargarLibros()
  listaLibros.forEach(libro => {
    const tituloSinEspacios = libro.titulo.replace(/\s/gi, "-")
    lista.innerHTML += `
    <li id=${tituloSinEspacios}>
      <details>
        <summary> ${libro.titulo} </summary>
        <p>Autor: ${libro.autor}</p>
        <p>Fecha de publicación: ${libro.anho}</p>
        <button onclick=eliminarLibro("${tituloSinEspacios}") >Eliminar</button>
      </details>
    </li>
    `
  })
}

function guardarLibro(e) {
  e.preventDefault()
  const formValues = e.target
  const titulo = formValues.titulo.value
  const autor = formValues.autor.value
  const anho = formValues.anho.value

  if (titulo.length > 1 && autor.length > 1 && anho.length > 1) {
    const libro = { titulo, autor, anho }
    const tituloSinEspacios = libro.titulo.replace(/\s/gi, "-")
    lista.innerHTML += `
    <li id=${tituloSinEspacios}>
      <details>
        <summary> ${libro.titulo} </summary>
        <p>Autor: ${libro.autor}</p>
        <p>Fecha de publicación: ${libro.anho}</p>
        <button onclick={eliminarLibro("${tituloSinEspacios}")}>Eliminar</button>
      </details>
    </li>
    `
    listaLibros.push(libro)
    window.localStorage.setItem("lista-libros", JSON.stringify(listaLibros))
  } else {
    alert("Completar todos los campos")
  }
}

function cargarLibros() {
  const libros = JSON.parse(window.localStorage.getItem("lista-libros"))
  if (libros) {
    listaLibros = libros
  }
}

function eliminarLibro(titulo) {
  cargarLibros()
  const tituloOriginal = titulo.replace(/-/gi, " ")
  const nuevaLista = listaLibros.filter(l => l.titulo !== tituloOriginal)
  window.localStorage.setItem("lista-libros", JSON.stringify(nuevaLista))
  document.getElementById(titulo).remove()
  listaLibros = nuevaLista
}

