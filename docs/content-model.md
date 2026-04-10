# Content Model

## Objetivo

Este repo separa lo editable en dos capas:

- `config/`: identidad y comportamiento global
- `content/`: copy, bloques y placeholders comerciales

La meta es rebrandear y adaptar por cliente sin esconder decisiones de negocio dentro de la UI.

## Qué va en `config/`

- branding global
- nombre comercial y legal
- tagline
- metadata base
- navegación
- settings de site
- settings de media
- roadmap operacional como `config/admin.ts`

Piensa en `config/` como la capa de decisiones globales del proyecto.

## Qué va en `content/`

- textos del hero
- descripción de secciones
- features
- FAQs
- pricing o packages
- testimonials
- lead form copy
- placeholders de servicios o bloques futuros

Piensa en `content/` como la capa de mensajes y estructura editable.

## Cómo deben consumirlo las secciones

- `components/sections/*` debe recibir contenido por props o importar un módulo de `content/*`.
- Una sección no debería definir copy comercial inline.
- Si una sección necesita datos remotos más adelante, esa obtención debe resolverse antes de llegar al componente visual.

## Regla práctica para decidir

- Si afecta a toda la marca o a todo el sitio, va en `config/`.
- Si representa contenido que un cliente podría cambiar entre proyectos o campañas, va en `content/`.
- Si toca infraestructura o proveedores, va en `services/`.

## Cómo escalar este modelo a múltiples clientes

- Duplica la base y reescribe `config/brand.ts`, `config/site.ts` y los módulos de `content/*`.
- Mantén los componentes lo más neutros y reusables posible.
- Si más adelante hay varios clientes activos con una sola codebase, el siguiente paso natural es cargar `config/` y `content/` por cliente desde una fuente externa o un admin.
- No muevas nada a CMS o DB hasta que el dolor operativo sea real.
