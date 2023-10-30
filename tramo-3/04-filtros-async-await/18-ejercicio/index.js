const lista = document.querySelector("ul")
const numeros = [1000,5,55,105,1,9,33,44,101,150,130,12,9,-10,8,81,195,19]

const numerosFiltrados = numeros.filter(num => {
  return (num > 10 && num < 1000) && num % 5 === 0 
})

numerosFiltrados.forEach(num => {
  lista.innerHTML += `
  <li> ${num} </li>
  `
})