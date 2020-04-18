import React, { Component } from "react";
import { Router } from "@reach/router";
import { Container, Row, Col } from "react-bootstrap";

import * as api from "./api/api";

// Import Components
import Home from "./components/pages/Home";
import StyleGuide from "./components/pages/StyleGuide";

// Import Styling

import "./App.css";
import Header from "./components/Header";
import SingleQuiz from "./components/pages/SingleQuiz";

export default class App extends Component {
  state = {
    quizzes: {},
  };

  getAllQuizzes = () => {
    const cb = (data) => {
      console.dir(data);
      this.setState({ quizzes: data });
    };
    api.getAllQuizzes(cb);
  };

  render() {
    return (
      <div className="App background-cream">
        <Header />
        <Router>
          <Home path="/" />
          <StyleGuide path="/styles" />
          {/* <SingleQuiz path="/quizzes/:quiz_id" /> */}
        </Router>
      </div>
    );
  }
}
