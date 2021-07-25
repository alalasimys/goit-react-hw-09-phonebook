import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../redux/auth";
import "./RegisterView.scss";

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

export class RegisterView extends Component {
  static propTypes = {
    onRegister: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className="RegisterView background-image">
        <div className="form-background">
          <h2>Sign up</h2>

          <form
            onSubmit={this.handleSubmit}
            style={styles.form}
            autoComplete="off"
          >
            <label style={styles.label}>
              Your name
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>

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

            <button type="submit">Sign up</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
