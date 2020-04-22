import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function RoundAnswers({ round }) {
  const { round_title, round_number, questions } = round;
  const questionsArr = Object.keys(questions);
  console.dir(round);
  return (
    <section className="card shadow">
      <Container fluid>
        <Row>
          <h3>{`${round_number}. ${round_title}`}</h3>
        </Row>
      </Container>
      <Container fluid>
        {questionsArr.map((question, idx) => {
          return (
            <Row key={idx} className="answer-line">
              <div className="answer-number-container">
                <label>{idx + 1}.</label>
              </div>
              <div className="answer-input-container">
                <input type="text"></input>
              </div>
            </Row>
          );
        })}
      </Container>
    </section>
  );
}
