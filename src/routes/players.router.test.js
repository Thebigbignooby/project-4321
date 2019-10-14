/**
 * @jest-environment node
 */

import data from '../../data/players.json'
import testData from '../../data/players.test.json'
import { sortPlayersById } from './players.router'

describe('sortPlayersById', () => {
  const res = sortPlayersById(data.players)
  test('should return an array', () => {
    expect(Array.isArray(res)).toBe(true)
  })
  test('should order by id', () => {
    expect(res).toEqual(testData.players)
  })
})
