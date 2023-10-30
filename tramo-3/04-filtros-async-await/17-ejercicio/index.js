const url = "https://jsonplaceholder.typicode.com/posts"

document.addEventListener("DOMContentLoaded",async ()=>{
  const datos = await fetch(url).then(data => data.json())

  document.querySelector("body").innerHTML += `
  <p>Cantidad de posts : ${datos.length} </p>
  Primer post:
  <p>Titulo : ${datos[0].title}</p>
  <p>Contenido : ${datos[0].body}</p>
  `
})