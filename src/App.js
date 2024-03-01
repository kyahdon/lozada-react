import * as React from "react";
import { BrowserRouter as Router , Routes, Route, Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.css";

import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Contact from "./Contact";
import API from "./API";
import Login from './Login';
import Dashboard from './Dashboard';

import Nav from 'react-bootstrap/Nav';


function App() {
  return (
    <div>
      <Router>

        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
          <img
              src="/images/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <Nav fill variant="tabs">
              <Nav.Item>
                <Nav.Link as={Link} to={"/home"} className="text-decoration-none text-white">Home</Nav.Link> {" "}
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/about"} className="text-decoration-none text-white">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/education"} className="text-decoration-none text-white">Education</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/contact"} className="text-decoration-none text-white">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/api"} className="text-decoration-none text-white">API</Nav.Link>
              </Nav.Item>
              {/*<Nav.Link as={Link} to={"/login"} className="text-decoration-none text-white">Login</Nav.Link>
              <Nav.Link as={Link} to={"/dashboard"} className="text-decoration-none text-white">Dashboard</Nav.Link>*/}
            </Nav>
          </Container>
        </Navbar>

        <Container className="mt-5">
          <Row>
            <Col md={12}>
              <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/education" element={<Education />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/api" element={<API />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/login" element={<Login />}/>

              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;


