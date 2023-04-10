# Prueba Técnica Redagar (Inditex)

## Para lanzar la aplicación en desarrollo:

```
npm run dev
```
Navegar a la dirección: [http://127.0.0.1:5173/](http://127.0.0.1:5173/)

## Para lanzar la aplicación en producción:

```
npm run preview
```
Navegar a la dirección: [http://127.0.0.1:4173/](http://127.0.0.1:4173/)


# Observaciones

- Se deberían añadir más tests e2e para completar las historas de navegacion desde el titulo, y navegación desde
la imagen y el titulo del podcast

- Se usan directamente los repositorios REST, lo ideal seria crear una clase que seleccionara un repositorio
segun la configuración y funcionara como fachada entre la app y el repositorio concreto. De esta manera podriamos
alternar entre una base de datos de test basada en ficheros y la base de datos real cuand estemos en desarrollo.

- Los tests unitarios testean cada uno de los componentes de presentación y los helpers
- Los tests e2e testean la historia de usuario, es decir los view components