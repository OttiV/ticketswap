import React, { Component } from "react";
import { connect } from "react-redux";
import { createTicket } from "../../actions/tickets";
import TicketForm from "./TicketForm";

class TicketFormContainer extends Component {
  state = {
    description: "",
    price: "",
    picture: ""
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
      picture: ""
    });
  };

  render() {
    return (
      <TicketForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(
  null,
  { createTicket }
)(TicketFormContainer);
