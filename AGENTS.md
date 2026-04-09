# AGENTS.md

## Stack del proyecto

- Next.js App Router
- TypeScript estricto
- Tailwind CSS
- ESLint + Prettier
- Vitest para testing base

## Principios de arquitectura

- Mantener una sola app bien organizada hasta que exista una razón real para separar apps o paquetes.
- Separar UI, contenido, configuración y servicios para evitar acoplamiento innecesario.
- Mantener páginas delgadas; mover decisiones de negocio o infraestructura a `config/`, `content/`, `lib/` y `services/`.
- Diseñar extensiones por reemplazo de módulos, no por lógica condicional dispersa.
- Aplicar SOLID con pragmatismo: responsabilidades claras, dependencias explícitas y extensiones sencillas.

## Reglas de implementación

- Usar aliases `@/...` en imports internos.
- Preferir Server Components por defecto; pasar a Client Components solo cuando la interacción lo exija.
- No mezclar contenido editable dentro de componentes visuales si puede vivir en `content/` o `config/`.
- No meter acceso directo a proveedores externos dentro de componentes o páginas.
- Si aparece nueva lógica de infraestructura, encapsularla detrás de contratos en `services/`.

## Reglas de UI

- Construir sobre Tailwind CSS con clases legibles y agrupadas por intención.
- Mantener componentes con responsabilidad visual clara y tamaño razonable.
- Preservar la estética base: tipografía marcada, fondos con atmósfera sutil y sin caer en defaults genéricos.
- Evitar componentes gigantes que mezclen layout, contenido y comportamiento.

## Uso de Tailwind

- Reutilizar patrones comunes mediante componentes pequeños antes de crear abstracciones complejas.
- Mantener tokens visuales globales en `app/globals.css`.
- No introducir librerías de UI extra si Tailwind y componentes propios resuelven bien el caso.

## Aliases y rutas

- `@/components/*`
- `@/config/*`
- `@/content/*`
- `@/lib/*`
- `@/services/*`
- `@/types/*`

## Contenido editable y branding

- Branding global en `config/brand.ts`.
- SEO, navegación y metadata base en `config/site.ts`.
- Contenido por secciones en `content/*.ts`.
- Media futura documentada y desacoplada desde `config/media.ts` y `services/media/`.

## Cómo trabajar sobre este repo

- Rebrandear primero `config/brand.ts`, `config/site.ts` y archivos dentro de `content/`.
- Crear nuevas secciones como componentes autocontenidos en `components/sections/`.
- Reservar `app/admin` para herramientas internas y edición futura.
- Documentar decisiones nuevas en `docs/decisions.md` cuando cambien la dirección del template.

## Qué no hacer

- No meter CMS, auth o base de datos antes de que el alcance lo exija.
- No duplicar strings de negocio en varios componentes.
- No conectar storage, formularios o APIs externas sin una capa de servicio explícita.
- No agregar dependencias visuales o de estado sin justificar valor claro.

## Cómo estructurar componentes

- `components/ui/` para primitivas reutilizables.
- `components/layout/` para shells, navegación y estructura compartida.
- `components/sections/` para bloques del sitio público.
- `components/admin/` para piezas del panel interno.

## Cómo estructurar servicios

- Crear contratos primero.
- Implementar adapters por proveedor.
- Mantener factories o puntos de composición en un `index.ts` del dominio.

## Checklist antes de cerrar una tarea

- ¿La responsabilidad quedó en el lugar correcto?
- ¿El contenido configurable está fuera de la UI cuando corresponde?
- ¿Los imports usan aliases?
- ¿Se evitó acoplamiento innecesario con proveedores?
- ¿Hay impacto en docs o decisiones que deba registrarse?
- ¿Lint, typecheck y build siguen sanos?
