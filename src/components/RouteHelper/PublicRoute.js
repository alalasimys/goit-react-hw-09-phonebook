import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth";

export default function PublicRoute({ children, redirectTo, ...routeProps }) {
  const isLoggedIn = useSelector(getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}

PublicRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  routeProps: PropTypes.object,
};
