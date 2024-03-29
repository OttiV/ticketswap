import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
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

  @Column("integer", { name: "ticket_id" })
  ticketId: number;
  
  @ManyToOne(_ => User, user => user.comment)
  user: User[];

  @Column("integer", { name: "user_id" })
  userId: number;
}
