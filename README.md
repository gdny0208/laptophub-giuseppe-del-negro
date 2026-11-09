# LaptopHub

Tienda demo de laptops con Next.js App Router, TypeScript y Tailwind CSS, generada con [v0](https://v0.app) y publicada en Vercel. Toda la interfaz está en español y el checkout es simulado, sin pagos reales.

- **Tienda publicada:** https://laptophub-giuseppe-del-negro.vercel.app/
- **Autor:** Giuseppe Antonio Del Negro Yabar — E-Commerce, Práctica Calificada 2026-2

## Vistas

| Ruta | Vista |
|---|---|
| `/` | Landing con laptops destacadas |
| `/catalogo` | Catálogo de 14 laptops con buscador BM25 |
| `/producto/[id]` | Detalle de producto (marca, modelo, precio, procesador, RAM, almacenamiento, descripción) |
| `/carrito` | Carrito: agregar, quitar, cambiar cantidad y total |

## Cómo ejecutar

Requiere Node.js 24 y pnpm (se activa con `corepack enable`).

```bash
pnpm install
pnpm dev
```

Para validar el proyecto (lo mismo que corre el pipeline):

```bash
pnpm lint
pnpm test
pnpm build
```

## Estructura

- `lib/products.ts`: 14 laptops inventadas y sus especificaciones.
- `lib/bm25.ts`: búsqueda pura ordenada por relevancia BM25.
- `lib/bm25.test.ts`: pruebas automáticas (Vitest) que verifican el orden de los resultados.
- `components/store.tsx`: header, carrito y componentes de catálogo.
- `app/producto/[id]`: detalle dinámico de producto.
- `.github/workflows/ci.yml`: pipeline de integración continua.

## Búsqueda BM25

El catálogo indexa marca, modelo y descripción. La consulta y los documentos se normalizan a minúsculas, se eliminan diacríticos y se separan por caracteres no alfanuméricos, así que `PORTÁTIL económico` y `portatil economico` devuelven exactamente lo mismo. Se calcula BM25 con `k1 = 1.2`, `b = 0.75` e IDF `ln(1 + (N - df + 0.5) / (df + 0.5))`. Los resultados con puntaje cero se excluyen y los empates usan el `id` para mantener un orden determinista. Cada tarjeta muestra su puntaje de relevancia.

## Carrito

El carrito se guarda en `localStorage` y se lee con `useSyncExternalStore`, de modo que se conserva entre visitas sin provocar renders en cascada.

## Integración continua

El workflow `CI` de GitHub Actions corre en cada pull request hacia `main` y en cada push a `main`. Instala dependencias, revisa el código con ESLint, ejecuta las pruebas y compila el proyecto; si cualquier paso falla, el pipeline falla. La rama `main` está protegida: un pull request no se puede fusionar si el pipeline no pasó.
