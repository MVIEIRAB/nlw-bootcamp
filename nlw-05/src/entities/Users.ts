import {
    Entity,
    Column,
    CreateDateColumn,
    PrimaryColumn
} from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('users')
class Users {
    @PrimaryColumn()
    id: String

    @Column()
    email: String

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id) this.id = uuid()
    }
}

export { Users }