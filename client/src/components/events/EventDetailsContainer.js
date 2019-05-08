import React from "react";
import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import { loadEvent, updateEvent } from "../../actions/events";
import TicketsListContainer from "../tickets/TicketsListContainer";

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvent(this.props.match.params.id);
  }

  //   onDelete = () => {
  //     this.props.deleteEvent(this.props.event.id);
  //     this.props.history.push("/");
  //   };
  state = { editMode: false };

  onEdit = () => {
    //console.log("Check the state onClickhere:", this.state);
    // intialize editing mode:
    // set the starting value of the fields to the ad details
    this.setState({
      editMode: true,
      formValues: {
        name: this.props.event.name,
        description: this.props.event.description,
        startDate: this.props.event.startDate,
        endDate: this.props.event.endDate,
        picture: this.props.event.picture
      }
    });
  };

  onChange = event => {
    // update the formValues property with the new data from the input field
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      editMode: false
    });
    console.log("this.state test", this.state);
    console.log("HIERRRRR", this.props);
    this.props.updateEvent(this.props.event.id, this.state.formValues);
  };
  render() {
    return (
      <div>
        <EventDetails
          onDelete={this.onDelete}
          onEdit={this.onEdit}
          editMode={this.state.editMode}
          event={this.props.event}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          formValues={this.state.formValues}
        />
        <TicketsListContainer tickets={this.props.tickets}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  event: state.event
});

export default connect(
  mapStateToProps,
  { loadEvent, updateEvent }
)(EventDetailsContainer);
