import { JsonController, Authorized, Post, Param, HttpCode, NotFoundError, Get, Put, Body} from "routing-controllers";
import { Event } from "./entities";
import { io } from "../index";

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

  @Authorized()
  @Post("/events")
  @HttpCode(201)
  createEvent(@Body() event: Event) {
      io.emit("action", {
        type: "ADD_EVENT",
        payload: event
      });

    return event.save();
  }

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
