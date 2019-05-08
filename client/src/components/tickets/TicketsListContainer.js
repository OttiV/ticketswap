import React from "react";
import { loadTickets } from "../../actions/tickets";
import { connect } from "react-redux";
import TicketsList from "./TicketsList";

class TicketsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadTickets();
  }

  render() {

    return (
      <div>
        <TicketsList event={this.props.event} tickets={this.props.tickets} />
      </div>
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
