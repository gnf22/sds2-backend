import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

export type StatusType = 'PENDING' | 'DELIVERED';

@Entity('orders')
class Order {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  address: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @CreateDateColumn()
  moment: Date;

  @Column({
    type: 'enum',
    enum: ['PENDING', 'DELIVERED'],
    default: 'PENDING',
  })
  status: StatusType;
}

export default Order;
