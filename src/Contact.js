import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import './index.css';

function GroupExample() {
  const cardGroupStyle = {
    margin: "auto",
    marginTop: "100px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    animation: 'fadeInUp 1s ease-in-out',
  };

  const transparentCardStyle = {
    background: "rgba(255, 255, 255, 0.5)",
    border: "none",
    width: "400px",
  };

  const logoContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const logoStyle = {
    width: "100px",
    height: "100px",
  };

  const textStyle = {
    color: 'white',
    fontFamily: 'sans-serif',
  };

  const textStyle2 = {
    color: 'white',
  };

  return (
    <div>
      <header>
        <br></br>
        <Container>
          <h1 className="display-4 mb-4" style={textStyle}>CONTACT ME</h1>
          <hr className="t_border my-4 ml-0 text-left" style={{ borderColor: 'white' }}/>
          <br></br>
          <h2 className="display-5" style={textStyle}>Let's Get in Touch: Ways to Connect with Me</h2>
          <p className="lead" style={textStyle}>Get in touch via the contact information provided or use my convenient form. 
          We look forward to connecting with you!</p>
        </Container>
      </header>
      
      <div style={cardGroupStyle}>
        <CardGroup>
          <Card style={transparentCardStyle}>
            <div style={logoContainerStyle}>
              <Card.Img variant="top" src="https://img.icons8.com/bubbles/100/000000/phone.png" style={logoStyle} />
            </div>
            <Card.Body>
              <Card.Title>Phone:</Card.Title>
              <Card.Text>
                +63 966 152 2771
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={transparentCardStyle}>
            <div style={logoContainerStyle}>
              <Card.Img variant="top" src="https://img.icons8.com/bubbles/100/000000/new-post.png" style={logoStyle} />
            </div>
            <Card.Body>
              <Card.Title>Email:</Card.Title>
              <Card.Text>
                dklozada@gbox.ncf.edu.ph{' '}
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default GroupExample;
