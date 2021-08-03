import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserName, logOut } from "../../redux/auth";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();

  const userName = useSelector(getUserName);
  const onLogout = useCallback(() => dispatch(logOut()), [dispatch]);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {userName}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
