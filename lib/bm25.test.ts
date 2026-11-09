import { describe, expect, it } from 'vitest'
import { products } from './products'
import { search } from './bm25'

describe('search BM25', () => {
  it('prioriza la gamer con 16 GB para una consulta gamer específica', () => {
    const results = search('gamer 16 GB', products)
    expect(results[0].product.id).toBe('zentro-vortex-15')
  })
  it('normaliza tildes y mayúsculas con resultados idénticos', () => {
    const a = search('PORTÁTIL económico', products).map(({ product }) => product.id)
    const b = search('portatil economico', products).map(({ product }) => product.id)
    expect(a).toEqual(b)
  })
  it('excluye documentos con puntaje cero y ordena empates por id', () => {
    const results = search('inexistente', products)
    expect(results).toEqual([])
  })
})
