import type { FeatureItem } from "@/types/content";

export const featureItems: FeatureItem[] = [
  {
    tag: "Architecture",
    title: "Single app, modular por diseño",
    description:
      "Se elige una sola app Next.js para mantener simplicidad hoy, con separación clara entre superficies, servicios, configuración y contenido.",
  },
  {
    tag: "Content",
    title: "Contenido reusable por archivos",
    description:
      "Hero, features, pricing, FAQ y metadata usan archivos TypeScript fáciles de versionar y luego reemplazar por CMS o base de datos.",
  },
  {
    tag: "Admin readiness",
    title: "Ruta interna preparada",
    description:
      "La sección /admin ya existe como placeholder y deja resuelta la frontera conceptual para futuras herramientas internas del cliente.",
  },
  {
    tag: "Media",
    title: "Storage desacoplado",
    description:
      "Los adapters de media aíslan la futura integración cloud para que UI y contenido no dependan del proveedor elegido.",
  },
];
