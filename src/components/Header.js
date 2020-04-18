import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";

import brain from "../assets/img/brain_logo_white_min_333.png";
import burgerMenu from "../assets/img/burger_menu.svg";

export default function Header() {
  return (
    <header className="color-burgundy background-mint header shadow">
      <Container fluid>
        <Row className="flex-row justify-space-between">
          <Col className="header-logo-container">
            <Link to="/">
              <img src={brain} width="auto" height="100%" alt="brain logo" />
            </Link>
          </Col>
          <Col className="header-text-container">
            <Link to="/">
              <h1 className="deco-text color-burgundy">Brain Sesh</h1>
            </Link>
          </Col>
          <Col className="header-menu-container">
            <Link to="#">
              <img src={burgerMenu} alt="menu" width="auto" height="100%" />
            </Link>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
