# DIPLOMADO FULLSTACK DEVELOPER - MÓDULO III

## LENGUAJES DE PROGRAMACIÓN

### ¿Qué es un lenguaje de programación?

Un lenguaje de programación es un lenguaje de computadora que los programadores utilizan para comunicarse y para desarrollar programas de software, aplicaciones, páginas webs, scripts u otros conjuntos de instrucciones para que sean ejecutadas por los ordenadores.

### Ranking de lenguajes de programación más populares

- <https://insights.stackoverflow.com/survey/2021#most-popular-technologies-language>

- <https://www.stackscale.com/es/blog/lenguajes-programacion-mas-populares/>

### ¿Qué es un paradigma de programación?

Un paradigma de programación es una manera o estilo de programación de software. Existen diferentes formas de diseñar un lenguaje de programación y varios modos de trabajar para obtener los resultados que necesitan los programadores.
Podemos algunos paradigmas relevantes:

- **Programación Estructurada**, es un enfoque para la escritura de código informático que se centra en la creación de programas divididos en bloques lógicos individuales y auto-contenidos de código. Estos bloques se llaman "estructuras de control de flujo", y incluyen cosas como bucles, condicionales y subrutinas.
- **Programación orientado a objetos**, es un estilo de programación que proporciona unas guías acerca de cómo trabajar con él y que está basado en el concepto de clases y objetos.
- **Programación Funcional**, es un enfoque donde las funciones serán tratadas como ciudadanos de primera clase. Las funciones podrán ser asignadas a variables además podrán ser utilizadas como entrada y salida de otras funciones.

Recurso útil acerca los paradigmas de programación: <https://keepcoding.io/blog/paradigmas-de-programacion/>

### Lenguajes de programación multiparadigma

Algunos ejemplos de lenguajes de programación multiparadigma incluyen:

- **Python**: soporta tanto la programación orientada a objetos como la programación funcional.
- **Javascript**: aunque principalmente se utiliza como lenguaje de programación orientado a objetos, también soporta la programación funcional y la programación basada en eventos.
- **Java**: soporta la programación orientada a objetos y la programación basada en eventos.
- **C++**: soporta la programación orientada a objetos, la programación estructurada y la programación basada en procedimientos.
- **C#**: soporta la programación orientada a objetos y la programación basada en eventos.

### Python

[Aquí](guias/PYTHON.md) puedes obtener una guía rapida acerca de Python.

### Javascript

[Aquí](guias/JAVASCRIPT.md) puedes obtener una guía rapida acerca de Javascript.

---

## BASES DE DATOS

### ¿Qué es una base de datos?

Una base de datos es una herramienta que recopila datos, los organiza y los relaciona para que se pueda hacer una rápida búsqueda y recuperar con ayuda de un ordenador. Hoy en día, las bases de datos también sirven para desarrollar análisis. Las bases de datos más modernas tienen motores específicos para sacar informes de datos complejos.

### Tipos de base de datos

- Relacional
- Distribuida
- NoSQL
- Orientada a objetos
- Gráficas.

#### Base de datos relacional

La base de datos relacional es una recopilación de la información empresarial organizada de tal forma que se puede consultar, actualizar, analizar y sacar los datos fácilmente. La información se encuentra en tablas y campos relacionados entre sí

### Base de datos distribuida

La base de datos distribuida consiste en el almacenamiento de porciones de la base de datos en diferentes ubicaciones físicas y, por tanto, el procesamiento está distribuido o replicado entre los distintos puntos de una red de trabajo.

Consecuentemente, la base de datos distribuida tiene una mayor disponibilidad de los datos debido a sus múltiples ubicaciones. De esta forma, si una de las bases de datos fallase, se podría seguir funcionando correctamente, aunque puede que un poco ralentizado. Sin embargo, esta misma característica de estar distribuido puede provocar que haya duplicidad de los datos y un menor nivel de seguridad.

#### Base de datos NoSQL

El nombre de la base de datos NoSQL proviene de Not only SQL o, en español, no solo SQL. Esto se debe a que este tipo de base de datos suele evitar el uso del SQL o lo usa de apoyo, pero no como consulta. El hecho de evitar el SQL es porque se usa para proyectos en los que se necesita trabajar en la base de datos con un gran volumen. En las bases de datos con lenguaje SQL, los distintos atributos de un elemento, están en diferentes columnas, mientras que en una NoSQL todos los atributos se encuentran en una misma columna, ahorrando espacio.

