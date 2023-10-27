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
Utilizando <code>while</code> mostrar en consola desde 500 a 1000, inclusive, incrementando de a 20.
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
Utilizando <code>for</code> mostrar en consola desde 800 a 100, bajando de 50 en 50.
- No mostrar los números 500 y 400.

<pre><code>
for( let i = 800; i >= 100; i -= 20 ){
  if(i === 500 | i === 400){
    continue
  }
  console.log(i) // 800 780 760 740 ...
}
</code></pre>