export type Product = {
  id: string
  marca: string
  modelo: string
  precio: number
  procesador: string
  ram: string
  almacenamiento: string
  descripcion: string
  categoria: string
  color: string
}

export const products: Product[] = [
  { id: 'nova-blade-x', marca: 'Novatek', modelo: 'Blade X', precio: 4899, procesador: 'N-Core i7-13700H', ram: '32 GB', almacenamiento: '1 TB SSD', descripcion: 'Laptop gamer de alto rendimiento con 32 GB para dominar cada partida y crear sin límites.', categoria: 'Gaming', color: 'from-violet-600 to-indigo-950' },
  { id: 'zentro-vortex-15', marca: 'Zentro', modelo: 'Vortex 15', precio: 3799, procesador: 'Ryzen 7 7840HS', ram: '16 GB', almacenamiento: '512 GB SSD', descripcion: 'Laptop gamer inmersiva con 16 GB, gráficos fluidos y refrigeración silenciosa.', categoria: 'Gaming', color: 'from-cyan-500 to-blue-950' },
  { id: 'kyron-pulse-14', marca: 'Kyron', modelo: 'Pulse 14', precio: 2999, procesador: 'Core i5-13420H', ram: '16 GB', almacenamiento: '512 GB SSD', descripcion: 'Laptop gamer compacta con 16 GB para competir y estudiar con velocidad.', categoria: 'Gaming', color: 'from-rose-500 to-orange-950' },
  { id: 'aurex-air-13', marca: 'Aurex', modelo: 'Air 13', precio: 2499, procesador: 'Core i5-1335U', ram: '16 GB', almacenamiento: '512 GB SSD', descripcion: 'Ultrabook ultraligera con 16 GB, pantalla brillante y batería para todo el día.', categoria: 'Ultrabook', color: 'from-sky-400 to-cyan-950' },
  { id: 'voltix-slim-14', marca: 'Voltix', modelo: 'Slim 14', precio: 1899, procesador: 'Ryzen 5 7520U', ram: '8 GB', almacenamiento: '256 GB SSD', descripcion: 'Portátil económico y ligero, ideal para navegar, estudiar y organizar tu día.', categoria: 'Económica', color: 'from-emerald-400 to-teal-950' },
  { id: 'novatek-go-15', marca: 'Novatek', modelo: 'Go 15', precio: 1599, procesador: 'Core i3-N305', ram: '8 GB', almacenamiento: '256 GB SSD', descripcion: 'Portátil económica para tareas diarias, clases virtuales y entretenimiento.', categoria: 'Económica', color: 'from-amber-400 to-orange-950' },
  { id: 'zentro-start-14', marca: 'Zentro', modelo: 'Start 14', precio: 1299, procesador: 'Celeron N100', ram: '8 GB', almacenamiento: '128 GB SSD', descripcion: 'Portátil económico con 8 GB, sencilla, confiable y lista para tus primeros proyectos.', categoria: 'Económica', color: 'from-lime-400 to-green-950' },
  { id: 'kyron-studio-16', marca: 'Kyron', modelo: 'Studio 16', precio: 4299, procesador: 'Core i9-13900H', ram: '32 GB', almacenamiento: '1 TB SSD', descripcion: 'Estación de trabajo profesional con 32 GB para edición, diseño y renderizado exigente.', categoria: 'Trabajo', color: 'from-slate-400 to-slate-950' },
  { id: 'aurex-pro-15', marca: 'Aurex', modelo: 'Pro 15', precio: 3399, procesador: 'Ryzen 7 7735U', ram: '16 GB', almacenamiento: '1 TB SSD', descripcion: 'Estación de trabajo versátil con 16 GB para productividad creativa y multitarea.', categoria: 'Trabajo', color: 'from-fuchsia-500 to-purple-950' },
  { id: 'voltix-learn-14', marca: 'Voltix', modelo: 'Learn 14', precio: 1749, procesador: 'Core i5-1235U', ram: '8 GB', almacenamiento: '512 GB SSD', descripcion: 'Laptop para estudiantes con 8 GB, cómoda, rápida y lista para cada semestre.', categoria: 'Estudiantes', color: 'from-blue-400 to-indigo-950' },
  { id: 'novatek-note-13', marca: 'Novatek', modelo: 'Note 13', precio: 2099, procesador: 'Ryzen 5 7530U', ram: '16 GB', almacenamiento: '512 GB SSD', descripcion: 'Laptop para estudiantes con 16 GB y formato portátil para aprender desde cualquier lugar.', categoria: 'Estudiantes', color: 'from-teal-400 to-cyan-950' },
  { id: 'zentro-zenbook-14', marca: 'Zentro', modelo: 'Zenbook 14', precio: 3199, procesador: 'Core Ultra 5 125H', ram: '16 GB', almacenamiento: '1 TB SSD', descripcion: 'Ultrabook elegante con 16 GB, autonomía extendida y diseño que cabe en cualquier mochila.', categoria: 'Ultrabook', color: 'from-pink-400 to-rose-950' },
  { id: 'kyron-flex-14', marca: 'Kyron', modelo: 'Flex 14', precio: 2699, procesador: 'Ryzen 7 7730U', ram: '16 GB', almacenamiento: '512 GB SSD', descripcion: 'Convertible versátil con 16 GB, pantalla táctil y cuatro modos para trabajar.', categoria: 'Ultrabook', color: 'from-indigo-400 to-violet-950' },
  { id: 'aurex-max-17', marca: 'Aurex', modelo: 'Max 17', precio: 5199, procesador: 'Core i9-14900HX', ram: '32 GB', almacenamiento: '2 TB SSD', descripcion: 'Potente estación de trabajo con 32 GB y pantalla amplia para proyectos ambiciosos.', categoria: 'Trabajo', color: 'from-red-500 to-slate-950' },
]

export function getProduct(id: string) { return products.find((product) => product.id === id) }
