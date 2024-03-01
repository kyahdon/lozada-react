import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import './index.css';

function EducationSection() {
  const cardGroupStyle = {
    margin: "auto",
    marginTop: "100px",
    textAlign: "center",
    width: "80%",
    animation: 'fadeInUp 1s ease-in-out',
  };

  const logoContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const logoStyle = {
    width: "150px",
    height: "150px",
  };

  const transparentCardStyle = {
    background: "rgba(255, 255, 255, 0.5)",
    border: "none",
    width: "400px",
  };

  const textStyle = {
    color: 'white',
    fontFamily: 'sans-serif',
  };

  return (
    <div>
      <br></br>
      <header>
        <Container>
        <h1 className="display-4 mb-4" style={textStyle}>EDUCATION</h1>
          <hr className="t_border my-4 ml-0 text-left" style={{ borderColor: 'white' }}/>
          <p className="lead" style={textStyle}>This is my education page where I put here the two schools where I studied kindergarten and up to grade 12</p>
        </Container>
      </header>

      <div style={cardGroupStyle}>
        <CardGroup>
          <Card style={transparentCardStyle}>
            <br />
            <div style={logoContainerStyle}>
              <Card.Img variant="top" src="./images/TELEM.jpg" style={logoStyle} />
            </div>
            <Card.Body>
              <Card.Title><h3>Tinago Elementary School</h3></Card.Title>
              <Card.Text>
                I studied here from kindergarten <p>to grade 6 from 2008 to 2015.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={transparentCardStyle}>
            <br />
            <div style={logoContainerStyle}>
              <Card.Img variant="top" src="./images/CSNHS.png" style={logoStyle} />
            </div>
            <Card.Body>
              <Card.Title><h3>Camarines Sur National High School</h3></Card.Title>
              <Card.Text>
                I studied here from grade 7 <p>to grade 12 from 2015 to 2019.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default EducationSection;
