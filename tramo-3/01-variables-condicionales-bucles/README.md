## Variables, lógica condicional y bucles

**Ejercicio 1 -**
Dadas las variables nombre y apellido validar y mostrar la respuesta en consola. Las condiciones son:

- Cada una de las variables debe tener 3 caracteres o más.
- Si ambas variables cumplen la consigna mostrar el nombre y el apellido y un mensaje de éxito en consola.
- Si una o ambas variables no cumplen con el requisito indicar en un cartel el error (y cuál es la variable que no cumple o sin son ambas)

resolución - **Codigo JavaScript** :
<pre><code>
const nombre = "Esteban"
const apellido = "Sayago"

if ( nombre.length > 3 && apellido.length > 3 ) {
    console.log(`Ambas variables son correctas: ${nombre} ${apellido}`)

    // consola: "Ambas variables son correctas: Esteban Sayago"

} else {
    const nombreEsValido = nombre.length > 3 ? "" : "nombre"
    const apellidoEsValido = apellido.length > 3 ? "" : "apellido"
    console.log(`Algunas variables no cumplen los requisitos: ${nombreEsValido} ${apellidoEsValido}`)

    // ej : nombre = "Leo"
    // consola: 'Algunas variables no cumplen los requisitos: nombre'
}
</code></pre>

**Ejercicio 2 -**
Utilizando `while` mostrar en consola desde 500 a 1000, inclusive, incrementando de a 20.
- No mostrar los números 900 y 980.

resolución - **Codigo JavaScript** :

<pre><code>
let nroInicial = 500

while ( nroInicial < 1000 ){
if ( nroInicial == 900 || nroInicial === 980 ){
nroInicial += 20
continue
}
console.log(nroInicial)
nroInicial += 20
}

</code></pre>

**Ejercicio 3 -**
Utilizando `for` mostrar en consola desde 800 a 100, bajando de 50 en 50.
- No mostrar los números 500 y 400.

resolución - **Codigo JavaScript** :
<pre><code>
for( let i = 800; i >= 100; i -= 20 ){
  if(i === 500 | i === 400){
    continue
  }
  console.log(i) // 800 780 760 740 ...
}
</code></pre>

**Ejercicio 4 -**
Crear un `array` que tenga los siguientes colores: *rojo*, *azul*, *verde*, *amarillo*, *naranja*, *marrón*, *violeta*, *rosa*.

- Recorrerlos con un `for of` y mostrar los colores que comienzan con r.
- Y los que comienzan con v.

resolución - **Codigo JavaScript** :

<pre><code>
const colores = ["rojo", "azul", "verde","amarillo", "naranja","marrón","violeta","rosa"]

for (color of colores){
  if (color.startsWith("r") | color.startsWith("v") ){
    console.log(color) // "rojo" "verde" "violeta" "rosa"
  }
}
</code></pre>

**Ejercicio 5 -**
Crear un `array` con los siguientes números: 1000, 500, 50, 10, 900, 750, 150, 555, 720, 730.   

Mostrar los números que cumplen con la siguiente consigna:
- Mayores que 200
- Menores que 800

resolución - **Codigo JavaScript** :
<pre><code>
const numeros = [1000, 500, 50, 10, 900, 750, 150, 555, 720, 730]

numeros.forEach(numero =>{
  if(numero > 200 && numero < 800){
    console.log(numero) // 500 750 555 720 730
  }
})
</code></pre>