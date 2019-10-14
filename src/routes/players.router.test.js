/**
 * @jest-environment node
 */

import data from '../../data/players.json'
import { orderedPlayers, player17 } from '../../data/players.testdata'
import { sortPlayersById, findPlayerById } from './players.router'

describe('sortPlayersById', () => {
  const res = sortPlayersById(data.players)
  test('should return an array', () => {
    expect(Array.isArray(res)).toBe(true)
  })
  test('should order by id', () => {
    expect(res).toEqual(orderedPlayers)
  })
})

describe('findPlayerById', () => {
  describe('player exists', () => {
    const res = findPlayerById(data.players, 17)
    test('should return correct player', () => {
      expect(res).toEqual(player17)
    })
  })
  describe('player does not exist', () => {
    const res = findPlayerById(data.players, 1)
    test('should return undefined', () => {
      expect(res).toBe(undefined)
    })
  })
})
