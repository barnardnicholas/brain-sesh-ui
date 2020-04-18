import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";

export default function StyleGuide() {
  return (
    <Container>
      <Row>
        <Col xs={12} className="flex-row justify-center">
          <main>
            <section className="card shadow">
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
              <h5>Heading 5</h5>
              <h6>Heading 6</h6>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>
            <section className="card shadow">
              <h3>Unordered List</h3>
              <ul>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
              </ul>
              <h3>Ordered List</h3>
              <ol>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
              </ol>
            </section>
            <section className="card shadow">
              <form>
                <Container>
                  <Row>
                    <Col xs={6}>
                      <label>Text Input</label>
                    </Col>
                    <Col xs={6}>
                      <input type="text"></input>
                    </Col>
                  </Row>
                  <Row>
                    <label>
                      Button<button>Click Me</button>
                    </label>
                  </Row>
                  <Row>
                    <label>
                      Select
                      <select>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </label>
                  </Row>
                </Container>
              </form>
            </section>
          </main>
        </Col>
      </Row>
    </Container>
  );
}
