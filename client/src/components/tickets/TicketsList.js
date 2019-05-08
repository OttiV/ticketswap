import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./TicketsList.css";

export default class TicketsList extends Component {
  renderTicket = (ticket)  => {
    return (
      <div className="Tickets" key={ticket.id}>
        {/* <Link to={`/tickets/${encodeURIComponent(ticket.id)}`}> */}
          {ticket.name} <br />
          <img className="images" src={ticket.picture} alt={ticket.description} />
        {/* </Link> */}
      </div>
    );
  }

  render() {
    const { tickets } = this.props;

    return (
      <div className="TicketsList">

        {!tickets && "Loading..."}

        {tickets && <ul>{tickets.map(ticket => ticket.map(t =>this.renderTicket()))}</ul>}
      </div>
    );
  }
}