import { Ticket } from '../tickets/entity';
import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToMany
} from 'typeorm';
import { IsString, Length, MinLength, IsUrl, IsDate } from 'class-validator';


@Entity()
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @Length(2, 25)
  @Column('text')
  name: string;

  @IsString()
  @MinLength(5)
  @Column('text')
  description: string;

  @IsUrl()
  @Column('text')
  picture: string;

  @IsDate()
  @Column('date', { name: 'start_date' })
  startDate: Date;

  @IsDate()
  @Column('date', { name: 'end_date' })
  endDate: Date;

  @OneToMany(_ => Ticket, ticket => ticket.event, { eager: true })
  tickets: Ticket[];
}


// @Entity()
// export class Player extends BaseEntity {
//   @PrimaryGeneratedColumn()
//   id?: number;

//   @ManyToOne(_ => User, user => user.players)
//   user: User;

//   @ManyToOne(_ => Game, game => game.players)
//   game: Game;

//   // @Column('integer', { name: 'user_id' })
//   // userId: number;

//   @ManyToMany(() => Word, { eager: true })
//   @JoinTable()
//   words: Word[];

//   @Column('boolean', { default: false })
//   winner: boolean;
// }

// @Entity()
// export class Word extends BaseEntity {
//   @PrimaryGeneratedColumn()
//   id?: number;

//   @ManyToOne(_ => Game, game => game.players)
//   game: Game;

//   @Column('integer')
//   row: number;

//   @Column('integer')
//   column: number;

//   @Column('text')
//   text: string;
// }
