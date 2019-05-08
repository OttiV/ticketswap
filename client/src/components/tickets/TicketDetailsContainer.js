import React from "react";
import { connect } from "react-redux";
import TicketDetails from "./TicketDetails";
import { loadTicket, updateTicket } from "../../actions/tickets";

class TicketDetailsContainer extends React.Component {
  componentDidMount() {
    console.log("TICKET DETAILS", this.props.match.params.id);
    this.props.loadTicket(this.props.match.params.id);
  }

  state = { editMode: false };

  onEdit = () => {
    //console.log("Check the state onClickhere:", this.state);
    this.setState({
      editMode: true,
      formValues: {
        picture: this.props.ticket.picture,
        description: this.props.ticket.description,
        price: this.props.ticket.price
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
    this.props.updateTicket(this.props.ticket.id, this.state.formValues);
  };
  render() {
    
    return (
      <div>
        <TicketDetails
        
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
  ticket: state.ticket,
  comment: state.comment
});

export default connect(
  mapStateToProps,
  { loadTicket, updateTicket }
)(TicketDetailsContainer);
