import React, { PureComponent } from "react";
import { getEvents, createEvent } from "../../actions/events";
import { getUsers } from "../../actions/users";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { Card, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";
// CardActions,
// import Typography from "@material-ui/core/Typography";
import "./EventsList.css";

class EventsList extends PureComponent {
  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.games === null) this.props.geEvents();
      if (this.props.users === null) this.props.getUsers();
    }
  }

  renderEvent = event => {
    return (
      <Card key={event.id} className="event-card">
        <CardContent>
          <li className="Events" key={event.id}>
            <Link to={`/events/${encodeURIComponent(event.id)}`}>
              {event.name}, <i>$ {event.price}</i> <br />
              <img
                className="images"
                src={event.picture}
                alt={event.description}
              />
            </Link>
          </li>
        </CardContent>
      </Card>
    );
  };

  render() {
    const { events, authenticated, createEvent } = this.props;

    if (events === null) return null;

    // if (!authenticated) return (
    //   <Redirect to="/login" />
    // )

    return (
      <Paper className="outer-paper">
        <div>{events.map(event => this.renderEvent(event))}</div>
        {authenticated && (
          <Button
            color="primary"
            variant="contained"
            onClick={createEvent}
            className="create-event"
          >
            Create a new event
          </Button>
        )}
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  users: state.users === null ? null : state.users,
  events:
    state.events === null
      ? null
      : Object.values(state.events).sort((a, b) => b.id - a.id)
});

export default connect(
  mapStateToProps,
  { getEvents, getUsers, createEvent }
)(EventsList);
