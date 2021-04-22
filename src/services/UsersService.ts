import { getCustomRepository, Repository } from 'typeorm'
import { Users } from '../entities/Users'
import { UsersRepository } from '../repositories/UsersRepository'


interface IUsersCreate {
    email: String
}

class UsersService {
    private usersRepository: Repository<Users>
    constructor() { this.usersRepository = getCustomRepository(UsersRepository) }
    async create({ email }: IUsersCreate) {
        const validateExistantEmail = await this.usersRepository.findOne({ email })

        if (validateExistantEmail) {
            throw new Error("email already exists")
        }

        const user = this.usersRepository.create({
            email
        })

        await this.usersRepository.save(user)

        JSON.stringify(user)

        return user
    }
}

export { UsersService }