import { Entity, PrimaryColumn, CreateDateColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Users } from './Users'
import { v4 as uuid } from 'uuid'

@Entity("messages")
class Messages {
    @PrimaryColumn()
    id: String

    @Column()
    admin_id: String

    @Column()
    text: String

    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => Users)
    user: Users

    @Column()
    user_id: String

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id) this.id = uuid()
    }
}

export { Messages }