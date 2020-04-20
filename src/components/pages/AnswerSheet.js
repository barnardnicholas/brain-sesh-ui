import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as dummyData from "../../data/dummy-data";

export default class AnswerSheet extends Component {
  state = {
    quizId: "",
    quizName: "",
    author: "",
    authorUID: "",
    dateCreated: "",
    welcomeText: "",
    questions: [],
  };

  getQuiz = () => {
    const {
      author,
      author_uid,
      date_created,
      questions,
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
      questions: questions,
    });
  };

  render() {
    const {
      quizName,
      questions,
      author,
      dateCreated,
      welcomeText,
    } = this.state;
    const questionsArr = Object.keys(questions);
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
                {questionsArr.map((question) => {
                  const { question_text } = questions[question];
                  return (
                    <section className="card shadow">
                      <h3>{question_text}</h3>
                      <input type="text"></input>
                    </section>
                  );
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
