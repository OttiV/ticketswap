// import React from "react";
// import { getTickets } from "../../actions/tickets";
// import { connect } from "react-redux";
// import TicketsList from "./TicketsList";
// import { userId } from "../../jwt";

// class TicketsListContainer extends React.Component {
//   componentDidMount() {
//     this.props.getTickets();
//   }

//   render() {
//     return (
//       <div>
//         <TicketsList events={this.props.events} tickets={this.props.tickets} />
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   authenticated: state.currentUser !== null,
//   users: state.users === null ? null : state.users,
//   userId: state.currentUser && userId(state.currentUser.jwt),
//   events: state.events,
//   tickets:
//     state.tickets === null
//       ? null
//       : Object.values(state.tickets).sort((a, b) => b.id - a.id)
// });

// export default connect(
//   mapStateToProps,
//   { getTickets }
// )(TicketsListContainer);
