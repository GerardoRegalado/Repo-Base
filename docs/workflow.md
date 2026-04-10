# Workflow

Flujo mínimo y reusable para operar proyectos freelance con este repo base.

## 1. Discovery y brief

- El cliente llena `docs/client-brief.md`.
- Este archivo es la fuente principal de verdad para entender objetivo, alcance, restricciones, contenido, branding, integraciones y prioridad.
- Las opciones marcadas con `[x]` deben interpretarse como seleccionadas y las opciones con `[ ]` como no seleccionadas.
- Las respuestas en texto libre también forman parte de la fuente de verdad del brief.
- El dominio deseado por el cliente también debe considerarse parte del discovery porque puede afectar validación y recomendaciones posteriores.
- La estructura del brief debe mantenerse igual que el cuestionario que se comparte al cliente en Word.

## 2. Revisión comercial y cotización

- Revisa `docs/client-brief.md`.
- Genera o actualiza `docs/quote.md` usando el skill `pricing-strategy`.
- Actualiza `docs/project-scope.md` con el alcance incluido, excluido, supuestos, dependencias y criterios de aceptación que se desprenden del mismo brief.
- Si faltan datos importantes, no los inventes: déjalos como supuestos o información pendiente dentro de `docs/quote.md`.

## 3. Estrategia de desarrollo

- Genera `docs/development-strategy.md` a partir del mismo `docs/client-brief.md`.
- Define stack, arquitectura, funcionalidades principales, riesgos, dependencias, supuestos y fases de implementación.
- La estrategia debe ser práctica, orientada a MVP y alineada con este repo base de Next.js + Tailwind.

## 4. Implementación con Codex

- Codex ejecuta el trabajo siguiendo `docs/development-strategy.md`.
- Usa los skills adecuados según la fase o necesidad del proyecto.
- Mantén la implementación dentro del alcance aprobado en `docs/project-scope.md`.

## 5. QA, validación y entrega

- Validar funcionamiento, responsive, contenido, metadata, integraciones y build.
- Correr `npm run validate` antes de cierre cuando aplique.
- Confirmar que la entrega cumple los criterios de aceptación definidos en `docs/project-scope.md`.
- Entregar solo lo aprobado y registrar cualquier ampliación como siguiente fase.

## Reglas operativas

- `docs/client-brief.md` manda sobre interpretaciones verbales o mensajes sueltos.
- `docs/quote.md`, `docs/project-scope.md` y `docs/development-strategy.md` deben derivarse del mismo brief.
- Si aparece un cambio de alcance, actualiza el scope, la cotización o crea una nueva fase, pero no mezcles trabajo adicional en silencio.
- Mantén la documentación ligera: si una decisión ya está cubierta por estos archivos, no abras documentos nuevos.
