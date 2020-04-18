import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function QuestionCard(props) {
  const { question } = props;
  return (
    <section className="card shadow">
      <Container fluid>
        <Row>
          <Col>
            <h3 className="deco-text">Q</h3>
          </Col>
          <Col>
            <h3>{question.question_text || "--"}</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="deco-text">A</h3>
          </Col>
          <Col>
            <input type="text"></input>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
