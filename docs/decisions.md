# Decisions

## 2026-04-09

### Arquitectura

- Se eligió single app organizada en lugar de monorepo.
- Motivo: menor complejidad inicial y mejor ajuste para proyectos de cliente típicos.

### Superficies

- Se separó `app/(marketing)` de `app/admin` desde el inicio.
- Motivo: dejar la frontera conceptual lista para crecer sin rehacer la base.

### Contenido editable

- Se eligió contenido por archivos TypeScript en `config/` y `content/`.
- Motivo: velocidad de rebranding, tipado fuerte y migración futura simple.

### Media storage

- Se recomienda Cloudflare R2 como primera opción y S3 como fallback.
- Motivo: compatibilidad S3 y mejor costo para assets visuales en muchos escenarios.

### Testing

- Se eligió Vitest como base mínima.
- Motivo: setup ligero y suficiente para crecer sin meter complejidad excesiva.
