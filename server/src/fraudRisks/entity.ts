import { Ticket } from '../tickets/entity';
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToOne } from 'typeorm';
// import { IsString, Length, MinLength, IsUrl, IsDate } from 'class-validator';


@Entity()
export class Fraudrisk extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({default: 5})
  risk: number;

  @OneToOne(_ => Ticket, ticket => ticket.fraudrisk) // specify inverse side as a second parameter
    ticket: Ticket;

    


}