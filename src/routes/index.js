import { Router } from 'express'
import players from './players.router'

const routes = Router()

routes.use('/players', players)

export default routes