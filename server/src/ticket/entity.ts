import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity
} from "typeorm";
import {
  IsString,
  MinLength,
  IsUrl,
  IsNumber
} from "class-validator";


@Entity()
export default class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsUrl()
  @Column("text")
  picture: string;

  @IsNumber()
  @Column("number")
  price: number;

  @IsString()
  @MinLength(5)
  @Column("text")
  description: string;
  
  // @ManyToOne(_ => Event, event => event.ticket)
  // event: Event;
}
