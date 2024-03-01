import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './index.css';

const HomePage = () => {
  const textStyle = {
    color: 'white',
    fontFamily: 'sans-serif',
  };

  return (
    <div>
      <br />
      <br />
      <header className="text-center py-5 fade-in">
        <Container>
          <h1 className="display-4" style={textStyle}>
            DESIGN BETTER. FASTER. TOGETHER.
          </h1>
          <p className="lead" style={textStyle}>
            The digital product design platform powering the world's best user experiences
          </p>
        </Container>
      </header>
      <br />
      <br />
      <section className="text-center py-5 fade-in">
        <Container>
          <Row>
            <Col md={6} className="mx-auto text-center">
              <p style={textStyle}>
                Your diligence in learning is a very good quality. Keep working hard and dream high.
                Don't lose hope in the trials that will come.
              </p>
              <p style={textStyle}>
                Your hard work and determination will yield success in the future. So just keep
                studying hard and don't be afraid to dream big. There are many opportunities waiting
                for people like you who have an energetic heart and are full of dreams. Go for it!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
