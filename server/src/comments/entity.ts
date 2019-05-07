import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne
  // OneToMany
} from "typeorm";

import { IsString, MinLength } from "class-validator";
import { Ticket } from "../tickets/entity";
import User from "../users/entity";

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @MinLength(5)
  @Column("text")
  comment: string;

  @ManyToOne(_ => Ticket, ticket => ticket.comments)
  ticket: Ticket[];

  // @OneToMany(_ => Ticket, ticket => ticket.comment, { eager: true })
  // tickets: Ticket[];

  @ManyToOne(_ => User, user => user.comment)
  user: User[];
}
