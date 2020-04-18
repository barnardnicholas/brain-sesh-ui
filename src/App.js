import React, { Component } from "react";
import "./App.css";
import * as api from "./api/api";

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
      <div className="App">
        <button onClick={this.getAllQuizzes}>Get</button>
      </div>
    );
  }
}
