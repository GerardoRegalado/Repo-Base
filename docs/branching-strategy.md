# Branching y Entrega

Estrategia mínima para este template con tres ramas estables:

## Propósito de cada rama

- `develop`: rama principal de desarrollo diario e integración continua.
- `staging`: rama de validación previa (QA funcional, revisión visual, smoke/e2e cuando aplique).
- `main`: rama de producción, solo recibe cambios ya validados.

## Flujo esperado

1. Trabajar features y fixes partiendo de `develop` (o ramas cortas que vuelven a `develop`).
2. Promover de `develop` a `staging` mediante Pull Request para validar el release candidato.
3. Promover de `staging` a `main` mediante Pull Request cuando la validación esté completa.

## Deploy y ambientes

- Producción debe desplegarse desde `main`.
- `staging` se usa como preproducción para validar antes de liberar.
- En Vercel (o similar), configura `main` como Production Branch y usa previews para validación en `staging`.
