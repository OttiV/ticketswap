import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/users";
import SignupForm from "./SignupForm";
import { Redirect } from "react-router-dom";
import { Animated } from "react-animated-css";

class SignupPage extends PureComponent {
  handleSubmit = data => {
    this.props.postSignup(data.email, data.password);
  };

  render() {
    if (this.props.signup.success) return <Redirect to="/" />;

    return (
      <div className="signup-form">
        <h2>Sign up</h2>

        <SignupForm onSubmit={this.handleSubmit} />
        {this.props.signup.error && (
          <p style={{ color: "red" }}>
            <Animated
              animationIn="zoomIn"
              animationOut="fadeOut"
              isVisible={true}
            >
              <img
                className="gif"
                src="https://media.giphy.com/media/12XMGIWtrHBl5e/giphy.gif" alt="NOPE"
              />{" "}
              <br />
              {this.props.signup.error}
            </Animated>
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    signup: state.signup
  };
};

export default connect(
  mapStateToProps,
  { postSignup: signup }
)(SignupPage);
