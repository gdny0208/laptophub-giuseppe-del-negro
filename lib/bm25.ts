import type { Product } from './products'

export type SearchResult = { product: Product; score: number }

export function normalize(text: string): string[] {
  return text.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(/[^a-z0-9]+/).filter(Boolean)
}

export function search(query: string, products: Product[]): SearchResult[] {
  const terms = normalize(query)
  if (!terms.length) return products.map((product) => ({ product, score: 0 }))
  const documents = products.map((product) => normalize(`${product.marca} ${product.modelo} ${product.descripcion}`))
  const averageLength = documents.reduce((sum, document) => sum + document.length, 0) / Math.max(documents.length, 1)
  const k1 = 1.2
  const b = 0.75
  return products.map((product, index) => {
    const document = documents[index]
    const score = terms.reduce((total, term) => {
      const frequency = document.filter((token) => token === term).length
      if (!frequency) return total
      const df = documents.filter((tokens) => tokens.includes(term)).length
      const idf = Math.log(1 + (products.length - df + 0.5) / (df + 0.5))
      return total + idf * ((frequency * (k1 + 1)) / (frequency + k1 * (1 - b + b * document.length / averageLength)))
    }, 0)
    return { product, score }
  }).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score || a.product.id.localeCompare(b.product.id))
}
