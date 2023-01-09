# GUIA RÁPIDA DE POSTGRES

## 1. INSTALACION DE LA BASE DE DATOS

- Windows- <https://techexpert.tips/windows/installing-postgresql-windows/>
- Linux - <https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-20-04>
- Macos - <https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-macos/>
- Docker se necesita docker instalado se puede instalar de la siguiente manera:
  - <https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04>

  Y ejecutar el siguiente comando:

  ```sh
  docker run --name my-postgres15 -e POSTGRES_PASSWORD=postgres -p 5432:5432 postgres:15
  ```

## 2. Crear una base de datos

Para crear una base de datos en PostgreSQL, puedes usar el comando `CREATE DATABASE`. Por ejemplo, para crear una base de datos llamada "personas", podrías usar el siguiente comando:

```sh
CREATE DATABASE personas;
```

## 3. Tipos de datos

En PostgreSQL, puedes utilizar distintos tipos de datos para almacenar diferentes tipos de información. Algunos de los tipos de datos más comunes son:

- INTEGER: para almacenar números enteros.
- REAL: para almacenar números con decimales.
- VARCHAR: para almacenar cadenas de texto de longitud variable.
- BOOLEAN: para almacenar valores verdadero o falso.

## 4. Crear tablas

Una vez que tienes la base de datos creada, puedes crear tablas en ella. Para crear una tabla, debes especificar el nombre de la tabla y las columnas que deseas incluir en ella. Por ejemplo, para crear una tabla llamada "empleados" que almacene información sobre los empleados de una empresa, podrías usar el siguiente comando:

```sh
CREATE TABLE empleados (
    id serial PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    salario REAL NOT NULL
);
```

Este comando crearía una tabla llamada "empleados" con las columnas "id", "nombre", "apellido", "cargo" y "salario". La columna "id" es una clave primaria y se utiliza como un identificador único para cada empleado. Las otras columnas almacenan información sobre el nombre, apellido, cargo y salario de cada empleado.

## 4. Restricciones

Puedes añadir restricciones a las columnas de una tabla para asegurar que los datos insertados cumplan ciertas condiciones. Algunas de las restricciones más comunes son:

NOT NULL: para asegurar que una columna no puede tener un valor null.

- `UNIQUE`: para asegurar que todos los valores de una columna son únicos.
- `PRIMARY KEY`: para indicar que una columna es la clave principal de la tabla y que sus valores son únicos.
- `FOREIGN KEY`: para indicar que una columna hace referencia a una columna en otra tabla.

En el ejemplo anterior, se ha utilizado la restricción `PRIMARY KEY` para la columna "id" y la restricción `NOT NULL` para todas las otras columnas.

## 6. Consultas básicas

Una vez que tienes tu base de datos creada y tus tablas llenas de datos, puedes empezar a hacer consultas para obtener la información que necesitas. Algunas de las consultas más comunes son:

- `SELECT`: para seleccionar ciertas columnas de una tabla.
- `FROM`: para especificar de qué tabla quieres obtener los datos.
- `WHERE`: para filtrar los resultados de acuerdo a ciertas condiciones.
- `ORDER BY`: para ordenar los resultados de acuerdo a una columna específica.

Por ejemplo, si quieres obtener el nombre y apellido de todos los empleados de la tabla "empleados" que tengan un salario mayor a 5000, podrías usar la siguiente consulta:

```sh
SELECT nombre, apellido
FROM empleados
WHERE salario > 5000;
```

Esta consulta seleccionaría las columnas "nombre" y "apellido" de la tabla "empleados" y filtraría los resultados para incluir solo aquellos empleados que tengan un salario mayor a 5000.

Espero que esta guía básica te haya sido de ayuda para empezar a trabajar con PostgreSQL. Si tienes alguna pregunta o necesitas más ayuda, no dudes en preguntar.

## 7. Recursos

Aquí te dejo algunos recursos que te pueden ayudar a seguir aprendiendo sobre PostgreSQL:

- La documentación oficial de PostgreSQL: <https://www.postgresql.org/docs/>
- La página de la comunidad de PostgreSQL: <https://www.postgresql.org/community/>
- Un tutorial en línea de PostgreSQL: <https://www.tutorialspoint.com/postgresql/index.htm>
- Un curso en línea de PostgreSQL: <https://www.udemy.com/course/postgresql-tutorial/>

- Recursos de SQL en general: <https://www.dofactory.com/sql/join> <https://learnsql.com/blog/sql-basics-cheat-sheet/>  <https://www.geeksforgeeks.org/sql-ddl-dql-dml-dcl-tcl-commands/>

También te recomiendo buscar en la web tutoriales y ejemplos prácticos, ya que esto puede ayudarte a entender mejor cómo funciona PostgreSQL y cómo puedes utilizarlo en tus proyectos.
