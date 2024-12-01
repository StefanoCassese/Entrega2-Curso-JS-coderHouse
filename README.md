# Proyecto de Sitio Web con Carrito de Compras

## Descripción

Este es un proyecto sencillo de un sitio web no responsive desarrollado con el objetivo de poner en práctica conceptos de JavaScript relacionados con la manipulación del DOM, funciones y eventos. El sitio permite:

- Mostrar una lista de productos.
- Agregar y quitar productos al carrito mediante botones y eventos `click`.
- Calcular automáticamente el total del carrito considerando precios y cantidades de los productos.
- Guardar los datos del carrito en `localStorage` para que persistan incluso al cerrar la página.
- Recuperar los datos almacenados en `localStorage` utilizando `JSON.parse` para reconstruir los objetos en el carrito.

## Características

1. **Interactividad con el DOM**  
   Utilicé JavaScript para interactuar con los elementos del DOM y gestionar la funcionalidad del carrito de compras.

2. **Eventos y Funciones**  
   Los botones para agregar y quitar productos están vinculados a eventos `click`, que ejecutan funciones para actualizar el carrito dinámicamente.

3. **Cálculo Automático del Total**  
   Cada vez que se agrega o elimina un producto, se recalcula automáticamente el total del carrito.

4. **Persistencia de Datos**  
   Implementé `localStorage` para almacenar los datos del carrito y garantizar que la información se mantenga incluso después de recargar o cerrar la página.

## Tecnología Utilizada

- **HTML**: Estructura básica del sitio web.
- **CSS**: Estilo básico para los elementos del sitio.
- **JavaScript**: Lógica principal del proyecto, incluyendo manipulación del DOM, gestión de eventos y almacenamiento local.

