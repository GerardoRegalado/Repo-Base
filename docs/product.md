# Product

## Propósito

`Repo Base` es una plantilla principal para arrancar proyectos comerciales ligeros con una base profesional, reutilizable y escalable.

## Tipos de proyecto soportados

- Landing pages para captación o campañas
- Sitios institucionales
- Marketing sites
- SPAs ligeras
- Proyectos que pueden crecer a panel administrativo o SaaS ligero

## Qué trae desde el día uno

- Next.js App Router con TypeScript
- Tailwind CSS como sistema de UI
- Branding y contenido editable por archivos
- Base de SEO reutilizable
- Ruta `/admin` reservada para evolución interna
- Capa conceptual para media storage externo
- Linting, formato y testing base
- Documentación operativa en `docs/`

## Cómo reutilizar este repo

1. Clona el repositorio como punto de partida.
2. Cambia `config/brand.ts` y `config/site.ts`.
3. Ajusta el contenido inicial en `content/*.ts`.
4. Sustituye o amplía componentes dentro de `components/sections/`.
5. Si el proyecto exige contenido administrable real, evoluciona `app/admin` y conecta el storage o CMS correspondiente.

## Qué no pretende resolver todavía

- Backend complejo
- Autenticación real
- Base de datos
- CMS conectado
- Uploads reales a cloud

## Criterio del template

La prioridad es velocidad de arranque con buena base técnica. La plantilla evita dependencias innecesarias y reserva la complejidad para cuando el alcance la justifique.
