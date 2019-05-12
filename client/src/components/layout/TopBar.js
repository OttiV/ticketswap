import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";
import { userId } from "../../jwt";
import { connect } from "react-redux";
import AccountIcon from "@material-ui/icons/AccountBox";
import "./TopBar.css";

const TopBar = props => {
  const { history, user } = props;

  return (
    <AppBar className="AppBar" position="absolute" style={{ zIndex: 10, margin: 0 }}>
      <Toolbar className="Toolbar">
        {/* <Button className="Button" color="inherit" onClick={() => history.push("/login")}>
          Login
        </Button> */}

        <Typography color="inherit" onClick={() => history.push("/login")}>
          <button className="Button">Login</button>
        </Typography>
        <Typography color="inherit" onClick={() => history.push("/signup")}>
          <button className="Button">Sign up</button>
        </Typography>

        <Typography
          className="Typography"
          variant="title"
          color="inherit"
          style={{ flex: 1 }}
        >
          <div className="h1"> Ticketswap </div>
        </Typography>
        {user && (
          <Button color="inherit">
            <AccountIcon /> {user.firstName}
          </Button>
        )}

        <Typography color="inherit" onClick={() => history.push("/events")}>
          <button className="Button">Home</button>
        </Typography>
        <Typography color="inherit" onClick={() => history.push("/logout")}>
          <button className="Button">Logout</button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  user:
    state.currentUser &&
    state.users &&
    state.users[userId(state.currentUser.jwt)]
});

export default withRouter(connect(mapStateToProps)(TopBar));
