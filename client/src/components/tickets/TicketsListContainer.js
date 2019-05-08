import React from "react";
import { loadTickets } from "../../actions/tickets";
import { connect } from "react-redux";
import TicketsList from "./TicketsList";

class TicketsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadTickets();
  }
  
  render() {
    console.log("TICKETS LIST CONTAINER", this.props);
    return (
      <>
        {Array.isArray(this.props.tickets) && (
          <TicketsList event={this.props.event} tickets={this.props.tickets} />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  tickets:
    state.tickets === null
      ? null
      : Object.values(state.tickets).sort((a, b) => b.id - a.id)
});

export default connect(
  mapStateToProps,
  { loadTickets }
)(TicketsListContainer);
