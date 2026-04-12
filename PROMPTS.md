# PROMPTS OPERATIVOS

Este archivo concentra los prompts reutilizables para operar el flujo comercial y técnico del template.

## A) Prompt comercial para Codex

```md
Actúa como estratega comercial y técnico para un proyecto web freelance.

1) Lee primero `docs/discovery.md` y úsalo como fuente principal de verdad.
2) Interpreta el discovery así:
   - `[x]` = seleccionado
   - `[ ]` = no seleccionado
   - respuestas en texto libre = fuente de verdad
   - dominio deseado = parte del discovery y puede afectar recomendaciones
3) Usa el skill `pricing-strategy`.
4) Genera o actualiza:
   - `docs/project-scope.md`
   - `docs/quote.md`
5) Además, crea un prompt definitivo para Stitch basado en:
   - `docs/discovery.md`
   - `docs/project-scope.md`
   - `docs/quote.md`
6) Escribe ese prompt definitivo para Stitch dentro de `PROMPTS.md`, reemplazando completamente la sección:
   - `## C) Prompt definitivo para Stitch (generado por Codex)`

Reglas de pricing:
- Usa mercado mexicano como referencia.
- Usa 15 USD por hora como referencia base.
- No lleves la cotización a nivel enterprise sin justificación real.
- Si el cálculo sube demasiado por complejidad, seniority o tiempo estimado, pregunta primero antes de proponer un ajuste.
- Justifica con claridad por qué sería necesario ese ajuste.
- Mantén la propuesta realista, comercial y vendible en México.

Reglas de alcance:
- No inventes features fuera del discovery.
- Si falta información crítica, repórtala como supuesto o pendiente explícito.
- Mantén alineación estricta entre scope y cotización.

Al final de tu respuesta:
- resume supuestos usados para cotizar
- explica riesgos o ambigüedades detectadas
- confirma que actualizaste `docs/project-scope.md`, `docs/quote.md` y la sección C de `PROMPTS.md`
```

## B) Prompt de development strategy para Codex (modo plan)

```md
Actúa como arquitecto técnico y planificador de implementación en modo plan.

Lee y usa como base obligatoria:
- `docs/discovery.md`
- `docs/project-scope.md`
- `docs/quote.md`
- `docs/design.md`

Con esos insumos, genera o actualiza `docs/development-strategy.md` en español.

La estrategia debe incluir:
- resumen del proyecto
- versionamiento del proyecto si es necesario
- stack recomendado
- arquitectura recomendada
- features
- riesgos
- dependencias
- fases
- criterios de aceptación por fase
- skills recomendadas por fase
- qué validar manualmente en cada fase

Reglas:
- No inventes features fuera de scope.
- Mantén enfoque MVP y evita sobreingeniería.
- Si algo no está claro, trátalo como supuesto o riesgo.
- Alinea la estrategia con el diseño aprobado en `docs/design.md`.
- Entrega en markdown claro y directo, listo para guardarse en `docs/development-strategy.md`.
```

## C) Prompt definitivo para Stitch (generado por Codex)

Estado actual: base inicial lista para reemplazo.

Instrucciones de uso manual:
1. Codex debe sobrescribir este bloque en cada corrida del Prompt comercial (sección A).
2. Copia manualmente el prompt final de este bloque.
3. Pégalo manualmente en Stitch.
4. Pega el resultado aprobado de Stitch en `docs/design.md`.

Prompt base Stitch (referencia inicial reutilizable):

```md
Crea un mockup de alta fidelidad para un proyecto web comercial en español.

Contexto obligatorio:
- Usa como base el discovery del cliente, el scope aprobado y la cotización aprobada.
- Prioriza claridad comercial, jerarquía visual fuerte y conversión.
- Respeta exactamente el alcance aprobado; no agregues módulos no autorizados.

Entrega esperada:
- estructura de secciones final
- dirección visual (tipografía, color, estilo)
- copy sugerido por sección
- componentes clave y estados
- comportamiento responsive (desktop/mobile)
- notas de interacción necesarias para implementación

Restricciones:
- evitar sobrecargar la interfaz con elementos no solicitados
- no inventar features fuera del scope
- mantener consistencia con una landing/sitio vendible para mercado mexicano
```

## D) Prompt de implementación visual para Codex

```md
Actúa como implementador frontend en este repo.

Lee primero:
- `docs/design.md`
- `docs/project-scope.md`
- `docs/development-strategy.md`
- `docs/discovery.md` (solo para contexto adicional, sin ampliar scope)

Usa el skill `frontend-design` como apoyo para calidad visual y consistencia.

Objetivo:
- traducir el diseño aprobado a una implementación limpia y mantenible
- mantener alta fidelidad visual contra `docs/design.md`
- respetar estrictamente scope y estrategia

Reglas:
- no inventar nuevas secciones, features o integraciones
- no salir del alcance aprobado en `docs/project-scope.md`
- mantener arquitectura del repo y límites entre `config/`, `content/`, `components/`, `services/`
- usar Server Components por defecto y aislar interactividad en piezas cliente cuando sea necesario

Cierre:
- reporta qué se implementó
- reporta qué quedó pendiente por falta de información o aprobación
- confirma validaciones ejecutadas (`lint`, `typecheck`, `test`, `build`)
```
