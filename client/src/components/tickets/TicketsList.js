// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./TicketsList.css";

// export default class TicketsList extends Component {
//   renderTicket = ticket => {
//     return (
//       <div className="Tickets" key={ticket.id}>
//       <Link to={`/tickets/${encodeURIComponent(ticket.id)}`}>
//         <img className="images" src={ticket.picture} alt={ticket.description} />
//         <br />
//         User Id: {ticket.userId} <br />
//         Description: {ticket.description}
//         <br />
//         Price: $ {ticket.price}
//         </Link>
//       </div>
//     );
//   };

//   render() {
//     console.log("THIS TICKET", this.props.tickets);
//     const {tickets} = this.props;
//     const checkTickets = tickets.map(ticket =>
//       ticket.filter(t => t.eventId === this.props.event.id)
//     );
//     return (
//       <div className="TicketsList">
//         {!tickets && "Loading..."}

//         {tickets && (
         
//             <div>
//               {checkTickets.map(ticket => this.renderTicket(ticket))}
//             </div>
          
//         )}
//       </div>
//     );
//   }
// }
