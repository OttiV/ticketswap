import React, { Component } from "react";
// import TicketsListContainer from "../tickets/TicketsListContainer";
import { Link } from "react-router-dom";
import "./EventDetails.css";

export default class EventDetails extends Component {
  renderTicket = ticket => {
    console.log("TICKETS AND EVENTS PROPS", this.props);
    return (
      <div className="Ticket" key={ticket.id}>
        <Link to={`/tickets/${encodeURIComponent(ticket.id)}`}>
          <img
            className="TicketImages"
            src={ticket.picture}
            alt={ticket.description}
          />
          <br />
          User Id: {ticket.userId} <br />
          Description: {ticket.description}
          <br />
          Price: € {ticket.price}
        </Link>
      </div>
    );
  };
  render() {
    const tickets = this.props.event.tickets;
    return (
      <div className="EventDetailsContainer">
        <div className="EventDetails">
          <h1 className="EventTitle">{this.props.event.name} </h1>
          <img
            className="EventImage"
            src={this.props.event.picture}
            alt={this.props.event.description}
          />
          <p>{this.props.event.description} </p>
          <p>from the {this.props.event.startDate} </p>
          <p>untill the {this.props.event.endDate} </p>
          <br />
        </div>
        <div className="TicketsList">
          {!tickets && "Loading..."}
          <div>
            {tickets && (
              <div className="Tickets">
                {tickets.map(ticket => this.renderTicket(ticket))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
