
# GUÍA RÁPIDA PYTHON

Python es un lenguaje de programación de alto nivel y fácil de aprender. Aquí hay algunos puntos clave para empezar:

## Instalar Python

Para utilizar Python, primero necesita instalarlo en su sistema. Puede descargar la última versión de Python desde el sitio web oficial: <https://www.python.org/>

## Interprete de Python

Una vez que tenga Python instalado, puede iniciar el interprete de Python escribiendo python en su terminal o símbolo del sistema. Esto le permitirá escribir y ejecutar código Python de forma interactiva.

## Escribir y ejecutar un programa

Para escribir un programa en Python, puede utilizar un editor de texto como el Bloc de notas o el Sublime Text. Una vez que haya escrito su código, puede ejecutarlo escribiendo **python nombre_del_archivo.py** en su terminal o símbolo del sistema.

Por ejemplo:

```py
python nombre_del_archivo.py
```

## Sintaxis básica

Aquí hay algunos puntos clave de la sintaxis de Python:

- Python utiliza indentación en lugar de llaves para delimitar bloques de código.
- Las líneas terminan con punto y coma ( ; ) son opcionales en Python.
- Los comentarios en Python comienzan con el símbolo #.
Ejemplo:

```py
# Este es un comentario

def hola_mundo():  # Esta es una función
    print("Hola, mundo!")  # Esta es una llamada a la función print

hola_mundo()  # Llamamos a la función hola_mundo

```

## Tipos de datos y variables

Python tiene varios tipos de datos básicos, como números (entero, flotante), cadenas y booleanos (verdadero/falso).

Para declarar una variable, basta con asignarle un valor:

```py
mensaje = "Hola, mundo!"
numero = 42
esVerdad = True
numeros = [1, 2, 3, 4, 5]
```

## Control de flujo

Python tiene estructuras de control de flujo como **if** y **while** para ejecutar código de forma condicional o repetitiva.

Ejemplo:

```py
numero = 10

if numero > 5:
    print("El número es mayor a 5")
elif numero < 5:
    print("El número es menor a 5")
else:
    print("El número es igual a 5")

while numero > 0:
    print(numero)
    numero -= 1
```

## Bucles

Python tiene dos tipos de bucles: **for** y **while**. El bucle for se utiliza para iterar sobre una secuencia de elementos, mientras que el bucle while se utiliza para ejecutar un bloque de código mientras se cumpla una condición.

Ejemplo:

```py
# Bucle for

numeros = [1, 2, 3, 4, 5]

for numero in numeros:
    print(numero)

# Bucle while

numero = 10

while numero > 0:
    print(numero)
    numero -= 1

```

## Funciones

Las funciones son bloques de código reutilizables que se pueden llamar varias veces. En Python, las funciones se declaran con la palabra clave def.

Ejemplo:

```py
def saludar(nombre):
    print("Hola, " + nombre)

saludar("Juan")  # Imprime "Hola, Juan"
saludar("Ana")  # Imprime "Hola, Ana"
```

## Módulos

Los módulos son archivos que contienen código Python y se pueden importar en otros programas. Python viene con muchos módulos incorporados, y también se pueden instalar módulos de terceros con la herramienta pip.

Para importar un módulo, se utiliza la palabra clave import.

Ejemplo:

```py
import math

print(math.pi)  # Imprime el valor de pi
print(math.sin(math.pi / 2))  # Imprime el seno de pi/2

```

## Manejo de errores

En Python, se pueden manejar errores y excepciones con la palabra clave **try** y **except**.

Ejemplo:

```py
try:
    numero = int("foo")
except ValueError:
    print("No se puede convertir la cadena a un número")
```

## Clases y objetos

La programación orientada a objetos (POO) es un paradigma de programación que se basa en la creación de objetos que tienen atributos y métodos. En Python, se pueden crear clases para definir los atributos y métodos de un objeto.

Ejemplo:

```py
class Auto:
    def __init__(self, marca, modelo, color):
        self.marca = marca
        self.modelo = modelo
        self.color = color
    
    def acelerar(self):
        print("Brrumm brrumm")

mi_auto = Auto("Ford", "Mustang", "Rojo")

print(mi_auto.marca)  # Imprime "Ford"
mi_auto.acelerar()  # Imprime "Brrumm brrumm"
```

## Archivos

En Python, se pueden abrir y manipular archivos de texto y binarios.

Ejemplo:

```py
# Apertura de un archivo de texto en modo lectura

with open("archivo.txt", "r") as archivo:
    contenido = archivo.read()
    print(contenido)

# Apertura de un archivo de texto en modo escritura

with open("archivo.txt", "w") as archivo:
    archivo.write("Hola, mundo!")
```

## Manejo de paquetes

En Python, los paquetes son conjuntos de módulos que se pueden instalar y utilizar en diferentes proyectos. Se pueden instalar paquetes con la herramienta **pip**, y luego se pueden importar en un programa utilizando la sintaxis **import paquete.modulo.**

## Otros recursos

Aquí hay algunos recursos adicionales que le pueden ser útiles al aprender Python:

- La [documentación de Python](https://docs.python.org/3/) es una fuente invaluable de información y ejemplos.
- Existen muchos [tutoriales en línea](https://www.tutorialspoint.com/python/index.htm) y [libros](https://www.amazon.com/Python-Crash-Course-Hands-Project-Based/dp/1593276036) que le pueden ayudar a profundizar en los conceptos de Python.
- [Stack Overflow](https://stackoverflow.com/) es una gran fuente de respuestas a preguntas técnicas y problemas comunes de Python.

Espero que esta guía rápida de Python le haya sido de utilidad. ¡Buena suerte en su aprendizaje de Python!
