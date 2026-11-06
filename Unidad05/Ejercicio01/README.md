# Unidad05: Clean Architecture e InversifyJS

Aplicacion Expo/React Native que muestra personas segun el dia del mes. El caso de uso selecciona hombres (`H`) en dias pares y mujeres (`M`) en dias impares.

## Ejecutar

```bash
npm install
npm start
```

## Capas

- `domain`: entidad `Persona` y contratos de repositorio y caso de uso.
- `application`: regla de filtrado por paridad del dia.
- `data`: `RepositoryPersonas` genera 100 personas de ejemplo (50 `H` y 50 `M`); `RepositoryPersonasVacio` implementa el mismo contrato con una lista vacía.
- `presentation`: `VMPersonas` y vista nativa.
- `di`: tokens y configuracion del contenedor Inversify.

La vista resuelve `VMPersonas` desde el contenedor. Inversify inyecta el caso de uso en el ViewModel y el repositorio en el caso de uso.

El contenedor usa `RepositoryPersonas` para mostrar el listado de ejemplo. Para probar el estado vacío, cambia el binding de `IPersonasRepository` en `src/di/container.ts` para usar `RepositoryPersonasVacio`.