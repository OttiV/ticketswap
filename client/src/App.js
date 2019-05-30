import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import LoginPage from "./components/login/LoginPage";
import SignupPage from "./components/signup/SignupPage";
import EventsListContainer from "./components/events/EventsListContainer";
import LogoutPage from "./components/logout/LogoutPage";
import EventDetailsContainer from "./components/events/EventDetailsContainer";
import TicketDetailsContainer from "./components/tickets/TicketDetailsContainer";
import "./App.css";
import TopBar from "./components/layout/TopBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <TopBar />
          </nav>
          <main style={{ marginTop: 75 }}>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/events" component={EventsListContainer} />
            <Route exact path="/events/:id" component={EventDetailsContainer} />
            <Route exact path="/tickets/:id" component={TicketDetailsContainer} />
            <Route exact path="/" render={() => <Redirect to="/events" />} />
          </main>
        </div>
      </Router>
    );
  }
}
export default App;
