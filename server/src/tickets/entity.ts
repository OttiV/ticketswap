import { Comment } from "../comments/entity";
import { Event } from "../events/entities";
import User from "../users/entity";
import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  OneToMany
} from "typeorm";

import { IsString, MinLength, IsUrl, IsNumber } from "class-validator";

@Entity()
export class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsUrl()
  @Column("text")
  picture: string;

  @IsNumber()
  @Column()
  price: number;

  @IsString()
  @MinLength(5)
  @Column("text")
  description: string;

  @ManyToOne(_ => Event, event => event.tickets)
  event: Event[];

  @OneToMany(_ => Comment, comment => comment.ticket, { eager: true })
  comments: Comment[];

  @ManyToOne(_ => User, user => user.tickets)
  user: User[];

  // @ManyToOne(_ => Comment, comment => comment.tickets)
  // comment: Comment[];
}
