import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth";
import "./RegisterView.scss";
import Form from "react-bootstrap/Form";

const styles = {
  form: {
    width: 320,
  },
};

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onRegister = useCallback(
    (credentials) => dispatch(register(credentials)),
    [dispatch]
  );

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;

      case "email":
        setMail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        console.log(`Field with name -  ${name} not found`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({ name, email, password });
    setName("");
    setMail("");
    setPassword("");
  };

  return (
    <div className="RegisterView background-image">
      <div className="form-background">
        <h2>Sign up</h2>

        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <Form.Group size="sm" className="mb-3">
            {" "}
            <Form.Label>Your name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group size="sm" className="mb-3">
            {" "}
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group size="sm" className="mb-3">
            {" "}
            <Form.Label>Password </Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Form.Group>

          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}
