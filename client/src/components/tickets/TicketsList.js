import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./TicketsList.css";

export default class TicketsList extends Component {
  renderTicket = (ticket)  => {
    return (
      <li className="Tickets" key={ticket.id}>
        <Link to={`/tickets/${encodeURIComponent(ticket.id)}`}>
          {ticket.name} <br />
          <img className="images" src={ticket.picture} alt={ticket.description} />
        </Link>
      </li>
    );
  }

  render() {
    const { tickets } = this.props;
    console.log("TEST PROPS TICKETLIST", tickets)

    return (
      <div className="TicketsList">

        {!tickets && "Loading..."}

        {tickets && <ul>{tickets.map(this.renderTicket)}</ul>}
      </div>
    );
  }
}