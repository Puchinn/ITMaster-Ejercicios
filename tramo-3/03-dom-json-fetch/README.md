## 📚 DOM , JSON Y FETCH

**Ejercicio 11 -** Dentro de un div contenedor crear 5 párrafos. 
- A tocar sobre un párrafo debe borrarse dicho párrafo (utilizar remove())

**Ejercicio 12 -** Dado un JSON en la constante libro, mostrar el título en un h1, el autor en un h2 y el resto de datos en párrafos dentro de un div contenedor.

<pre><code>
const libro = {
    "titulo" : "Apps HTML para móviles",
    "autor" : "Damián De Luca",
    "fecha" : 2014,
    "paginas" : 272 
}
</code></pre>

**Ejercicio 13 -** Crear un array de JSON con 7 libros a tu elección. 

- Cada libro debe tener las siguientes keys: titulo, autor, year (para año de publicación) y genero. 
- Del listado, mostrar en una lista todos los libros de Ciencia Ficción publicados antes de 1900 (se debe mostrar título, autor, año de publicación y género).

**Ejercicio 14 -** Mostrar imágen (thumbnailUrl) y epigrafe (title) de albumId = 10 .  
Los datos se obtienen de la siguiente API: https://jsonplaceholder.typicode.com/photos

**Ejercicio 15 -**  
Mostrar las tareas cumplidas (completed en estado true) del usuario 5 (userId).  
Los datos se obtienen de la siguiente API: https://jsonplaceholder.typicode.com/todos