const libros = [
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

const librosCienciaFiccionAntes1900 = libros.filter(libro => libro.genero === "Ciencia Ficción" && libro.year < 1900);

librosCienciaFiccionAntes1900.forEach(libro => {
  document.getElementById("contenedor").innerHTML += `
  <h1> ${libro.titulo} </h1>
  <h2>Autor: ${libro.autor} </h2>
  <p>Año: ${libro.year} </p>
  <p>Genero: ${libro.genero} </p>
  `
})

