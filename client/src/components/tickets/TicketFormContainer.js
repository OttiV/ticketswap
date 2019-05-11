import React, { Component } from "react";
import { connect } from "react-redux";
import { createTicket } from "../../actions/tickets";
import TicketForm from "./TicketForm";

class TicketFormContainer extends Component {
  state = {
    description: "",
    price: "",
    picture: "",
    eventId: this.props.eventId,
    userId: this.props.userId
  };

  onChange = ticket => {
    console.log("TICKET TARGET NAME", ticket.target.name);
    this.setState({
      [ticket.target.name]: ticket.target.value
    });
  };

  onSubmit = ticket => {
    this.props.createTicket(this.state);
    ticket.preventDefault();
    this.setState({
      description: "",
      price: "",
      picture: "",
      eventId: this.props.eventId,
      userId: this.props.userId
    });
  };

  render() {
    console.log("TICKET FORM", this.props);
    return (
      <TicketForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}
const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  users: state.users === null ? null : state.users,
  event: state.event,
  ticket: state.ticket
});

export default connect(
  mapStateToProps,
  { createTicket }
)(TicketFormContainer);
