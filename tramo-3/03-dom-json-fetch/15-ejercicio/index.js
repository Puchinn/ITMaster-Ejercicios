const url = "https://jsonplaceholder.typicode.com/todos"
const contenedor = document.getElementById("contenedor")
const parrafo = document.querySelector("p")

const datos = await fetch(`${url}?userId=5`).then(d => d.json())

parrafo.textContent = `Total tareas: ${datos.length}`

const tareasCompletadas = datos.filter(tarea => tarea.completed)

tareasCompletadas.forEach(tarea => {
  contenedor.innerHTML += `
<p> ${tarea.title} </p>
`
})

