import {
  JsonController,
  Authorized,
  CurrentUser,
  Post,
  Param,
  BadRequestError,
  HttpCode,
  NotFoundError,
  ForbiddenError,
  Get,
  Body,
  Patch
} from "routing-controllers";
import User from "../users/entity";
// import { Game, Player, Board, Word } from "./entities";
import { Event } from "./entities";
import { io } from "../index";
// import { Router } from 'express';
// import { IndexMetadata } from 'typeorm/metadata/IndexMetadata';


@JsonController()
export default class EventController {
  @Get("/events")
  async allEvents() {
    const events = await Event.find();
    return { events };
  }
  @Get("/events/:id([0-9]+)")
  getEvent(@Param("id") id: number) {
    return Event.findOneById(id);
  }

  // @Authorized()
  @Post('/events')
  @HttpCode(201)
  async createEvent(
    @CurrentUser() user: User
  ) {
    const entity = await Event.create().save()

    // await Player.create({
    //   game: entity, 
    //   user,
    //   symbol: 'x'
    // }).save()

    const event = await Event.findOneById(entity.id)

    io.emit('action', {
      type: 'ADD_EVENT',
      payload: event
    })

    return event
  }

  // @Authorized()
  // @Post("/games/:id([0-9]+)/players")
  // @HttpCode(201)
  // async joinGame(@CurrentUser() user: User, @Param("id") gameId: number) {
  //   const game = await Game.findOneById(gameId);
  //   if (!game) throw new BadRequestError(`Game does not exist`);
  //   if (game.status !== "pending")
  //     throw new BadRequestError(`Game is already started`);

  //   game.status = "started";
  //   await game.save();

  //   const player = await Player.create({
  //     game,
  //     user
  //   }).save();

  //   io.emit("action", {
  //     type: "UPDATE_GAME",
  //     payload: await Game.findOneById(game.id)
  //   });

  //   return player;
  // }

//   @Authorized()
//   // the reason that we're using patch here is because this request is not idempotent
//   // http://restcookbook.com/HTTP%20Methods/idempotency/
//   // try to fire the same requests twice, see what happens
//   @Patch("/games/:id([0-9]+)")
//   async updateGame(
//     @CurrentUser() user: User,
//     @Param("id") gameId: number,
//     @Body() position: number[]
//   ) {
//     const game = await Game.findOneById(gameId);
//     if (!game) throw new NotFoundError(`Game does not exist`);

//     const player = await Player.findOne({ user, game });
//     console.log("player test:", player);

//     if (!player) throw new ForbiddenError(`You are not part of this game`);
//     if (game.status !== "started")
//       throw new BadRequestError(`The game is not started yet`);

//     const [rowIndex, columnIndex] = position;

//     const correctWord = game.words.find(word => {
//       return word.row === rowIndex && word.column === columnIndex;
//     });
//     console.log("correctWord test:", correctWord);

//     if (correctWord) {
//       player.words.push(correctWord);
//       if (player.words.length >= 5) {
//         player.winner = true;
//         game.status = "finished";
//         await game.save();
//       }
//       await player.save();
//     }

//     const newGame = await Game.findOneById(gameId);
//     if (!newGame) throw new NotFoundError(`Game does not exist`);

//     console.log("newGame test:", newGame);

//     io.emit("action", {
//       type: "UPDATE_GAME",
//       payload: newGame
//     });

//     return newGame;
//   }

//   @Authorized()
//   @Get("/games/:id([0-9]+)")
//   getGame(@Param("id") id: number) {
//     return Game.findOneById(id);
//   }

//   @Authorized()
//   @Get("/games")
//   getGames() {
//     return Game.find();
//   }
}
