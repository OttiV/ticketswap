import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn
} from "typeorm";
import { IsString, MinLength, IsUrl } from "class-validator";
import { Comment } from "../comments/entity";
import { Event } from "../events/entities";
import { Fraudrisk } from "../fraudRisks/entity";
import User from "../users/entity";

@Entity()
export class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsUrl()
  @Column("text")
  picture: string;

  // @IsNumber()
  @Column()
  price: number;

  @IsString()
  @MinLength(5)
  @Column("text")
  description: string;

  @ManyToOne(_ => Event, event => event.tickets)
  event: Event[];

  @Column("integer", { name: "event_id" })
  eventId: number;

  @OneToMany(_ => Comment, comment => comment.ticket, { eager: true })
  comments: Comment[];

  @ManyToOne(_ => User, user => user.tickets)
  user: User[];

  @Column("integer", { name: "user_id" })
  userId: number;

  @OneToOne(_ => Fraudrisk, fraudrisk => fraudrisk.ticket) 
  @JoinColumn()
  fraudrisk: Fraudrisk;

  @Column("integer", { name: "fraudrisk_risk" })
  fraudriskRisk: number;
}
