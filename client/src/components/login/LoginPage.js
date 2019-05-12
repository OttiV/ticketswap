import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/users";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";
import { Animated } from "react-animated-css";

class LoginPage extends PureComponent {
  handleSubmit = data => {
    this.props.login(data.email, data.password);
  };

  render() {
    if (this.props.currentUser) return <Redirect to="/" />;

    return (
      <div className="login-form">
        <LoginForm onSubmit={this.handleSubmit} />

        {this.props.error && (
          <span className="NO" style={{ color: "red" }}>
					 <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
            <img
              className="gif"
              src="https://media.giphy.com/media/12XMGIWtrHBl5e/giphy.gif" alt="NOPE"
            /> <br/>
						{this.props.error}
						</Animated>
          </span>
        )}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    currentUser: state.currentUser,
    error: state.login.error
  };
};

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);
