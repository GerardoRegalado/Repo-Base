# Workflow

Flujo comercial y técnico oficial para operar este template sin sobreingeniería.

## 1. Discovery

- El cliente llena `docs/discovery.md`.
- `docs/discovery.md` es la fuente principal de verdad para objetivo, alcance, restricciones, contenido, branding, integraciones y prioridad.
- Interpretación obligatoria:
  - `[x]` = seleccionado
  - `[ ]` = no seleccionado
  - respuestas en texto libre = fuente de verdad
  - dominio deseado = parte del discovery

## 2. Project Scope

- Generar o actualizar `docs/project-scope.md` a partir de `docs/discovery.md`.
- Definir alcance incluido, excluido, supuestos, dependencias y criterios de aceptación.
- Este documento debe quedar listo antes del mockup y antes de iniciar estrategia de desarrollo.

## 3. Quote

- Generar o actualizar `docs/quote.md` usando `pricing-strategy`, con base en `docs/discovery.md` + `docs/project-scope.md`.
- La cotización debe quedar clara, vendible y alineada al alcance aprobado.
- Este documento también debe existir antes de mockup y antes de estrategia de desarrollo.

## 4. Design / Mockup

- Codex crea el prompt definitivo para Stitch con base en `docs/discovery.md`, `docs/project-scope.md` y `docs/quote.md`.
- Ese prompt se guarda dentro de `PROMPTS.md` en la sección destinada para Stitch.
- El usuario copia ese prompt manualmente, lo ejecuta en Stitch y pega el resultado manualmente en `docs/design.md`.

## 5. Development Strategy

- Solo después de tener discovery + scope + quote + design, Codex genera `docs/development-strategy.md` (modo plan).
- La estrategia define stack, arquitectura, features, riesgos, dependencias, fases, criterios de aceptación, skills y validaciones manuales.

## 6. Implementation with Codex

- Codex implementa tomando como base obligatoria:
  - `docs/discovery.md`
  - `docs/project-scope.md`
  - `docs/quote.md`
  - `docs/design.md`
  - `docs/development-strategy.md`
- No se deben inventar secciones, features o integraciones fuera del scope aprobado.

## 7. QA / Delivery

- Validar funcionalidad, responsive, contenido, metadata y comportamiento esperado según alcance.
- Correr `npm run validate` antes de cierre cuando aplique.
- Si existe ambiente `staging`, validar ahí antes de promover a `main`.
- Entregar solo lo aprobado y registrar ampliaciones como fase posterior.

## Reglas operativas

- `docs/discovery.md` manda sobre interpretaciones verbales o mensajes sueltos.
- `docs/project-scope.md` y `docs/quote.md` se cierran antes de mockup.
- `docs/development-strategy.md` se genera después de tener `docs/design.md`.
- Si cambia el alcance, actualizar scope y cotización antes de seguir implementando.
