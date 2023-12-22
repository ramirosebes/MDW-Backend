# Metodologías y Desarrollo Web - Final Backend
> Serveridor

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

Crear archivo serviceAccountKey.json indicando:

```sh
type
project_id
private_key_id
private_key
client_email
client_id
auth_uri
token_uri
auth_provider_x509_cert_url
client_x509_cert_url
universe_domain
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

## Repositorios

#### [Metodologias y Desarrollo Web - Final Frontend](https://github.com/ramirosebes/MCGA-Frontend)
#### [Metodologias y Desarrollo Web - Final Backend](https://github.com/ramirosebes/MCGA-Backend)

## Tecnologias

* Node.js
* TypeScrit
* Express
* MongoDB
* Mongoose
* Firebase
* Dotenv
* Cors

## Autores

| Nombre | Mail     | Github                | LinkedIn                |
| :-------- | :------- | :------------------------- | :------------------------- |
| Antuna Juan Manuel | altunajuan@gmail.com | [@Venineitor2000](https://github.com/Venineitor2000) | [Antuna Juan Manuel](https://www.linkedin.com/in/juan-manuel-altuna-641782176/) |
| Miñón Lorenzo | nicolasmicheletti@gmail.com | [@LorenzoMinon](lorenzominon01@gmail.com) | [Miñón Lorenzo](https://www.linkedin.com/in/lorenzominon/) |
| Sebes Ramiro Nicolás | ramirosebes@gmail.com | [@ramirosebes](https://github.com/ramirosebes) | [Sebes Ramiro Nicolás](https://www.linkedin.com/in/ramirosebes) |
