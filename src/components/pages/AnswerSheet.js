import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as dummyData from "../../data/dummy-data";
import RoundAnswers from "../RoundAnswers";

export default class AnswerSheet extends Component {
  state = {
    quizId: "",
    quizName: "",
    author: "",
    authorUID: "",
    dateCreated: "",
    welcomeText: "",
    rounds: {},
  };

  getQuiz = () => {
    const {
      author,
      author_uid,
      date_created,
      rounds,
      quiz_id,
      quiz_name,
      welcome_text,
    } = dummyData.testQuiz;
    this.setState({
      quizId: quiz_id,
      quizName: quiz_name,
      welcomeText: welcome_text,
      author: author,
      authorUID: author_uid,
      dateCreated: date_created,
      rounds: rounds,
    });
  };

  render() {
    const { quizName, rounds, author, dateCreated, welcomeText } = this.state;
    const roundsArr = Object.keys(rounds);
    return (
      <Container>
        <Row>
          <Col xs={12} className="flex-row justify-center">
            <main>
              <form>
                <section className="card shadow">
                  <h1>{quizName}</h1>
                  <h4>{author}</h4>
                  <p>{dateCreated}</p>
                  <p>{welcomeText}</p>
                </section>

                {roundsArr.map((round, idx) => {
                  return <RoundAnswers round={rounds[round]} key={idx} />;
                })}
                <section className="card shadow">
                  <h1>Heading 1</h1>
                  <h2>Heading 2</h2>
                  <h3>Heading 3</h3>
                  <h4>Heading 4</h4>
                  <h5>Heading 5</h5>
                  <h6>Heading 6</h6>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </section>
              </form>
            </main>
          </Col>
        </Row>
      </Container>
    );
  }

  componentDidMount() {
    this.getQuiz();
  }
}
