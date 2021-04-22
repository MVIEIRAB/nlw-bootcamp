import { getCustomRepository, Repository } from 'typeorm'
import { Settings } from '../entities/Settings'

import { SettingsRepository } from '../repositories/SettingsRepository'

interface ISettingsCreate {
    chat: boolean
    username: String
}

class SettingsService {
    private settingsRepository: Repository<Settings>
    constructor() { this.settingsRepository = getCustomRepository(SettingsRepository) }

    async create({ chat, username }: ISettingsCreate) {
        const validateUsername = await this.settingsRepository.findOne({ username })

        if (validateUsername) {
            throw new Error("username already exists")
        }

        const settings = this.settingsRepository.create({
            chat,
            username
        })

        await this.settingsRepository.save(settings)

        JSON.stringify(settings)

        return settings
    }
}

export { SettingsService }