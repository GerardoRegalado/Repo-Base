import { Container } from "@/components/ui/container";

const adminAreas = [
  {
    title: "Contenido",
    description:
      "Punto de entrada para editar textos, secciones, enlaces y metadata sin mezclar la lógica del sitio público.",
  },
  {
    title: "Media",
    description:
      "Espacio reservado para gestión futura de imágenes, videos, PDFs y assets conectados a storage externo.",
  },
  {
    title: "Operación",
    description:
      "Zona preparada para incorporar autenticación, roles simples, auditoría de cambios y utilidades internas.",
  },
];

export function AdminPanelPlaceholder() {
  return (
    <Container className="space-y-10 py-16">
      <section className="max-w-3xl space-y-4">
        <p className="text-xs tracking-[0.35em] text-emerald-300 uppercase">
          Internal workspace
        </p>
        <h2 className="text-4xl font-semibold tracking-tight">
          Admin panel base
        </h2>
        <p className="text-base leading-8 text-slate-300">
          Esta ruta existe para reservar la futura superficie interna del
          proyecto. Todavía no hay autenticación real ni CMS conectado; solo la
          estructura para crecer sin rehacer la app pública.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {adminAreas.map((area) => (
          <article
            key={area.title}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-semibold">{area.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {area.description}
            </p>
          </article>
        ))}
      </section>
    </Container>
  );
}