#### Base de datos orientada a objetos

La base de datos orientada a objetos, o Object-Oriented Database, representa los datos en forma de objetos y clases. El objeto puede ser desde un resultado de búsqueda a una tabla; y una clase es una colección de objetos.

#### Base de datos gráfica o de grafos

En cuanto a la base de datos gráfica, también conocida como orientada a grafos, se diferencian de las anteriores en que están especializadas en establecer relaciones entre los datos de forma visual y navegar por dichas relaciones. Para leer la información, hay que leer los nodos o conectores (puntos de conexión de los datos de las tablas), generando un lenguaje natural.

### BASE DE DATOS POSTGRES

- [Aquí](guias/POSTGRES.md) puedes ver una guía rapida de Postgres

---

## PROGRAMACION ORIENTADA A OBJETOS

Es un paradigma de la programación que se basa en el concepto de objetos, los cuales son entidades que tienen estados y comportamiento.
En la POO se crean clases y estas sirven como plantillas para crear objetos similares y estos objetos a la vez pueden interactuar entre sí a través de mensajes que se envían entre ellos.

Una de las ventajas de la POO es que permite crear programas modulares y reutilizables, ya que estos objetos usados pueden ser utilizados en distintas partes de nuestro programa o software.

También nos permite dividir un problema complejo en partes más pequeñas y manejables, lo que hace más fácil escribir y mantener código.

## PILARES DE LA PROGRAMACIÓN ORIENTADA A OBJETOS

Los cuatro pilares de la programación orientada a objetos (POO) son:

- **Abstracción**: consiste en representar la información de forma más simple y relevante para el problema que se está tratando, ocultando los detalles innecesarios.
- **Encapsulamiento**: consiste en agrupar los datos y las funcionalidades que trabajan con ellos en un mismo objeto, de modo que se puedan ocultar ciertos detalles de implementación al usuario del objeto.
- **Herencia**: consiste en que un objeto pueda heredar las propiedades y métodos de otro objeto, de modo que se pueda reutilizar código y se puedan crear jerarquías de objetos.
- **Polimorfismo**: consiste en que un mismo objeto pueda tener diferentes formas de comportarse en diferentes contextos, o que diferentes objetos puedan tener un comportamiento similar en respuesta a una misma solicitud.

### EJEMPLOS DE POO EN JAVASCRIPT Y PYTHON

#### Declaración de objetos y clases

##### En JS

Por ejemplo:

```js
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
  }
}

Para crear la instancia
let persona = new Persona("Juan", 30);

Para llamar el método:

persona.saludar(); // Imprime "Hola, soy Juan y tengo 30 años"
```

##### En Python

```py
class Persona:
  def __init__(self, nombre, edad):
    self.__nombre = nombre
    self.__edad = edad
    
  def get_nombre(self):
    return self.__nombre

  def set_nombre(self, nuevo_nombre):
    self.__nombre = nuevo_nombre

  def saludar(self):
    print(f"Hola, soy {self.__nombre} y tengo {self.__edad} años")
    
jorge = Persona("Jorge", 50)

print(jorge.get_nombre())
jorge.set_nombre('Raquel')
print(jorge.get_nombre())

jorge.saludar()
```

#### Uso de métodos privados

##### En JS

```js
class Persona {
    constructor(nombre, edad) {
     this._nombre = nombre;
     this._edad = edad;
    }
    
    get_nombre() {
        return this._nombre;
    }
    
    set_nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
    
    saludar() {
        console.log(`Hola, soy ${this._nombre} y tengo ${this._edad} años`)
    }
}

let persona = new Persona("Juan", 30)
persona.saludar()
console.log(persona.get_nombre())
persona.set_nombre('Raquel')
console.log(persona.get_nombre())
```

##### En Python

```py
class Persona:
  def __init__(self, nombre, edad):
    self.__nombre = nombre
    self.__edad = edad
    
  def get_nombre(self):
    return self.__nombre

  def set_nombre(self, nuevo_nombre):
    self.__nombre = nuevo_nombre

  def saludar(self):
    print(f"Hola, soy {self.__nombre} y tengo {self.__edad} años")
    
jorge = Persona("Jorge", 50)

print(jorge.get_nombre())
jorge.set_nombre('Raquel')
print(jorge.get_nombre())

jorge.saludar()
```

