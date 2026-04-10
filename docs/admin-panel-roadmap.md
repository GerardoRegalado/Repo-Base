# Admin Panel Roadmap

## Objetivo

El panel no se implementa en v1.1, pero la dirección sí queda documentada para que el salto futuro no obligue a rehacer la app.

## Módulos previstos

### Clients

- ficha básica del cliente
- contactos
- estado comercial y operativo
- accesos y notas de handoff

### Leads

- pipeline simple
- fuente del lead
- notas de discovery
- siguiente acción comercial

### Projects

- scope aprobado
- milestones
- entregables
- QA y riesgos

### Content editing

- edición de copy
- links
- metadata
- bloques de landing

### Media management

- biblioteca de assets
- tags o carpetas
- reemplazo de imágenes
- conexión con storage S3-compatible

## Estructura sugerida

```text
app/admin/
components/admin/
config/admin.ts
services/
  media/
  leads/
  projects/
```

## Reglas para llegar ahí sin deuda

- no meter auth antes de necesitar acceso real multiusuario
- no meter DB antes de definir los flujos principales
- no implementar uploads reales sin signed uploads y ownership claro
- mantener el contenido editable desacoplado de la UI

## Disparadores para considerar una app separada

- el admin requiere auth, roles o auditoría real
- aparecen dashboards con carga y navegación propia
- la operación interna crece más que el sitio comercial
- se necesitan dependencias o despliegues distintos
