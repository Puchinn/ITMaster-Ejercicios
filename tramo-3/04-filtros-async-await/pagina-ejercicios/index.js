// Ejercicio 16
const lista_16 = document.getElementById("lista-16")
const productos_16 = [
  { "producto": "Producto 1", "precio": 500 },
  { "producto": "Producto 2", "precio": 1000 },
  { "producto": "Producto 3", "precio": 4000 },
  { "producto": "Producto 4", "precio": 400 },
  { "producto": "Producto 5", "precio": 4100 },
  { "producto": "Producto 6", "precio": 1020 },
  { "producto": "Producto 7", "precio": 8920 },
  { "producto": "Producto 8", "precio": 3110 },
]

const productosFiltrados = productos_16.filter(producto => producto.precio >= 1000 && producto.precio <= 4000)

productosFiltrados.forEach(producto => {
  lista_16.innerHTML += `
  <li> Producto : ${producto.producto} Precio: ${producto.precio} </li>
  `
})

// Ejercicio 17

const url_17 = "https://jsonplaceholder.typicode.com/posts"

document.addEventListener("DOMContentLoaded", async () => {
  const datos = await fetch(url_17).then(data => data.json())

  document.getElementById("content-17").innerHTML += `
  <p>Cantidad de posts : ${datos.length} </p>
  Primer post:
  <p>Titulo : ${datos[0].title}</p>
  <p>Contenido : ${datos[0].body}</p>
  `
})

// Ejercicio 18
const lista_18 = document.getElementById("lista-18")
const numeros_18 = [1000, 5, 55, 105, 1, 9, 33, 44, 101, 150, 130, 12, 9, -10, 8, 81, 195, 19]

const numerosFiltrados = numeros_18.filter(num => {
  return (num > 10 && num < 1000) && num % 5 === 0
})

numerosFiltrados.forEach(num => {
  lista_18.innerHTML += `
  <li> ${num} </li>
  `
})

// Ejercicio 19
const url_19 = "https://jsonplaceholder.typicode.com/photos"
const input = document.getElementById("text")

document.addEventListener("DOMContentLoaded", async () => {
  const datos = await fetch(url_19).then(d => d.json())
  const maxDatos = datos.slice(0, 500)
  input.addEventListener("keyup", () => {
    document.getElementById("content-19").innerHTML = ""
    const datosFiltrados = maxDatos.filter(d => d.title.startsWith(input.value))
    const maxFiltrados = datosFiltrados.slice(0, 10)
    let contenido = ""
    maxFiltrados.forEach(d => {
      contenido += `
      <div>
      <img src=${d.thumbnailUrl}>
      <p> ${d.title} </p>
      </div>
      `
    })
    document.getElementById("content-19").innerHTML = contenido
  })
})