#### Uso de herencia

##### En JS

```js
class Persona {
    constructor(nombre, edad) {
     this.nombre = nombre;
     this.edad = edad;
    }
    
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
     super(nombre,edad)
     this.carrera = carrera;
    }
    
    saludar() {
        super.saludar()
        console.log(`Estudio ${this.carrera}`)
    }
}
let juan = new Persona("Juan", 30)
let paola = new Estudiante("Paola", 25, 'Informática')
juan.saludar()
paola.saludar()
```

##### En Python

```py
class Persona:
  def __init__(self, nombre, edad):
    self.nombre = nombre
    self.edad = edad

  def saludar(self):
    print(f"Hola, soy {self.nombre} y tengo {self.edad} años")

class Estudiante(Persona):
  def __init__(self, nombre, edad, carrera):
    super().__init__(nombre, edad)
    self.carrera = carrera
    
  def saludar(self):
    super().saludar()
    print(f"Estudio {self.carrera}")
      
juan = Persona('juan', 35)
raquel = Estudiante('raquel', 25, 'Ingenieria de Sistemas')
juan.saludar()
raquel.saludar()
```

#### Uso de polimorifismo

##### En JS

```js
class Figura {
  constructor(lado1, lado2) {
    this.lado1 = lado1;
    this.lado2 = lado2;
  }

  area() {
    return this.lado1 * this.lado2;
  }
}

class Cuadrado extends Figura {
  constructor(lado) {
    super(lado, lado);
  }

  area() {
    return this.lado1 * this.lado1;
  }
}

let figura = new Figura(5,10);
console.log('el área de la figura es:', figura.area())

let cuadrado = new Cuadrado(5);
console.log('el área del cuadrado es:', cuadrado.area())
```

##### En Python

```py
class Figura:
  def __init__(self, lado1, lado2):
    self.lado1 = lado1
    self.lado2 = lado2

  def area(self):
    return self.lado1 * self.lado2

class Cuadrado(Figura):
  def __init__(self, lado):
    super().__init__(lado, lado)

  def area(self):
    return self.lado1 * self.lado1
    
figura = Figura(5,10)
print(figura.area())

cuadrado = Cuadrado(5)
print(cuadrado.area())
```

---

## PROGRAMACION FUNCIONAL

Los paradigmas de programación son los principios fundamentales de la programación de software.
Por una parte hemos estado revisando todo lo que ha hemos visto por el momento es una programación imperativa.

Pero por otra parte existe la programación declarativa, que contiene a la Programación lógica y programación funcional.

El principio fundamental de la programación declarativa radica en la descripción del resultado final que se busca. Por lo tanto, en primera línea se encuentra el “qué” del resultado y no el “cómo” de los pasos que llevan a la solución, como es el caso en la programación imperativa.

El paradigma de software lógico, denominado también como programación predicativa, se basa en la lógica matemática. En lugar de una sucesión de instrucciones, un software programado según este principio contiene un conjunto de principios que se pueden entender como una recopilación de hechos y suposiciones. Todas las solicitudes al programa se procesan de forma que el intérprete recurre a estos principios y les aplica reglas definidas previamente para alcanzar el resultado deseado.

Algunos lenguajes que usan el paradigma de la programación funcional: Lisp, ML, Haskell, F#, Prolog y Oz.

Y see utiliza en particular en el desarrollo de los siguientes programas o códigos:

- Aplicaciones técnicas y matemáticas
- Inteligencia Artificial (IA)
- Compiladores y analizadores
- Algoritmos

Algunas de las características más comunes de la programación funcional son:

- `Uso de funciones como valores de primera clase`: las funciones se pueden asignar a variables, pasar como argumentos a otras funciones y devolver como resultados.
- `Inmutabilidad`: los valores no pueden ser modificados una vez creados. Si necesita cambiar un valor, debe crear uno nuevo.
- `Evaluación perezosa`: los valores sólo se evalúan cuando son necesarios, lo que puede ser útil para operaciones con grandes cantidades de datos.
- `Uso de funciones de orden superior`: las funciones que toman otras funciones como argumentos o devuelven funciones como resultados.
- `Composición de funciones`: la creación de nuevas funciones a partir de otras funciones ya existentes.
- `Puros`: las funciones que no tienen efectos secundarios y siempre devuelven el mismo resultado dado el mismo conjunto de argumentos.

