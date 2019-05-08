import React from "react";
import { connect } from "react-redux";
import { createTicket } from "../../actions/tickets";
import TicketForm from "./TicketForm";

class TicketFormContainer extends React.Component {
  state = {
    description: "",
    price: "",
    picture: ""
  };

  onChange = ticket => {
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

