import { describe, expect, it } from 'vitest'
import { products } from './products'
import { normalize, search } from './bm25'

const ids = (query: string) => search(query, products).map(({ product }) => product.id)

describe('normalize', () => {
  it('pasa a minúsculas, quita tildes y separa por caracteres no alfanuméricos', () => {
    expect(normalize('PORTÁTIL Económico, 16-GB')).toEqual(['portatil', 'economico', '16', 'gb'])
  })
})

describe('search BM25', () => {
  it('"gamer 16 GB": las laptops gamer salen primero y la gamer con 16 GB encabeza la lista', () => {
    expect(ids('gamer 16 GB').slice(0, 3)).toEqual(['zentro-vortex-15', 'kyron-pulse-14', 'nova-blade-x'])
  })

  it('"PORTÁTIL económico": orden exacto por puntaje BM25', () => {
    expect(ids('PORTÁTIL económico')).toEqual(['voltix-slim-14', 'zentro-start-14', 'novatek-go-15', 'novatek-note-13'])
  })

  it('mayúsculas y tildes no cambian ni los resultados ni su orden', () => {
    expect(ids('PORTÁTIL económico')).toEqual(ids('portatil economico'))
    expect(ids('ESTACIÓN de TRABAJO')).toEqual(ids('estacion de trabajo'))
  })

  it('los puntajes van de mayor a menor', () => {
    const scores = search('gamer 16 GB', products).map(({ score }) => score)
    expect(scores).toEqual([...scores].sort((a, b) => b - a))
  })

  it('en empate de puntaje ordena por id (determinista)', () => {
    const results = search('estación de trabajo', products)
    expect(results.map(({ product }) => product.id)).toEqual(['aurex-pro-15', 'aurex-max-17', 'kyron-studio-16', 'nova-blade-x'])
    expect(results[1].score).toBeCloseTo(results[2].score, 10)
  })

  // CASO 7: prueba rota a propósito para demostrar que el pipeline bloquea el merge
  it('prueba rota a propósito: espera un primer resultado incorrecto', () => {
    expect(ids('gamer 16 GB')[0]).toBe('voltix-slim-14')
  })

  it('excluye documentos con puntaje cero', () => {
    expect(search('inexistente', products)).toEqual([])
  })
})
