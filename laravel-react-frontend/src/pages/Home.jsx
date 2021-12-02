import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-center ">
              <h1>Welcome to the <strong>Laravel React</strong> Home Page</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;
