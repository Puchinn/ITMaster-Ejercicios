// Ejercicio 11
const parrafos_11 = document.querySelectorAll(".parrafo-11")

parrafos_11.forEach(parrafo => {
  parrafo.addEventListener("click", () => {
    parrafo.remove()
  })
})

// Ejercicio 12
const libro_12 = {
  "titulo": "Apps HTML para móviles",
  "autor": "Damián De Luca",
  "fecha": 2014,
  "paginas": 272
}

document.getElementById("contenedor-12").innerHTML = `
<div class="libro">
<h3>${libro_12.titulo}</h3>
<p>Autor: ${libro_12.autor}</p>
<p>fecha: ${libro_12.fecha} </p>
<p>paginas: ${libro_12.paginas} </p>
</div>
`

// Ejercicio 13
const libros_13 = [
  {
    "titulo": "Frankenstein",
    "autor": "Mary Shelley",
    "year": 1818,
    "genero": "Ciencia Ficción"
  },
  {
    "titulo": "20,000 Leguas de Viaje Submarino",
    "autor": "Julio Verne",
    "year": 1870,
    "genero": "Ciencia Ficción"
  },
  {
    "titulo": "La Máquina del Tiempo",
    "autor": "H.G. Wells",
    "year": 1895,
    "genero": "Ciencia Ficción"
  },
  {
    "titulo": "Un Mundo Feliz",
    "autor": "Aldous Huxley",
    "year": 1932,
    "genero": "Ciencia Ficción"
  },
  {
    "titulo": "Metropolis",
    "autor": "Thea von Harbou",
    "year": 1926,
    "genero": "Ciencia Ficción"
  },
  {
    "titulo": "R.U.R. (Rossum's Universal Robots)",
    "autor": "Karel Čapek",
    "year": 1920,
    "genero": "Ciencia Ficción"
  },
  {
    "titulo": "Viaje al Centro de la Tierra",
    "autor": "Julio Verne",
    "year": 1864,
    "genero": "Aventura"
  }
];

const librosCienciaFiccionAntes1900 = libros_13.filter(libro => libro.genero === "Ciencia Ficción" && libro.year < 1900);

librosCienciaFiccionAntes1900.forEach(libro => {
  document.getElementById("contenedor-13").innerHTML += `
  <div class="libro">
  <h3> ${libro.titulo} </h3>
  <p>Autor: ${libro.autor} </p>
  <p>Año: ${libro.year} </p>
  <p>Género: ${libro.genero} </p>
  </div>
  `
})

// Ejercicio 14
const contenedor_14 = document.getElementById("contenedor-14")
const url_14 = "https://jsonplaceholder.typicode.com/photos"

fetch(`${url_14}?albumId=10`)
  .then(data => data.json())
  .then(data => {
    const maxData = data.slice(0, 10)
    maxData.forEach(d => {
      contenedor_14.innerHTML += `
    <div>
    <img src=${d.thumbnailUrl}>
    <p> ${d.title} </p>
    </div>
    `
    })
  })

// Ejercicio 15
const url_15 = "https://jsonplaceholder.typicode.com/todos"
const contenedor_15 = document.getElementById("contenedor-15")
const parrafo_15 = document.querySelector(".parrafo-15")

const datos_15 = await fetch(`${url_15}?userId=5`).then(d => d.json())

parrafo_15.textContent = `Total tareas: ${datos_15.length}`

const tareasCompletadas = datos_15.filter(tarea => tarea.completed)

tareasCompletadas.forEach(tarea => {
  contenedor_15.innerHTML += `
  <p class="p-tareas"> ${tarea.title} </p>
`
})

