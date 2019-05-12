import {
  JsonController,
  Get,
  Param,
  Put,
  Body,
  NotFoundError,
  Post,
  HttpCode,
  Authorized,
  CurrentUser
} from "routing-controllers";
import { Ticket } from "./entity";
// import User from "../users/entity";
// import { io } from "../index";

@JsonController()
export default class TicketController {
  @Get("/tickets")
  getTickets() {
    return Ticket.find();
  }

  @Get("/tickets/:id")
  getTicket(@Param("id") id: number) {
    return Ticket.findOneById(id);
  }

  @Authorized()
  @Post("/tickets")
  @HttpCode(201)
  createTicket(@Body() ticket: Ticket) {
    return ticket.save();
  }

  @Authorized()
  @Put("/tickets/:id")
  async updateTicket(@Param("id") id: number, @Body() update: Partial<Ticket>) {
    const ticket = await Ticket.findOneById(id);
    if (!ticket) throw new NotFoundError("Cannot find ticket");
    // io.emit("action", {
    //   type: "ADD_TICKET",
    //   payload: ticket
    // });
    return Ticket.merge(ticket, update).save();
  }
}
