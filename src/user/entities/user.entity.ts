import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user'})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 30})
    name: string;

    @Column({ type: 'varchar', length: 40})
    email: string;

    @Column({ type: 'varchar'})
    password: string;
}
