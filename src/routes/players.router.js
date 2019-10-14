import { Router } from 'express'
import data from '../../data/players.json'

/**
 * Functions
 */

export function sortPlayersById (players) {
  return players.sort((a, b) => {
    return (a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0
  });
}


/**
 * Routes
 */

const players = Router()

// GET
// Return all players
// The list must be sorted by player id.
players.get('/', (req, res, next) => {
  const payload = {
    players: sortPlayersById(data.players)
  }
  res.json(payload)
})

export default players