### EJEMPLOS DE PROGRAMACIÓN FUNCIONAL

Python y Javascript son lenguajes de programación multiparadigma que admiten varias formas de programación, como la programación orientada a objetos y la programación funcional. Aunque no es tan pura como otros lenguajes funcionales, es posible utilizar características funcionales en Python y javascript.

#### Composición de funciones

##### En Javascript

```js
function sumar(x) {
  return x + x;
}

function multiplicar(x) {
  return x * x;
}

function aplicarOperaciones(valor, funcion1, funcion2) {
  return funcion2(funcion1(valor));
}

// La función aplicarOperaciones toma un valor y dos funciones como argumentos
// y devuelve el resultado de aplicar las dos funciones al valor en ese orden.

console.log(aplicarOperaciones(2, sumar, multiplicar)); /

```

##### En Python

```js
def sumar(x):
  return x + x

def multiplicar(x):
  return x * x

def aplicar_operaciones(valor, funcion1, funcion2):
  return funcion2(funcion1(valor))

# La función aplicar_operaciones toma un valor y dos funciones como argumentos
# y devuelve el resultado de aplicar las dos funciones al valor en ese orden.

aplicar_operaciones(2, sumar, multiplicar 
```

#### Uso de la recursividad

##### En Javascript

```js
function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

factorial(5);  // 120
```

##### En Python

```py
def factorial(n):
  if n == 1:
    return 1
  else:
    return n * factorial(n - 1)

factorial(5) #120
```

#### FUNCIONES LAMBDA

Las funciones lambda, también conocidas como funciones anónimas, son funciones que no tienen un nombre y se utilizan para crear y pasar funciones como valores de primera clase de forma más concisa. Algunas de las características más comunes de las funciones lambda son:

- No tienen un nombre: las funciones lambda no tienen un nombre y se definen en una sola línea.
- Tienen una sintaxis concisa: las funciones lambda tienen una sintaxis más corta que las funciones normales, lo que las hace útiles para crear y pasar funciones como valores de primera clase.
- Son útiles en la programación funcional: las funciones lambda son útiles en la programación funcional ya que permiten crear y pasar funciones como valores de primera clase de forma más concisa.

##### En Javascript

```js
const sumar = (x, y) => x + y; sumar(2, 3); // 5
console.log(sumar(2,3));
```

##### En Python

```py
sumar = lambda x, y: x + y sumar(2, 3) # 5
print(sumar(2,3))
```

#### MAP, FILTER Y REDUCE

##### En Javascript

```js
const numeros = [1, 2, 3, 4, 5];

// Utilizando map para multiplicar todos los elementos de la lista por 2
const dobles = numeros.map(x => x * 2);  // [2, 4, 6, 8, 10]

// Utilizando filter para obtener sólo los números pares
const pares = numeros.filter(x => x % 2 === 0);  // [2, 4]

// Utilizando reduce para sumar todos los elementos de la lista
const suma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);  // 15
```

##### En Python

```py
numeros = [1, 2, 3, 4, 5]

# Utilizando map para multiplicar todos los elementos de la lista por 2
dobles = list(map(lambda x: x * 2, numeros))  # [2, 4, 6, 8, 10]

# Utilizando filter para obtener sólo los números pares
pares = list(filter(lambda x: x % 2 == 0, numeros))  # [2, 4]

# Utilizando reduce para sumar todos los elementos de la lista
from functools import reduce
suma = reduce(lambda acumulador, valor: acumulador + valor, numeros, 0)  # 15

```

---

## PATRÓN MODELO VISTA CONTROLADOR

Acá puedes ver 2 ejemplos de una implementación del patrón **Modelo-Vista-Controlador**

- [Aqui](./mvc-js) en **Javascript** usando **NodeJS**x
- [Aqui](./mvc-py) en **Python** usando **Flask**

---

## VERSIONAMIENTO DE CÓDIGO - GIT

Recursos:

- <https://docs.bluehosting.cl/tutoriales/conocimientos-generales/uso-basico-de-git---guia-practica.html>
- <https://www.freecodecamp.org/espanol/news/guia-para-principiantes-de-git-y-github/>
- <https://gitmoji.dev/>
