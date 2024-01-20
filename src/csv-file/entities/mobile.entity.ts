import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'mobile_sales'})
export class mobileSales {
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
