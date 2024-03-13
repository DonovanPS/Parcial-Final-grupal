# API REST de Gestión de Productos

## Descripción
Esta API proporciona operaciones para la gestión de productos, incluyendo la recuperación, creación, actualización y eliminación de productos en un sistema.

## Integrantes
- Julieth Becerra
- Donovan Picón
- Yasser Cristancho

## URL de la API Desplegada
[https://api-rest-julieth-donovan.onrender.com](https://api-rest-julieth-donovan.onrender.com)

## Endpoints Disponibles

### Obtener Todos los Productos
- **Descripción**: Recupera todos los productos almacenados en el sistema.
- **Método HTTP**: GET
- **Ruta**: `/products`
- **Respuestas**:
  - `200 OK`: La solicitud fue exitosa. Devuelve una lista de todos los productos.
  - `500 Server Error`: Se produjo un error en el servidor.

### Agregar Nuevo Producto
- **Descripción**: Agrega un nuevo producto al sistema.
- **Método HTTP**: POST
- **Ruta**: `/products`
- **Parámetros**:
  - `body`: Información del producto (Ver definición de productos)
- **Respuestas**:
  - `200 OK`: El producto se agregó correctamente.
  - `500 Server Error`: Se produjo un error en el servidor.

### Buscar Producto por ID
- **Descripción**: Busca un producto por su ID.
- **Método HTTP**: GET
- **Ruta**: `/products/{id}`
- **Parámetros**:
  - `id`: ID del producto a buscar
- **Respuestas**:
  - `200 OK`: La solicitud fue exitosa. Devuelve la información del producto.
  - `500 Server Error`: Se produjo un error en el servidor.

### Actualizar Producto por ID
- **Descripción**: Actualiza un producto existente por su ID.
- **Método HTTP**: PUT
- **Ruta**: `/products/{id}`
- **Parámetros**:
  - `id`: ID del producto a actualizar
  - `body`: Información actualizada del producto (Ver definición de productos)
- **Respuestas**:
  - `200 OK`: El producto se actualizó correctamente.
  - `500 Server Error`: Se produjo un error en el servidor.

### Eliminar Producto por ID
- **Descripción**: Elimina un producto por su ID.
- **Método HTTP**: DELETE
- **Ruta**: `/products/{id}`
- **Parámetros**:
  - `id`: ID del producto a eliminar
- **Respuestas**:
  - `200 OK`: El producto se eliminó correctamente.
  - `404 Producto no encontrado`: El producto con el ID especificado no fue encontrado.
  - `500 Server Error`: Se produjo un error en el servidor.

## Definición de Productos
- **Descripción**: Define la estructura de un producto en la API.
- **Propiedades**:
  - `name`: Nombre del producto (string)
  - `description`: Descripción del producto (string)
  - `price`: Precio del producto (number)
  - `stock`: Stock disponible del producto (number)
  - `category`: Categoría del producto (string - ID de la categoría)


## Consumo desde Apollo 

- **Get**:

[![Whats-App-Image-2024-03-12-at-7-43-19-PM.jpg](https://i.postimg.cc/cLv3gzyk/Whats-App-Image-2024-03-12-at-7-43-19-PM.jpg)](https://postimg.cc/cvNCPXJf)