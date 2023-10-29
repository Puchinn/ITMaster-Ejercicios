const parrafos = document.querySelectorAll("p")

parrafos.forEach(parrafo => {
  parrafo.addEventListener("click", () => {
    parrafo.remove()
  })
})