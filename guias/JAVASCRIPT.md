# GUÍA RÁPIDA CON JAVASCRIPT

JavaScript es un lenguaje de programación del lado del cliente que se utiliza ampliamente en el desarrollo de aplicaciones web y móviles. Aquí hay algunos puntos clave para empezar:

## Sintaxis básica

Aquí hay algunos puntos clave de la sintaxis de JavaScript:

- Las líneas terminan en punto y coma (`;`).
- Los comentarios en JavaScript comienzan con `//` para una sola línea o con `/*` y `*/` para comentarios de varias líneas.
Ejemplo:

```js
// Este es un comentario

function saludar() {  // Esta es una función
  console.log("Hola, mundo!");  // Esta es una llamada a la función console.log
}

saludar();  // Llamamos a la función saludar
```

## Tipos de datos y variables

JavaScript tiene varios tipos de datos básicos, como números (entero, flotante), cadenas, booleanos (verdadero/falso) y `null`/`undefined`.

Para declarar una variable, se utiliza la palabra clave `var` o `let` o `const` (en versiones más recientes de JavaScript).

Ejemplo:

```js
var mensaje = "Hola, mundo!";
let numero = 42;
const esVerdad = true;

```

## Control de flujo

JavaScript tiene estructuras de control de flujo como `if` y `while` para ejecutar código de forma condicional o repetitiva. También tiene un bucle `for` para iterar sobre una secuencia de elementos.

Ejemplo:

```js
let numero = 10;

if (numero > 5) {
  console.log("El número es mayor a 5");
} else if (numero < 5) {
  console.log("El número es menor a 5");
} else {
  console.log("El número es igual a 5");
}

while (numero > 0) {
  console.log(numero);
  numero -= 1;
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## Funciones

Las funciones son bloques de código reutilizables que se pueden llamar varias veces. En JavaScript, las funciones se declaran con la palabra clave `function`.

Ejemplo:

```js
function saludar(nombre) {
  console.log("Hola, " + nombre);
}

saludar("Juan");  // Imprime "Hola, Juan"
saludar("Ana");  // Imprime "Hola, Ana"

```

## Objetos y clases

JavaScript es un lenguaje orientado a objetos, lo que significa que se pueden crear objetos con atributos y métodos. En versiones más recientes de JavaScript, también se pueden crear clases para definir los atributos y métodos de un objeto de manera más estructurada.

Ejemplo:

```js
class Auto {
  constructor(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
  }
  
  acelerar() {
    console.log("Brrumm brrumm");
  }
}

const miAuto = new Auto("Ford", "Mustang", "Rojo");

console.log(miAuto.marca);  // Imprime "Ford"
miAuto.acelerar();  // Imprime "Brrumm brrumm"

````

## Manejo de errores

El manejo de errores es muy importante en cualquier lenguaje de programación. Hay varias formas de controlar errores en JavaScript:

### try/catch

La estructura `try/catch` permite probar un bloque de código y atrapar cualquier error que pueda ocurrir. El bloque de código que se quiere probar se coloca en una sección `try`, y en caso de que ocurra un error, se ejecuta un bloque `catch` con el error.

Ejemplo:

```js
try {
  // Código a probar
} catch (error) {
  // Código a ejecutar en caso de error
}
```

### throw

La palabra clave throw permite lanzar un error manualmente. Esto puede ser útil para validar entradas o para lanzar errores personalizados.

Ejemplo:

```js
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por 0");
  }
  return a / b;
}

try {
  const resultado = dividir(5, 0);
} catch (error) {
  console.log(error.message);  // Imprime "No se puede dividir por 0"
}
```

## Manipulación del DOM

JavaScript se utiliza ampliamente para manipular el árbol de elementos del Document Object Model (DOM) de una página web. Esto se puede hacer mediante funciones y métodos del DOM, como `getElementById` y `innerHTML`.

Ejemplo:

```js
const elemento = document.getElementById("mi-elemento");
elemento.innerHTML = "Hola, mundo!";
```

## Eventos

JavaScript permite asociar funciones a eventos del DOM, como clics de mouse, carga de página y teclado. Esto se hace mediante la asignación de funciones a eventos mediante propiedades del DOM, como onclick y onkeydown.

Ejemplo:

```js
const boton = document.getElementById("mi-boton");
boton.onclick = function() {
  console.log("Se ha hecho clic en el botón");
};

document.onkeydown = function(evento) {
  console.log("Se ha presionado la tecla " + evento.key);
};
```

## HTTP y AJAX

JavaScript también se utiliza para realizar solicitudes HTTP y hacer llamadas asíncronas (AJAX) a servicios web. Esto se puede hacer mediante la API de XMLHttpRequest o mediante la utilización de librerías como jQuery.

La API de XMLHttpRequest es una forma nativa de JavaScript de realizar solicitudes HTTP y manejar la respuesta. Se pueden hacer solicitudes de distintos tipos, como `GET`, `POST`, `PUT` y `DELETE`.

Ejemplo:

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/endpoint");
xhr.onload = function() {
  console.log(xhr.responseText);
};
xhr.send();
```

Además puedes usar `JQuery` es una librería de JavaScript que simplifica el manejo de HTTP y AJAX. Con jQuery, se pueden hacer solicitudes HTTP y manipular la respuesta de una manera más sencilla que con la API de XMLHttpRequest.

Ejemplo:

```js
$.get("https://api.example.com/endpoint", function(respuesta) {
  console.log(respuesta);
});
```

Además de simplificar el manejo de HTTP y AJAX, jQuery también proporciona funcionalidades para facilitar la manipulación del DOM y la agregación de eventos. Es una de las librerías más utilizadas en el desarrollo web y se incluye por defecto en muchas plantillas y frameworks.

## Otros recursos

Aquí hay algunos recursos adicionales que le pueden ser útiles al aprender Javascript:

- MDN Web Docs: Este es un sitio web oficial de Mozilla que proporciona documentación completa y actualizada sobre JavaScript y otras tecnologías web. Incluye tutoriales, guías y ejemplos de código. <https://developer.mozilla.org/es/docs/Web/JavaScript>

- Codecademy: Este es un sitio web con tutoriales interactivos y ejercicios prácticos para aprender JavaScript y otras tecnologías web. Ofrece un curso gratuito de JavaScript y múltiples planes de pago para acceder a más contenido. <https://www.codecademy.com/learn/introduction-to-javascript>

- Coursera: Este es una plataforma en línea con múltiples cursos de programación, incluyendo varios cursos de JavaScript. Algunos son gratuitos y otros tienen un precio. <https://www.coursera.org/courses?query=javascript>

- freeCodeCamp: Este es un sitio web con tutoriales y proyectos prácticos para aprender JavaScript y otras tecnologías web. Incluye una sección de certificación gratuita de JavaScript. <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/>
