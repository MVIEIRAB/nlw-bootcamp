import { Request, Response } from 'express'

import { settingsMessages } from '../helpers/settingsMessage'

import { SettingsService } from '../services/SettingsService'

class SettingsController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { chat, username } = req.body

            const settingsService = new SettingsService()

            const settings = await settingsService.create({ chat, username })

            return res.status(200).json(settings)
        } catch (err) {
            if (err.message == settingsMessages.USERNAME_ALREADY_EXIST) {
                res.status(400).json({
                    messageWarning: "username already exists",
                }).end()
            } else {
                console.log(err)
            }
        }
    }
}

export { SettingsController }