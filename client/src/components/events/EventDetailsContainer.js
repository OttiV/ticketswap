import React from "react";
import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import { loadEvent, updateEvent } from "../actions/events";

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvent(this.props.match.params.id);
  }

  //   onDelete = () => {
  //     this.props.deleteAd(this.props.ad.id);
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
        name: this.props.ad.name,
        description: this.props.ad.description,
        price: this.props.ad.price,
        picture: this.props.ad.picture
      }
    });
  };

  onChange = event => {
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
