import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;

  @Column()
  image_uri: string;

  @Column()
  name: string;

  @Column()
  price: number;
}

export default Product;
