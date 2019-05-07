import React from "react";
import { connect } from "react-redux";
import TicketDetails from "./TicketDetails";
import { loadTicket, updateTicket } from "../../actions/tickets";

class TicketDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadTicket(this.props.match.params.id);
  }

  state = { editMode: false };

  onEdit = () => {
    //console.log("Check the state onClickhere:", this.state);
    this.setState({
      editMode: true,
      formValues: {
        picture: this.props.event.picture,
        description: this.props.event.description,
        price: this.props.event.price
      }
    });
  };

  onChange = ticket => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [ticket.target.name]: ticket.target.value
      }
    });
  };

  onSubmit = ticket => {
    ticket.preventDefault();
    this.setState({
      editMode: false
    });
    console.log("this.state test", this.state);
    console.log("HIERRRRR", this.props);
    this.props.updateTicket(this.props.ticket.id, this.state.formValues);
  };
  render() {
    return (
      <div>
        <TicketDetails
          onDelete={this.onDelete}
          onEdit={this.onEdit}
          editMode={this.state.editMode}
          ticket={this.props.ticket}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          formValues={this.state.formValues}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ticket: state.ticket
});

export default connect(
  mapStateToProps,
  { loadTicket, updateTicket }
)(TicketDetailsContainer);
