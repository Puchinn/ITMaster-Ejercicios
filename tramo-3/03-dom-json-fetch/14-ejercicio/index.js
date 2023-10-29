const contenedor = document.getElementById("contenedor")
const url = "https://jsonplaceholder.typicode.com/photos"

fetch(`${url}?albumId=10`)
  .then(data => data.json())
  .then(data => {
    data.forEach(d => {
      contenedor.innerHTML += `
    <h2> ${d.title} </h2>
    <img src=${d.thumbnailUrl}>
    `
    })
  })