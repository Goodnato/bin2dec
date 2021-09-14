import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("converts")
class Converts {
    @PrimaryColumn()
    id: string;

    @Column()
    binary: string;

    @Column()
    decimal: number;

    @Column()
    status: number;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Converts }