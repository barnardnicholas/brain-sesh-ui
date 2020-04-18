import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import QuestionCard from "../QuestionCard";

export default class SingleQuiz extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} className="flex-row justify-center">
            <main>
              <QuestionCard question={{ question_text: "Test Question?" }} />
            </main>
          </Col>
        </Row>
      </Container>
    );
  }
}
