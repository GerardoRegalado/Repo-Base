## Quote generation with pricing-strategy

Read `docs/client-brief.md`.

Use the information in that file as the source of truth for the client request.

Then use the `pricing-strategy` skill to evaluate:
- project type
- complexity
- scope
- technical viability
- expected effort
- commercial packaging opportunity

Generate or update `docs/quote.md` with a professional quotation draft in Spanish.

The quotation must include:
- project summary
- detected project type
- scope overview
- assumptions
- estimated complexity
- recommended pricing structure
- estimated price range in MXN
- optional package tiers if appropriate
- exclusions
- suggested payment structure
- timeline estimate if possible

Rules:
- base the quote only on what is present in `docs/client-brief.md`
- if important information is missing, explicitly list missing assumptions inside `docs/quote.md`
- do not invent advanced features unless the brief suggests them
- keep the output practical and client-oriented
- do not overwrite unrelated docs

At the end:
- explain what pricing assumptions were made
- explain any risks or ambiguity detected

## Development strategy generation for ChatGPT

Estoy usando un repositorio base para proyectos freelance de desarrollo web. Mi flujo es este:

1. El cliente llena una entrevista/discovery
2. Yo convierto esas respuestas en `docs/client-brief.md`
3. Después genero una cotización
4. Luego necesito una estrategia de desarrollo clara para que Codex implemente el proyecto por fases

Quiero que actúes como arquitecto técnico y estratega de implementación.

Voy a darte el contenido de `docs/client-brief.md` o un resumen fiel de ese documento.

Con base en eso, necesito que generes una estrategia de desarrollo en español que luego yo pueda pegar en `docs/development-strategy.md`.

La estrategia debe incluir:
- resumen del proyecto
- tipo de proyecto
- objetivo principal
- stack recomendado
- arquitectura recomendada
- funcionalidades principales
- riesgos
- dependencias
- supuestos
- fases de desarrollo
- criterios de aceptación por fase
- recomendaciones de skills/agentes a usar en cada fase
- qué partes debe implementar Codex
- qué partes conviene validar manualmente

Reglas:
- no inventes features fuera del brief
- prioriza un MVP claro y vendible
- evita sobreingeniería
- piensa como si este proyecto fuera a construirse sobre un repo base en Next.js con Tailwind
- si algo no está claro, márcalo como supuesto o riesgo
- entrega la estrategia en formato claro y pegable en markdown

