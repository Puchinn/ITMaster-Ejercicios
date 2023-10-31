## 📖 Funciones y DOM

**Ejercicio 7 -**
Crear un formulario que le solicite al usuario ingresar un número.

- El formulario debe tener un input del tipo number y un botón que llama a una función.
- La función debe validar si el número es divisible por 100. Mostrar un mensaje en un párrafo indicando si es divisible o no

**Ejercicio 8 -**
Crear un formulario que le solicite al usuario ingresar un código. 
- El formulario debe tener un input del tipo text y un botón que llama a una función para validar. 
- La validación debe verificar que el código sea exactamente de 8 caracteres y siempre debe comenzar con la letra A. 
- Mostrar en un párrafo el mensaje si el código es válido o no.

**Ejercicio 9 -** 
Crear un documento HTML:

- Crear un párrafo cuya id es parrafo. Y escribir un texto.
- En el mismo HTML crear un formulario que le solicita al usuario ingresar un número y agregar un botón que llame a una función.
- Crear un párrafo vacío destinado a escribir un mensaje de éxito o error.

Crear un script y vincularlo al HTML

- Crear la función que es llamada por el botón del formulario.
- Obtenga el valor numérico que ingresa el usuario.
- Validar que el valor sea igual o mayor a 10.
- Si se cumple que sea mayor o igual que 10, aplicar al elemento cuya id es párrafo el valor indicado por el usuario como estilo desde JavaScript, cambiando el tamaño de fuente (fontSize) en píxeles.
- Escribir un mensaje indicando que se ha aplicado el cambio de tamaño.

**Ejercicio 10 -** Primero crear un documento HTML:

- Crear un div con id caja
- Debajo del div crear un botón que llama a una función para convertir la caja en un círculo y agregar color de fondo.

Crear y vincular al HTML un archivo CSS:

- Establecer ancho, alto y un borde a la caja (la caja debe ser un cuadrado)
- Crear una clase llamada seleccionado y establecer un color de fondo y border-radius que permita hacer un círculo (Ej: 50%)

Crear un archivo de JavaScript y vincularlo al HTML:

- Crear la función que es llamada desde el botón del HTML
- La función debe agregar a la caja la clase seleccionado (creada en el CSS). Para realizar esta operación utilizar classList.