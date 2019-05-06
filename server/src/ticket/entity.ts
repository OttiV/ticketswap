import { Event } from '../events/entities';
import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne
} from 'typeorm';

import {
  IsString,
  MinLength,
  IsUrl,
  IsNumber
} from 'class-validator';


@Entity()
export class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsUrl()
  @Column('text')
  picture: string;

  @IsNumber()
  @Column()
  price: number;

  @IsString()
  @MinLength(5)
  @Column('text')
  description: string;

  @ManyToOne(_ => Event, event => event.tickets)
  event: Event;
}
