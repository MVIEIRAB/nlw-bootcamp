import { getCustomRepository, Repository } from "typeorm"
import { MessagesRepository } from "../repositories/MessagesRepository"
import { Messages } from '../entities/Messages'

interface IMessagesCreate {
    admin_id?: String
    text: String
    user_id: String
}

class MessagesService {
    private messagesRepository: Repository<Messages>
    constructor() { this.messagesRepository = getCustomRepository(MessagesRepository) }

    async create({ admin_id, text, user_id }: IMessagesCreate) {
        const messages = this.messagesRepository.create({
            admin_id,
            text,
            user_id
        })

        await this.messagesRepository.save(messages)
        return messages
    }

    async listByUser(user_id: String) {
        const list = await this.messagesRepository.find({
            where: { user_id },
            relations: ["user"]
        })

        return list
    }
}

export { MessagesService }