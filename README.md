# LaptopHub

Tienda demo de laptops con Next.js App Router, TypeScript y Tailwind CSS. Toda la interfaz está en español y el checkout es simulado, sin pagos reales.

## Cómo ejecutar

```bash
pnpm install
pnpm dev
```

Para validar el proyecto:

```bash
pnpm test
pnpm lint
pnpm build
```

## Estructura

- `lib/products.ts`: 14 laptops inventadas y sus especificaciones.
- `lib/bm25.ts`: búsqueda pura ordenada por relevancia BM25.
- `components/store.tsx`: header, contexto del carrito y componentes de catálogo.
- `app/producto/[id]`: detalle dinámico de producto.

## Búsqueda BM25

El catálogo indexa marca, modelo y descripción. La consulta y los documentos se normalizan a minúsculas, se eliminan diacríticos y se separan por caracteres no alfanuméricos. Se calcula BM25 con `k1 = 1.2`, `b = 0.75` e IDF `ln(1 + (N - df + 0.5) / (df + 0.5))`. Los resultados con puntaje cero se excluyen y los empates usan el `id` para mantener un orden determinista.

El carrito usa React Context y persiste sus líneas en `localStorage` para conservar la selección entre visitas.
