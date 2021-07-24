import { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
//Components
import AppBar from "./components/AppBar";
import PrivateRoute from "./components/RouteHelper/PrivateRoute";
import PublicRoute from "./components/RouteHelper/PublicRoute";
import { getCurrentUser } from "./redux/auth";

const HomeView = lazy(() =>
  import("./views/HomeView" /* webpackChunkName: "home-page" */)
);
const ContactsView = lazy(() =>
  import("./views/ContactsView" /* webpackChunkName: "contacts-page" */)
);
const RegisterView = lazy(() =>
  import("./views/RegisterView" /* webpackChunkName: "register-page" */)
);
const LoginView = lazy(() =>
  import("./views/LoginView" /* webpackChunkName: "login-page" */)
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              component={RegisterView}
              redirectTo="/contacts"
              restricted
            />
            <PublicRoute
              path="/login"
              component={LoginView}
              redirectTo="/contacts"
              restricted
            />
            <PrivateRoute
              path="/contacts"
              component={ContactsView}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}
// const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
