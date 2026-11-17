# EjercicioResuelto

Aplicación Expo de React Native con TypeScript, Clean Architecture e InversifyJS.

## Ejecutar

```bash
npm install
npm run start
```

Para ejecutar la versión web: `npm run web`.

## Capas

- `Domain`: entidades, DTO y contratos de repositorio/caso de uso.
- `Application`: caso de uso `GetPersonsWithDepartments`.
- `Data`: repositorios mock de personas y departamentos.
- `Presentation`: modelo UI, mapper, ViewModel y pantalla de listado.
- `src/di`: configuración del contenedor de InversifyJS.