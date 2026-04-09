# Architecture

## Decisión elegida

Se usa una **single app bien organizada** con Next.js App Router.

## Por qué no monorepo en esta versión

- La mayoría de proyectos objetivo arrancan como una sola superficie comercial.
- Un monorepo desde el día uno agrega fricción innecesaria para proyectos de cliente pequeños o medianos.
- La separación por carpetas y contratos ya deja una transición razonable si más adelante hace falta dividir marketing, admin o librerías compartidas.

## Estructura del proyecto

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
content/
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

## Responsabilidades

- `app/`: composición de rutas y layouts.
- `components/`: UI por nivel de responsabilidad.
- `config/`: branding, metadata, navegación y settings globales.
- `content/`: textos, estructura de secciones y contenido editable inicial.
- `lib/`: helpers puros y utilidades transversales.
- `services/`: contratos y adapters de infraestructura.
- `types/`: tipos compartidos.
- `docs/`: contexto de negocio, decisiones y operación.

## Alineación con SOLID

- Single Responsibility: páginas delgadas y responsabilidades separadas por dominio.
- Open/Closed: servicios y contenido se extienden agregando módulos, no editando lógica dispersa.
- Liskov/Interface Segregation: el adapter de media usa un contrato pequeño y claro.
- Dependency Inversion: UI no depende del proveedor de storage; depende de interfaces y config.

## Estrategia de contenido editable

El contenido vive inicialmente en archivos TypeScript dentro de `config/` y `content/`.

Ventajas:

- rebranding rápido por cliente
- versionado simple
- tipado fuerte
- fácil migración futura a CMS o base de datos

## Estrategia de media storage

Proveedor recomendado:

- Cloudflare R2 como opción principal

Motivo:

- API compatible con S3
- costos de egreso normalmente más amigables
- buena compatibilidad con Next.js y CDN

Fallback sensato:

- AWS S3 cuando el cliente ya opera en AWS o necesita integrarse con su stack existente

## Qué quedó preparado

- `config/media.ts` para settings del proveedor
- `services/media/contracts.ts` como contrato de integración
- adapters `noop` y `s3-compatible`
- soporte para `next/image` mediante `NEXT_PUBLIC_MEDIA_HOSTNAME`
- carpeta `public/media/` para placeholders locales

## Cómo evolucionar después

- separar `app/admin` en una app dedicada si el panel crece demasiado
- extraer componentes compartidos a un package si aparecen varios frontends
- cambiar `content/` por CMS o base de datos sin rehacer la UI
- agregar server actions o route handlers para signed uploads cuando entren al alcance
