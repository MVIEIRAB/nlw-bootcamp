import { Router } from 'express'

const routes = Router()

import { SettingsController } from './controllers/SettingsController'
import { UsersController } from './controllers/UsersController'
import { MessagesController } from './controllers/MessagesController'

const settingsController = new SettingsController()
routes.post('/settings', settingsController.create)

const usersController = new UsersController()
routes.post('/users', usersController.create)

const messagesController = new MessagesController()
routes.post('/messages', messagesController.create)
routes.get('/messages/:id', messagesController.showByUser)

export { routes }