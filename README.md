# Repo Base

Plantilla principal para arrancar proyectos comerciales ligeros con Next.js, TypeScript y Tailwind CSS.

## Sirve para

- Landing pages
- Sitios institucionales
- SPAs ligeras
- Marketing sites
- Proyectos que luego puedan crecer a admin panel o SaaS ligero

## Stack

- Next.js App Router
- TypeScript estricto
- Tailwind CSS
- ESLint + Prettier
- Vitest como base de testing

## Scripts

```bash
npm run dev
npm run lint
npm run format
npm run typecheck
npm run test
npm run build
```

## Node recomendado

Usa `20.19.0` o superior. El proyecto incluye `.nvmrc`.

## Documentación

- `docs/product.md`
- `docs/architecture.md`
- `docs/roadmap.md`
- `docs/skills.md`
- `docs/client-brief.md`
- `docs/quote-template.md`
- `docs/project-scope-template.md`
- `docs/decisions.md`

## Estructura rápida

```text
app/
components/
config/
content/
docs/
lib/
services/
tests/
types/
```

## Nota sobre media

El repo no implementa todavía uploads reales ni cloud storage operativo. Sí deja lista la capa de adapters y la documentación para conectar Cloudflare R2 o AWS S3 cuando el proyecto lo necesite.
