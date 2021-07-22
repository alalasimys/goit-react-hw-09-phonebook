// import React, { lazy, Suspense } from "react";
import { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import { connect } from "react-redux";
//Components
import AppBar from "./components/AppBar";
//Views
import HomeView from "./views/HomeView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import ContactsView from "./views/ContactsView";
//Styles
import "./styles.css";
import { connect } from "react-redux";
import { getCurrentUser } from "./redux/auth";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>
      </>
    );
  }
}
// const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
