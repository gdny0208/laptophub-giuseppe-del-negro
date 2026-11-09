'use client'
import { ShoppingBag } from 'lucide-react'
import type { Product } from '@/lib/products'
import { useCart } from './store'
export function AddButton({ product }: { product: Product }) { const { add } = useCart(); return <button onClick={() => add(product)} className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-4 font-bold text-white hover:bg-cyan-600"><ShoppingBag size={18} /> Agregar al carrito</button> }
