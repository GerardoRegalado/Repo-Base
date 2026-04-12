# Workflow

Flujo comercial y técnico oficial para operar este template sin sobreingeniería.

## 1. Discovery

- El cliente llena `docs/discovery.md`.
- `docs/discovery.md` es la fuente principal de verdad para objetivo, alcance, restricciones, contenido, branding, integraciones y prioridad.
- Interpretación obligatoria:
  - `[x]` = seleccionado.
  - `[ ]` = no seleccionado.
  - respuestas en texto libre = fuente de verdad.
  - dominio deseado = parte del discovery.

## 2. Project Scope

- Generar o actualizar `docs/project-scope.md` a partir de `docs/discovery.md`.
- Definir alcance incluido, excluido, supuestos, dependencias y criterios de aceptación.
- `docs/project-scope.md` debe existir antes de `docs/quote.md`.

## 3. Quote

- Generar o actualizar `docs/quote.md` usando `pricing-strategy`, con base en `docs/discovery.md` + `docs/project-scope.md`.
- `docs/quote.md` debe quedar alineado al scope aprobado.

## 4. Prompt para Stitch

- Generar el prompt definitivo para Stitch en una corrida separada.
- Requiere como base:
  - `docs/discovery.md`
  - `docs/project-scope.md`
  - `docs/quote.md`
- El prompt final se guarda en la sección C de `PROMPTS.md`.

## 5. Design / Mockup

- El usuario copia ese prompt manualmente, lo ejecuta en Stitch y pega el resultado manualmente en `docs/design.md`.
- `docs/design.md` queda como fuente visual aprobada para la estrategia y la implementación.

## 6. Development Strategy

- Solo después de tener discovery + scope + quote + design, Codex genera `docs/development-strategy.md` (modo plan).
- La estrategia define stack, arquitectura, features, riesgos, dependencias, fases, criterios de aceptación, skills y validaciones manuales.

## 7. Implementation with Codex

- Codex implementa tomando como base obligatoria:
  - `docs/discovery.md`
  - `docs/project-scope.md`
  - `docs/quote.md`
  - `docs/design.md`
  - `docs/development-strategy.md`
- No se deben inventar secciones, features o integraciones fuera del scope aprobado.

## 8. QA / Delivery

- Validar funcionalidad, responsive, contenido, metadata y comportamiento esperado según alcance.
- Correr `npm run validate` antes de cierre cuando aplique.
- Si existe ambiente `staging`, validar ahí antes de promover a `main`.
- Entregar solo lo aprobado y registrar ampliaciones como fase posterior.

## Reglas operativas

- `docs/discovery.md` manda sobre interpretaciones verbales o mensajes sueltos.
- `docs/project-scope.md` se cierra antes de `docs/quote.md`.
- `docs/quote.md` se cierra antes de generar el prompt para Stitch.
- `docs/development-strategy.md` se genera después de tener `docs/design.md`.
- Si cambia el alcance, actualizar scope y cotización antes de seguir implementando.
