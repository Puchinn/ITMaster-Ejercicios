**Ejercicio 6 -**
Crear una `función` de multiplicación que recibe dos parámetros. Las condiciones son: 

- Los parámetros se multiplican entre sí en el caso de que ambos sean positivos. Mostrar el resultado de la cuenta en la consola.

- Si uno o ambos números no son positivos no realizar la multiplicación y mostrar un mensaje de error en la consola.

resolución - **Código JavaScript**

<pre><code>
function multiplicacion (a,b){
  if ( a > 0 && b > 0 ){
    console.log(a*b)
  } else{
    console.error("los numeros deben ser positivos")
  }
}

multiplicacion(6,6) // 36
multiplicacion(4,-6) // error: los numeros deben ser positivos
</code></pre>