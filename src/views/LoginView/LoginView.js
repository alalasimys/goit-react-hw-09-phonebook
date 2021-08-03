import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

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

export default function LoginView() {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onLogin = useCallback(
    (credentials) => dispatch(logIn(credentials)),
    [dispatch]
  );

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
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
    onLogin({ email, password });
    setMail("");
    setPassword("");
  };

  return (
    <div className="LoginView background-image">
      <div className="form-background">
        <h2>Login</h2>

        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <label style={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}

// const mapDispatchToProps = {
//   onLogin: logIn,
// };
