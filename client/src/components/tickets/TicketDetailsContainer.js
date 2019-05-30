import React from "react";
import { connect } from "react-redux";
import TicketDetails from "./TicketDetails";
import { getTickets } from "../../actions/tickets";
import { getComments, createComment } from "../../actions/comments";
import CommentForm from "../comments/CommentForm";
import { userId } from "../../jwt";

class TicketDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.getTickets();
    this.props.getComments();
  }

  state = { editMode: false };

  onEdit = () => {
    this.setState({
      editMode: true,
      formValues: {
        comment: "",
        userId: this.props.userId,
        ticketId: this.props.match.params.id
      }
    });
  };

  onChange = comment => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [comment.target.name]: comment.target.value
      }
    });
  };

  onSubmit = comment => {
    comment.preventDefault();
    this.setState({
      editMode: false
    });
    console.log("FORM VALUES", this.state.formValues);
    this.props.createComment(this.state.formValues);
  };
  render() {
    const { authenticated, tickets } = this.props;
    const editMode = this.state.editMode;
    const thisTicket =
      tickets && tickets.find(t => t.id == this.props.match.params.id);

    return (
      <div className="EventDetailsContainer">
        <div>
          {tickets  &&(
            <TicketDetails
              tickets={this.props.tickets}
              onEdit={this.onEdit}
              editMode={this.state.editMode}
              onChange={this.onChange}
              onSubmit={this.onSubmit} 
              formValues={this.state.formValues}
              authenticated={this.props.authenticated}
              thisTicket={thisTicket}
              comments={this.props.comments}
              ticketId={this.props.match.params.id}
            />
          )}
          <button className="EventDetailsButtons" onClick={this.onEdit}>
            Leave a comment
          </button>
        </div>
        {authenticated && editMode && (
          
          <CommentForm
            values={this.state.formValues}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            comments={this.props.comments}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  users: state.users === null ? null : state.users,
  userId: state.currentUser && userId(state.currentUser.jwt),
  tickets:
    state.tickets === null
      ? null
      : Object.values(state.tickets).sort((a, b) => b.id - a.id),
  comments:
    state.comments === null
      ? null
      : Object.values(state.comments).sort((a, b) => b.id - a.id)
});

export default connect(
  mapStateToProps,
  { getTickets, createComment, getComments }
)(TicketDetailsContainer);
