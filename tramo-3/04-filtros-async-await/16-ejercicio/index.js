const lista = document.querySelector("ul")

const productos = [
  {"producto":"Producto 1","precio": 500},
  {"producto":"Producto 2","precio": 1000},
  {"producto":"Producto 3","precio": 4000},
  {"producto":"Producto 4","precio": 400},
  {"producto":"Producto 5","precio": 4100},
  {"producto":"Producto 6","precio": 1020},
  {"producto":"Producto 7","precio": 8920},
  {"producto":"Producto 8","precio": 3110},
]

const productosFiltrados = productos.filter(producto => producto.precio >= 1000 && producto.precio <= 4000)

productosFiltrados.forEach(producto => {
  lista.innerHTML += `
  <li> Producto : ${producto.producto} Precio: ${producto.precio} </li>
  `
})