**Proyecto-soyyo**

**Información importante:**

La siguiente Api se realiza con longitudes de programación Nodejs, el fin de este proyecto se conecta a una API REST con información de clientes en formato JSON.

**Instalacion:**
Instalar Nodejs para poder ejecutar el proyecto, despues de descargar el repositorio poner comando en consola yarn install, para instalar el node_modules. Puerto de ejecución http://localhost:3000

**Introducción:**

Este proyecto es una prueba técnica, la cual consiste en conectarse a una Api Rest con información de usuarios clientes y generar un listado con todas las propiedades en orden alfabético por el nombre ascendentemente. Tiene tres validaciones, un estado 200 si se llama a la lista correctamente con startId 1 en adelante y endId hasta 20. Estado 400 si existe algun objeto vacio. Estado 404 si el rango es mayor a 20.

**Información adicional:**

Ejecución del proyecto con yarn run dev. Proyecto realizado con arquitectura limpia, pruebas unitarias con jest, comando de ejecucion yarn jest.
Si deseas probar el proyecto en postman la ruta es: POST http://localhost:3000/api/v1/test-soyyo/entities/filter Params startId (Integer), endId(Integer).




![](https://pandao.github.io/editor.md/examples/images/4.jpg)
