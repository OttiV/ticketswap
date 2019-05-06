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
  Put,
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
  @Get("/events/:id([0-9])")
  getEvent(@Param("id") id: number) {
    return Event.findOneById(id);
  }

  // @Authorized()
  @Post("/events")
  @HttpCode(201)
  // async
  createEvent(@Body() event: Event) {
    // const entity = await Event.create().save()

    // const event = await Event.findOneById(entity.id)

    // io.emit('action', {
    //   type: 'ADD_EVENT',
    //   payload: event
    // })

    return event.save();
  }

  // @Authorized()
  // @Post("/events")
  // @HttpCode(201)
  // createEvent(@Body() event: Event) {
  //   return event.save();
  // }
  //Put request functional
  @Authorized()
  @Put("/events/:id")
  async updateEvent(@Param("id") id: number, @Body() update: Partial<Event>) {
    const event = await Event.findOneById(id);
    if (!event) throw new NotFoundError("Cannot find event");

    return Event.merge(event, update).save();
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
}
