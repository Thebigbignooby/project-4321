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

export function findPlayerById (players, id) {
  return players.find(p => {
    return p.id == id
  })
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

// GET
// Return player matching id
// Return 404 if no matching player.
players.get('/:id', (req, res, next) => {
  const player = findPlayerById(data.players, req.params.id)
  if (!player) {
    res.status(404).send('Not found');
  } else {
    const payload = { player }
    res.json(payload)
  }
})

export default players
