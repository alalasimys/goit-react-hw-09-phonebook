import React from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "../UserMenu";
import AuthNav from "./AuthNav";
import { getIsAuthenticated } from "../../redux/auth";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Assistant",
    fontSize: "20px",
    fontWeight: 400,
    // borderBottom: "1px solid #2A363B",
  },
};

const AppBar = ({ isAuthenticated }) => (
  // <header style={styles.header}>
  //   <Navigation />
  //   {isAuthenticated ? <UserMenu /> : <AuthNav />}
  // </header>
  <Navbar bg="light" variant="light">
    <Container style={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </Container>
  </Navbar>
);

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
