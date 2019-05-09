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
        <img className="TicketImages" src={ticket.picture} alt={ticket.description} />
        <br />
        User Id: {ticket.userId} <br />
        Description: {ticket.description}
        <br />
        Price: $ {ticket.price}
        </Link>
      </div>
    );
  };
  render(){
    const tickets = this.props.event.tickets
  return (
    <div className="EventDetailsContainer">
      <div className="EventDetails">
        <h1>{this.props.event.name} </h1>
        <img
          className="EventImage"
          src={this.props.event.picture}
          alt={this.props.event.description}
        /> 
        <p>{this.props.event.description} </p>
        <p>from the {this.props.event.startDate} </p>
        <p>untill the {this.props.event.endDate} </p>
        <br/>
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




// import React from "react";
// // import EventForm from "./EventForm";
// import TicketsListContainer from "../tickets/TicketsListContainer";
// import { Link } from "react-router-dom";
// import "./EventDetails.css";

// export default function EventDetails(props) {
//   console.log("TICKETS AND EVENTS PROPS", props);
//   tickets = props.event
//   return (
//     <div className="EventDetailsContainer">
//       <div className="EventDetails">
//         <h1>{props.event.name} </h1>
//         <p>{props.event.description} </p>
//         <p>{props.event.startDate} </p>
//         <p>{props.event.endDate} </p>
//         <img
//           className="images"
//           src={props.event.picture}
//           alt={props.event.description}
//         />
//       </div>
//       {/* <h1>Comments</h1>
//       <p>{props.ticket.price}</p>
//       <img
//         className="images"
//         src={props.ticket.picture}
//         alt={props.ticket.description}
//       /> */}
//       <TicketsListContainer event={props.event} tickets={props.tickets} />

//       <Link to="/">
//         <button className="EventDetailsButtons">Home</button>
//       </Link>
//     </div>
//   );
// }
