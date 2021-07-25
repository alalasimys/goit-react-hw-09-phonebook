import React from "react";
import "./HomeView.scss";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Tourney, cursive",
    fontWeight: 400,
    fontSize: 56,
    textAlign: "center",
  },
};

const HomeView = () => (
  <div style={styles.container} className="HomeView background-image">
    <div className="HomeView__container">
      <h1 style={styles.title}>
        Phonebook
        <span role="img" aria-label="Иконка приветствия">
          🤙
        </span>
      </h1>
      <p className="HomeView__text"> All your contacts in one place.</p>
    </div>
  </div>
);

export default HomeView;
