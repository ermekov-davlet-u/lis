import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
    codeid: number;

    @Column()
    name: string
}
