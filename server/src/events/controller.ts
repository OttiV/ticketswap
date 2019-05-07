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
import { Event } from "./entities";
import { io } from "../index";
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

  @Authorized()
  @Post("/events")
  @HttpCode(201)
  async createEvent(@CurrentUser() user: User, @Param("id") eventId: number) {
    const entity = await Event.create().save();

    const event = await Event.findOneById(entity.id);

    io.emit("action", {
      type: "ADD_EVENT",
      payload: event
    });
console.log("CREATE EVENT", event)
    return event.save();
  }

  //Put request functional
  @Authorized()
  @Put("/events/:id")
  async updateEvent(@Param("id") id: number, @Body() update: Partial<Event>) {
    const event = await Event.findOneById(id);
    if (!event) throw new NotFoundError("Cannot find event");
    io.emit("action", {
      type: "UPDATE_EVENT",
      payload: await Event.findOneById(event.id)
    });
    return Event.merge(event, update).save();
  }
}
