import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'fixed_sales'})
export class fixedSales {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 30})
    name: string;

    @Column()
    price: number;

    @Column({ type: 'varchar', length: 40})
    description: string;

    @Column({ type: 'varchar'})
    password: string;
}
