import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logIn } from "../../redux/auth";
import "./LoginView.scss";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

export class LoginView extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="LoginView background-image">
        <div className="form-background">
          <h2>Login</h2>

          <form
            onSubmit={this.handleSubmit}
            style={styles.form}
            autoComplete="off"
          >
            <label style={styles.label}>
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>

            <label style={styles.label}>
              Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>

            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
