# Media Strategy

## Estado actual

La v1.1 no implementa uploads reales. El repo deja una estrategia clara y segura:

- placeholders locales en `public/media/`
- configuración de provider en `config/media.ts`
- contrato y adapters en `services/media/`
- soporte para host remoto vía `NEXT_PUBLIC_MEDIA_HOSTNAME`

## Enfoque recomendado

Proveedor recomendado:

- Cloudflare R2

Por qué:

- API compatible con S3
- costos de egreso normalmente más amigables para proyectos de cliente
- fácil integración futura con Next.js y CDN

Alternativa válida:

- AWS S3 o cualquier storage S3-compatible cuando el cliente ya vive en ese ecosistema

## Por qué no hacer uploads reales todavía

- todavía no hay auth
- todavía no hay panel real para operar media
- todavía no hay una política final de permisos o ownership de assets

Meter uploads antes de resolver eso agrega deuda y riesgo.

## Placeholders locales vs media real

- Usa `public/media/` para logos, OG defaults o imágenes de demostración.
- Usa `content/*` para referenciar media placeholder mientras no exista un flujo real.
- No mezcles URLs temporales de proveedores directamente dentro de los componentes.

## Dirección futura para signed uploads

Cuando uploads entren al alcance:

1. agregar auth o una capa mínima de autorización
2. crear un endpoint o server action que genere signed uploads
3. subir al provider S3-compatible
4. persistir metadata del asset
5. exponer la URL pública normalizada vía `services/media`

La UI nunca debería construir URLs de proveedor manualmente.
