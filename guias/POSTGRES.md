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

### Ejemplos

Creación de la tablas `Personas` y `fotografias`:

```sql
-- Crear tabla de personas
CREATE TABLE personas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    edad INTEGER NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL
);

-- Crear tabla de fotografías
CREATE TABLE fotografias (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descripcion TEXT,
    url VARCHAR(200) NOT NULL,
    persona_id INTEGER REFERENCES personas(id)
);
```

Este script creará dos tablas: **`personas`** y **`fotografias`**. La tabla **`personas`** tiene cuatro columnas: **`id`** (que es una clave primaria autoincremental), **`nombre`**, **`apellido`**, **`edad`** y **`correo_electronico`**. La tabla **`fotografias`** tiene cinco columnas: **`id`** (clave primaria autoincremental), **`titulo`**, **`descripcion`**, **`url`** y **`persona_id`** (que es una clave foránea que hace referencia a la tabla **`personas`**).

Script para llenado de datos:

```sql
-- Insertar datos en la tabla de personas
INSERT INTO personas (nombre, apellido, edad, correo_electronico)
VALUES 
  ('Juan', 'Pérez', 32, 'juanperez@gmail.com'),
  ('María', 'González', 28, 'mariagonzalez@gmail.com'),
  ('Pedro', 'Rodríguez', 42, 'pedrorodriguez@hotmail.com');

-- Insertar datos en la tabla de fotografías
INSERT INTO fotografias (titulo, descripcion, url, persona_id)
VALUES
  ('Playa', 'Fotografía de una playa en el Caribe', 'https://ejemplo.com/playa.jpg', 1),
  ('Montaña', 'Fotografía de una montaña en los Andes', 'https://ejemplo.com/montaña.jpg', 2),
  ('Ciudad', 'Fotografía de una ciudad en Europa', 'https://ejemplo.com/ciudad.jpg', 3);
```

Este script inserta datos en las dos tablas creadas anteriormente. En la tabla **`personas`**, se insertan tres registros con sus correspondientes valores para **`nombre`**, **`apellido`**, **`edad`** y **`correo_electronico`**. En la tabla **`fotografias`**, se insertan tres registros con sus correspondientes valores para **`titulo`**, **`descripcion`**, **`url`** y **`persona_id`**. Tenga en cuenta que la columna **`persona_id`** en la tabla **`fotografias`** se refiere al **`id`** de la persona que tomó la foto en la tabla **`personas`**.

1. **`SELECT`** con **`WHERE`**:

    ```sql
    -- Seleccionar todas las fotografías tomadas por una persona en particular
    SELECT titulo, url
    FROM fotografias
    WHERE persona_id = 1;
    ```

    En este ejemplo, se utiliza la cláusula **`WHERE`** para seleccionar todas las fotografías tomadas por la persona con **`id`** igual a 1 en la tabla **`personas`**.

2. **`SELECT`** con **`JOIN`**:

    ```sql
    -- Seleccionar todas las fotografías con el nombre y apellido de la persona que las tomó
    SELECT fotografias.titulo, fotografias.url, personas.nombre, personas.apellido
    FROM fotografias
    JOIN personas ON fotografias.persona_id = personas.id;

    ```

    En este ejemplo, se utiliza la cláusula **`JOIN`** para unir las tablas **`fotografias`** y **`personas`** a través de la columna **`persona_id`** y **`id`**, respectivamente. Luego, se seleccionan las columnas **`titulo`**, **`url`**, **`nombre`** y **`apellido`** de ambas tablas.

3. **`SELECT`** con **`GROUP BY`** y **`HAVING`**:

    ```sql
    -- Seleccionar la cantidad de fotografías tomadas por cada persona, siempre y cuando hayan tomado al menos 2 fotos

    SELECT personas.nombre, COUNT(*) as cantidad_fotos
    FROM fotografias
    JOIN personas ON fotografias.persona_id = personas.id
    GROUP BY personas.nombre
    HAVING COUNT(*) >= 2;
    ```

    En este ejemplo, se utiliza la cláusula **`GROUP BY`** para agrupar las fotografías por persona, y luego se utiliza la cláusula **`HAVING`** para filtrar solo aquellas personas que han tomado al menos 2 fotografías. Se selecciona el **`nombre`** de la persona y la cantidad de fotografías que han tomado.

4. **`SELECT`** con la opción **`ILIKE`** en SQL:

    ```sql
    -- Seleccionar todas las personas cuyo nombre o apellido contenga "garcia"
    SELECT *
    FROM personas
    WHERE nombre ILIKE '%garcia%' OR apellido ILIKE '%garcia%';
    ```

    En este ejemplo, se utiliza la opción **`ILIKE`** para realizar una búsqueda de patrones en las columnas **`nombre`** y **`apellido`** de la tabla personas. La consulta devolverá todas las filas donde el nombre o el apellido contengan la cadena "garcia", independientemente de si está en mayúsculas o minúsculas, gracias a que **`ILIKE`** es una comparación insensible a mayúsculas y minúsculas.

    Por ejemplo, si en la tabla **`personas`** existieran los registros "Luis García", "María Garcia", "Pedro García" y "Lorena Pérez", la consulta anterior devolvería las tres primeras filas.

## 7. Recursos

Aquí te dejo algunos recursos que te pueden ayudar a seguir aprendiendo sobre PostgreSQL:

- La documentación oficial de PostgreSQL: <https://www.postgresql.org/docs/>
- La página de la comunidad de PostgreSQL: <https://www.postgresql.org/community/>
- Un tutorial en línea de PostgreSQL: <https://www.tutorialspoint.com/postgresql/index.htm>
- Un curso en línea de PostgreSQL: <https://www.udemy.com/course/postgresql-tutorial/>

- Recursos de SQL en general: <https://www.dofactory.com/sql/join> <https://learnsql.com/blog/sql-basics-cheat-sheet/>  <https://www.geeksforgeeks.org/sql-ddl-dql-dml-dcl-tcl-commands/>

También te recomiendo buscar en la web tutoriales y ejemplos prácticos, ya que esto puede ayudarte a entender mejor cómo funciona PostgreSQL y cómo puedes utilizarlo en tus proyectos.
