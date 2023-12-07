# Final Backend
Se desarrollo una API que a través de distintos endpoints permite el CRUD de productos mediante distintos endpoints.

## Instalación y uso

Para descargar los paquetes necesarios de la API: 

```sh
npm install
```

Crear archivo .env indicando:

```sh
PORT (Puerto en el que se va a levantar el servidor)
DB_CONNECTION_STRING (Conexión a la base de datos)
```

Inicialización:

```sh
npm start
```

## Endpoints

* /products
    * GET: Obtiene todos los productos
    * GET: Adjuntando /:id al endpoint, obtiene un producto determinado
    * POST: Adjuntando un body que corresponda con los campos del producto, lo crea.
    * PUT: Adjuntando /:id al endpoint y un body que corresponda con los campos del producto, lo actualiza
    * DELETE: Adjuntando /:id al endpoint, elimina el producto

## Repositorio

https://github.com/ramirosebes/MCGA-Backend.git

## Tecnologias

* Node.js
* TypeScrit
* Express
* MongoDB (Database)
