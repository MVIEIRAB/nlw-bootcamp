import { Request, Response } from 'express'

import { usersMessages } from '../helpers/usersMessage'

import { UsersService } from '../services/UsersService'

class UsersController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { email } = req.body
            const usersService = new UsersService()

            const user = await usersService.create({ email })

            return res.status(200).json(user)
        } catch (err) {
            if (err.message == usersMessages.EMAIL_ALREADY_EXIST) {
                res.status(400).json({
                    messageWarning: "email already exists",
                }).end()
            } else {
                console.log(err)
            }
        }
    }
}

export { UsersController }