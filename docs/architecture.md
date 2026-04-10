# Architecture

## Decisión principal

El template sigue una **single app bien organizada** con Next.js App Router. En v1.1 se refuerza esa decisión con límites más claros entre configuración, contenido, UI e integraciones.

## Por qué no monorepo todavía

- La mayoría de proyectos objetivo arrancan como una sola superficie comercial.
- Un monorepo desde el día uno agrega fricción innecesaria para proyectos freelance pequeños o medianos.
- La separación por carpetas, contratos y docs ya deja una transición razonable si después conviene dividir marketing, admin o librerías compartidas.

## Estructura del proyecto v1.1

```text
app/
  (marketing)/
  admin/
components/
  admin/
  layout/
  sections/
  ui/
config/
  admin.ts
  brand.ts
  media.ts
  site.ts
content/
  lead-form.ts
  packages.ts
  services.ts
  testimonials.ts
docs/
lib/
  seo/
  utils/
services/
  media/
tests/
types/
public/
  media/
```

## Responsabilidades por carpeta

- `app/`: composición de rutas, layouts y metadata.
- `components/`: UI por nivel de responsabilidad.
- `config/`: branding, metadata, navegación, settings globales y roadmap operativo.
- `content/`: textos, estructura de secciones, placeholders comerciales y contenido editable inicial.
- `lib/`: helpers puros y utilidades transversales.
- `services/`: contratos y adapters de infraestructura.
- `types/`: tipos compartidos.
- `docs/`: contexto de negocio, workflow, decisiones y operación.

## Fronteras que deben mantenerse

- `config/brand.ts` y `config/site.ts` son el primer punto de entrada para rebranding.
- `content/*` concentra copy editable y placeholders de negocio.
- `components/sections/*` recibe contenido; no debe contener lógica específica de proveedor.
- `services/*` es el único lugar válido para adapters de integración externa.
- `app/admin` reserva la futura superficie interna, pero no justifica todavía una app separada.

## Alineación con SOLID y maintainability

- Single Responsibility: páginas delgadas y responsabilidades separadas por dominio.
- Open/Closed: servicios y contenido se extienden agregando módulos, no editando lógica dispersa.
- Liskov/Interface Segregation: el adapter de media usa un contrato pequeño y claro.
- Dependency Inversion: UI no depende del proveedor de storage; depende de interfaces y config.

## Modelo de contenido editable

El contenido vive inicialmente en archivos TypeScript dentro de `config/` y `content/`.

Ventajas:

- rebranding rápido por cliente
- versionado simple
- tipado fuerte
- fácil migración futura a CMS o base de datos

## Estrategia de media

Proveedor recomendado:

- Cloudflare R2 como opción principal

Motivo:

- API compatible con S3
- costos de egreso normalmente más amigables
- buena compatibilidad con Next.js y CDN

Fallback sensato:

- AWS S3 cuando el cliente ya opera en AWS o necesita integrarse con su stack existente

## Qué queda preparado en v1.1

- `config/media.ts` para settings del proveedor
- `services/media/contracts.ts` como contrato de integración
- adapters `noop` y `s3-compatible`
- soporte para `next/image` mediante `NEXT_PUBLIC_MEDIA_HOSTNAME`
- carpeta `public/media/` para placeholders locales
- contenido placeholder para `services`, `packages`, `testimonials` y `lead form`
- roadmap admin documentado para `clients`, `leads`, `projects`, `content` y `media`

## Performance posture

- `buildMetadata` centraliza metadata y deja lista la expansión a páginas reales.
- `next.config.ts` ya activa `cacheComponents` para futuras iteraciones de caching sin reconfigurar la base.
- La estrategia de imágenes mantiene hostnames remotos desacoplados por env.
- El default sigue siendo Server Components; Client Components solo entran cuando la interacción lo exige.

## Cómo evolucionar después

- separar `app/admin` en una app dedicada si el panel crece demasiado
- extraer componentes compartidos a un package si aparecen varios frontends
- cambiar `content/` por CMS o base de datos sin rehacer la UI
- agregar server actions o route handlers para signed uploads cuando entren al alcance
