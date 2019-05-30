import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EventDetails.css";
import { Animated } from "react-animated-css";

export default class EventDetails extends Component {
  renderTicket = ticket => {
    return (
      <div className="Ticket" key={ticket.id}>
        <Link to={`/tickets/${encodeURIComponent(ticket.id)}`}>
        Risk: {ticket.fraudrisk}%
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
    const { events } = this.props;
    console.log("this.props.tickets", this.props.tickets);
    // console.log('FRAUDRISK', this.props.tickets.fraudrisk)

    const { tickets, eventId } = this.props;

    const eventTickets = tickets && Object.values(tickets).filter(t => t.eventId == eventId);
    console.log("eventTickets", eventTickets);
    return (
      <div className="EventDetailsContainer">
        <div className="EventDetails">
          {this.props.thisEvent && (
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <h1 className="EventTitle">{this.props.thisEvent.name} </h1>
              
              <img
                className="EventImage"
                src={this.props.thisEvent.picture}
                alt={this.props.thisEvent.description}
              />
              <p>Description: {this.props.thisEvent.description} </p>
              <p>Starts on the {this.props.thisEvent.startDate} </p>
              <p>Ends the {this.props.thisEvent.endDate} </p>
              <br />
            </Animated>
          )}
        </div>
        <div className="TicketsList">
          {!tickets && "Loading..."}
          <div>
            {tickets && !this.props.editMode && (
              <div className="Tickets">
                {Object.values(eventTickets).map(ticket => this.renderTicket(ticket))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
