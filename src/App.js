import { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
//Components
import AppBar from "./components/AppBar";
import PrivateRoute from "./components/RouteHelper/PrivateRoute";
import PublicRoute from "./components/RouteHelper/PublicRoute";
import { getCurrentUser } from "./redux/auth";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer/Footer";
//Styles
import "./styles/styles.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

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
        <Container>
          <AppBar />

          <Suspense
            fallback={
              <Loader
                className="Loader"
                type="Grid"
                color="#c6538c"
                height={100}
                width={100}
              />
            }
          >
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
          <Footer />
        </Container>
      </>
    );
  }
}
// const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
