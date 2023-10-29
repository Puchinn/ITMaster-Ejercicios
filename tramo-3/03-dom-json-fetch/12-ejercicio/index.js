const libro = {
  "titulo": "Apps HTML para móviles",
  "autor": "Damián De Luca",
  "fecha": 2014,
  "paginas": 272
}

document.getElementById("contenedor").innerHTML = `
<h1>${libro.titulo}</h1>
<h2>Autor: ${libro.autor}</h2>
<p>fecha: ${libro.fecha} </p>
<p>paginas: ${libro.paginas} </p>
`