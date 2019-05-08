import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./TicketsList.css";

export default class TicketsList extends Component {
  renderTicket = ticket => {
    return (
      <div className="Tickets" key={ticket.id}>
        <img className="images" src={ticket.picture} alt={ticket.description} />
        <br />
        User Id: {ticket.userId} <br />
        Description: {ticket.description}
        <br />
        Price: $ {ticket.price}
      </div>
    );
  };

  render() {
    console.log("THIS TICKET", this.props);
    const { tickets } = this.props;
    const checkTickets = tickets.map(i =>
      i.filter(t => t.eventId === this.props.event.id)
    );
    return (
      <div className="TicketsList">
        {!tickets && "Loading..."}

        {tickets && (
          <Link to={`/tickets/${encodeURIComponent(tickets.id)}`}>
            <div>
              {checkTickets.map(ticket =>
                ticket.map(t => this.renderTicket(t))
              )}
            </div>
          </Link>
        )}
      </div>
    );
  }
}
