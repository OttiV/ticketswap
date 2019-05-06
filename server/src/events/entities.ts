import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity
  // OneToMany,
  // ManyToOne,
  // ManyToMany,
  // JoinTable
} from "typeorm";
import {
  IsString,
  Length,
  MinLength,
  IsUrl,
  IsNumber,
  IsDate
} from "class-validator";
// import User from "../users/entity";

// export type Date = "date";

@Entity()
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @Length(2, 25)
  @Column("text")
  name: string;

  @IsString()
  @MinLength(5)
  @Column("text")
  description: string;

  @IsUrl()
  @Column("text")
  picture: string;

  @IsNumber()
  @Column("text")
  price: number;

  @IsDate()
  @Column("date")
  startDate: Date;

  @IsDate()
  @Column("date")
  endDate: Date;
}

// @Entity()
// export class Player extends BaseEntity {
//   @PrimaryGeneratedColumn()
//   id?: number;

//   @ManyToOne(_ => User, user => user.players)
//   user: User;

//   @ManyToOne(_ => Game, game => game.players)
//   game: Game;

//   // @Column("integer", { name: "user_id" })
//   // userId: number;

//   @ManyToMany(() => Word, { eager: true })
//   @JoinTable()
//   words: Word[];

//   @Column("boolean", { default: false })
//   winner: boolean;
// }

// @Entity()
// export class Word extends BaseEntity {
//   @PrimaryGeneratedColumn()
//   id?: number;

//   @ManyToOne(_ => Game, game => game.players)
//   game: Game;

//   @Column("integer")
//   row: number;

//   @Column("integer")
//   column: number;

//   @Column("text")
//   text: string;
// }
