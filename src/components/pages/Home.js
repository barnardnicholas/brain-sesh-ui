import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <main>
            <section className="card shadow">
              <h1>Brain Sesh Home</h1>
              <Link to="/styles">
                <h4>Style Guide</h4>
              </Link>
              <Link to="/quizzes/0001">
                <h4>Single Quiz</h4>
              </Link>
            </section>
          </main>
        </Col>
      </Row>
    </Container>
  );
}
