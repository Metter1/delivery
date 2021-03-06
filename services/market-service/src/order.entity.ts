import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { ENTITY_ORDER } from './constants/constants';

export enum OrderStatus {
  waitingOrder = 'Ожидание подтверждения оплаты',
  packingOrder = 'Заказ собирается',
  handedToCourier = 'Заказ передан курьеру',
  deliveredOrder = 'Заказ доставлен',
}

@Entity(ENTITY_ORDER)
export class OrderEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.waitingOrder,
  })
  orderStatus!: OrderStatus;

  @Column({ type: 'float' })
  startLat: number;

  @Column({ type: 'float' })
  startLng: number;

  @Column({ type: 'float' })
  endLat: number;

  @Column({ type: 'float' })
  endLng: number;
}
