import { Event } from "../events/entities";
import { Fraudrisk } from "../fraudRisks/entity";
import User from "../users/entity";

import {
  JsonController,
  CurrentUser,
  Get,
  Param,
  Put,
  Body,
  NotFoundError,
  Post,
  HttpCode,
  Authorized
} from "routing-controllers";
import { Ticket } from "./entity";

@JsonController()
export default class TicketController {
  @Get("/tickets")
  async allTickets() {
    const tickets = await Ticket.find();
    return { tickets };
  }

  @Get("/tickets/:id")
  getTicket(@Param("id") id: number) {
    return Ticket.findOneById(id);
  }

  @Authorized()
  @Put("/tickets/:id")
  async updateTicket(@Param("id") id: number, @Body() update: Partial<Ticket>) {
    const ticket = await Ticket.findOneById(id);
    if (!ticket) throw new NotFoundError("Cannot find ticket");

    return Ticket.merge(ticket, update).save();
  }
  @Authorized()
  @Post("/tickets")
  @HttpCode(201)
  async createTicket(
    @Body() ticket: Ticket,
    @CurrentUser() user: User,
    event: Event
  ) {
    function createFraudRisk() {
      function tqRisk() {
        if (user.tickets.length <= 1) {
          const ticketQuantityRisk = 10;
          return ticketQuantityRisk;
        } else {
          const ticketQuantityRisk = 0;
          return ticketQuantityRisk;
        }
      }
      function tcRisk() {
        if (ticket.comments.length > 3) {
          const commentRisk = 5;
          return commentRisk;
        } else {
          const commentRisk = 0;
          return commentRisk;
        }
      }

      function parRisk() {
        if (ticket.fraudrisk.risk < 5) {
          const paramRisk = 5;
          return paramRisk;
        } else if (ticket.fraudrisk.risk > 95) {
          const paramRisk = 95;
          return paramRisk;
        } else {
          const paramRisk = 0;
          return paramRisk;
        }
      }
      function priceRisk() {
        const ticketTotalPrice = event.tickets.reduce(
          (totalSoFar, currentTicket) => {
            return totalSoFar + currentTicket.price;
          },
          0
        );

        const ticketsAveragePrice = ticketTotalPrice / event.tickets.length;
        if (ticket.price < ticketsAveragePrice) {
          function calculatePercentage(price, avPrice) {
            const priceDiff = avPrice - price;
            const priceDiffPercentage = (priceDiff / 100) * avPrice;
            return priceDiffPercentage;
          }
          const priceRisk = calculatePercentage(
            ticket.price,
            ticketsAveragePrice
          );
          return priceRisk;
        } else if (ticket.price > ticketsAveragePrice) {
          function calculatePercentage(price, avPrice) {
            const priceAvDiff = price - avPrice;
            const priceAvDiffPercentage = (priceAvDiff / 100) * price;
            return priceAvDiffPercentage;
          }
          const priceRisk = calculatePercentage(
            ticket.price,
            ticketsAveragePrice
          );
          return priceRisk;
        } else {
          const priceRisk = 0;
          return priceRisk;
        }
      }
      const ticketQuantityRisk = tqRisk();
      const commentRisk = tcRisk();
      const paramRisk = parRisk();
      const priceTicketRisk = priceRisk();
      return ticketQuantityRisk + commentRisk + paramRisk + priceTicketRisk;
    }
    const fraudrisk = createFraudRisk();

    const entity = new Fraudrisk();
    await entity.save();
    return ticket;
  }
}
