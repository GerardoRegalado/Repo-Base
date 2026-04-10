# Workflow Client To Build

## Objetivo

Este flujo define cómo pasar de oportunidad comercial a entrega con una operación repetible y ligera para proyectos freelance.

## 1. Discovery

- entender el negocio, objetivo y urgencia
- detectar si el proyecto es landing, sitio institucional, SPA ligera o algo que crecerá a admin
- identificar riesgos tempranos de contenido, media, integraciones o aprobaciones

Documento recomendado:

- `docs/discovery-call-template.md`

## 2. Client brief

- convertir la conversación en datos estructurados
- documentar objetivos, alcance probable, restricciones e integraciones

Documento recomendado:

- `docs/client-brief.md`

## 3. Scope

- traducir el brief en un alcance cerrado
- dejar explícito qué sí entra y qué no entra
- definir criterios de aceptación y dependencias del cliente

Documento recomendado:

- `docs/project-scope-template.md`

## 4. Quote

- cotizar sobre el scope aprobado
- dejar claro timeline, forma de pago y exclusiones

Documento recomendado:

- `docs/quote-template.md`

## 5. Mockup o demo

- validar dirección visual y narrativa antes de construir demasiado
- usar esta base para demostrar estructura, secciones y tono comercial

## 6. Build

- rebrand en `config/brand.ts` y `config/site.ts`
- cargar contenido en `content/*`
- implementar UI en `components/*`
- encapsular integraciones en `services/*`

## 7. QA

- revisar navegación, responsive, metadata y contenido
- correr `lint`, `typecheck`, `test` y `build`
- validar que el alcance aprobado coincida con la entrega

## 8. Delivery

- entregar repo, deploy y documentación mínima
- dejar siguientes pasos claros
- registrar cualquier cambio pendiente como fase nueva o change request

## Si aparece un cambio de alcance

- no mezclarlo con el scope original
- documentarlo
- cotizarlo o convertirlo en fase siguiente

Documento recomendado:

- `docs/change-request-template.md`
