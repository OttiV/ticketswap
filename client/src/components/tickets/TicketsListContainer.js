import React from "react";
// import { loadTickets } from "../actions/tickets";
import { connect } from "react-redux";
import TicketsList from "./TicketsList";


class TicketsListContainer extends React.Component {
  componentDidMount() {
    // this.props.loadTickets(this.props.tickets);
  }
  
  render() {
    console.log("TEST TICKET LIST CONTAINER",this.props)
    return (
      <>
        {Array.isArray(this.props.tickets) && <TicketsList tickets={this.props.tickets} />}
        {console.log("SHOW THE PROPSSS", this.props)}
      </>
    );
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets 
});

export default connect(
  mapStateToProps,
  { loadTickets }
)(TicketsListContainer);