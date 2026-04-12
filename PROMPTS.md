# PROMPTS OPERATIVOS

Este archivo concentra prompts reutilizables para operar el flujo comercial y técnico sin mezclar etapas.

## A) Prompt para generar `docs/project-scope.md`

```md
Actúa como estratega técnico-comercial enfocado en definición de alcance.

Lee primero `docs/discovery.md` y úsalo como fuente principal de verdad.

Interpretación obligatoria:
- `[x]` = seleccionado
- `[ ]` = no seleccionado
- respuestas en texto libre = fuente de verdad
- dominio deseado = parte del discovery

Con base en eso, genera o actualiza únicamente `docs/project-scope.md`.

El scope debe definir con claridad:
- alcance incluido
- alcance excluido
- supuestos
- dependencias
- criterios de aceptación

Reglas:
- no cotices todavía
- no generes prompt para Stitch todavía
- no inventes features fuera del discovery
- si falta información crítica, declárala como supuesto o pendiente explícito
```

## B) Prompt para generar `docs/quote.md`

```md
Actúa como estratega comercial para cotización freelance web.

Lee y usa como base:
- `docs/discovery.md`
- `docs/project-scope.md`

Usa el skill `pricing-strategy`.

Genera o actualiza únicamente `docs/quote.md`.

Reglas de pricing:
- usar mercado mexicano como referencia
- usar 15 USD por hora como referencia base
- no llevar pricing a nivel enterprise sin justificación real
- si el cálculo sube demasiado por complejidad, seniority o tiempo estimado, preguntar primero antes de proponer un ajuste
- justificar claramente por qué sería necesario ese ajuste
- mantener la cotización realista, comercial y vendible en México

Además:
- no inventar features fuera del discovery/scope
- si falta información crítica, dejarla como supuesto o pendiente explícito
- mantener alineación estricta con `docs/project-scope.md`
```

## C) Prompt definitivo para Stitch (generado por Codex)

Uso manual:
1. Codex reemplaza esta sección cuando se ejecute el prompt D.
2. Copia manualmente el prompt final y pégalo en Stitch.
3. Pega el resultado aprobado de Stitch en `docs/design.md`.

Prompt final para Stitch:

```md
[Codex debe reemplazar este bloque completo con el prompt definitivo para Stitch]
```

## D) Prompt para generar el prompt de Stitch

```md
Actúa como estratega de diseño comercial y genera un prompt definitivo para Stitch.

Lee obligatoriamente:
- `docs/discovery.md`
- `docs/project-scope.md`
- `docs/quote.md`

Objetivo:
- crear un prompt claro, accionable y listo para copiar/pegar en Stitch
- enfocado en producir un mockup que ayude a vender el proyecto al cliente

El prompt para Stitch debe:
- respetar estrictamente el scope aprobado
- priorizar claridad comercial, jerarquía visual, conversión y calidad visual
- considerar mercado mexicano
- no inventar módulos o features fuera del alcance

Acción obligatoria:
- reemplaza completamente el contenido de la sección `## C) Prompt definitivo para Stitch (generado por Codex)` en `PROMPTS.md`
- no modifiques otras secciones de `PROMPTS.md`
```

## E) Prompt de development strategy para Codex (modo plan)

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
- no inventes features fuera de scope
- mantener enfoque MVP y evitar sobreingeniería
- si algo no está claro, tratarlo como supuesto o riesgo
- alinear la estrategia con el diseño aprobado en `docs/design.md`
```

## F) Prompt de implementación visual

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
- respetar `docs/development-strategy.md`
- mantener arquitectura del repo y límites entre `config/`, `content/`, `components/`, `services/`
- usar Server Components por defecto y aislar interactividad en piezas cliente cuando sea necesario
```
