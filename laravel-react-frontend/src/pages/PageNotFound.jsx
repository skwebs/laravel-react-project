
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col>
            <div className="d-flex justify-content-center flex-column align-items-center">
              <h1 className="display-1 fw-bold">404</h1>
              <h2 className="display-6">Page Not Found</h2>
              <p className="lead">The page you are looking for does not exist.</p>
              <Link to="/" className="btn btn-primary">Go Home</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PageNotFound;