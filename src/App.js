import { useEffect, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
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

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
        <AppBar />

        <Suspense
          fallback={
            <Loader
              className="Loader"
              type="Hearts"
              color="#c6538c"
              height={100}
              width={100}
            />
          }
        >
          <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>

            <PublicRoute path="/register" redirectTo="/contacts" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Suspense>
        <Footer />
      </Container>
    </>
  );
}
