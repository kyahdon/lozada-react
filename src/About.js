import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './index.css';

const About = () => {
  const whiteTextStyle = {
    color: 'white',
    fontFamily: 'sans-serif',
  };

  return (
    <Container className="mt-5" style={{ animation: 'fadeInUp 1s ease-in-out' }}>
      <Row className="align-items-center">
        <Col xs={12} md={4} className="mb-4">
          <Image src="./images/kyahdon.jpg" thumbnail className="w-70" />
        </Col>
        <Col xs={12} md={8}>
          <h1 className="display-4 mb-4" style={whiteTextStyle}>
            ABOUT ME
          </h1>
          <hr className="t_border my-3 ml-0 text-left" style={{ borderColor: 'white' }} />
          <p style={whiteTextStyle}>My course is Bachelor of Science in Information Systems</p>
          <p style={whiteTextStyle}>
            I am a simple student with a fighting heart.
            Right now, I am fighting the challenges of education even though I am struggling and I will do my best to strive to succeed.
            My days are full of learning, experimenting with new knowledge, and I'm a shy person.
            But despite the challenges, I love to learn and have the opportunity to improve and share my skills.
            In the future, I hope to be an instrument for change and achieve my dreams in life.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
