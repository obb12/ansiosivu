import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Jumbotron className="text-center">
    <h1>Omar Benchbana</h1>
    <p>
      I'm a full stack developer and a linux geek based in Helsinki Finland
    </p>
    <p>
    <Button    href="https://github.com/obb12?tab=repositories">My github profile</Button>

    </p>
  </Jumbotron>
  <Container className="mb-4">
              <Row className="show-grid" >

            <Col sm="12" md={{ size: 6, offset: 5 }}>
            <h1>About myself</h1>
            <p>
            I'm a social person and a earlybird <br/>like they say the early bird catches the worm
            </p>
            <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>Code written</Card.Title>
        <Card.Text>
        Over 100k lines of code
        </Card.Text>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>

        <Card.Body>
        <Card.Title>Started coding</Card.Title>
        <Card.Text>
        I started coding in 2014
        </Card.Text>
        </Card.Body>
        </Card>
            </Col>
            </Row>
            <Row>
            <Col xs="12" md={{ size: 6 }}>

    <h1>My skills</h1>
    <h3>Php</h3>
    <ProgressBar  variant="success" now={90} className="mb-3"/>
    <h3>vue</h3>

    <ProgressBar  variant="success" now={90} className="mb-3"/>
    <h3>react</h3>

    <ProgressBar  variant="success" now={90} className="mb-3"/>
    <h3>html5</h3>

    <ProgressBar  variant="success" now={90} className="mb-3"/>
    <h3>css</h3>

    <ProgressBar  variant="success" now={90} className="mb-3"/>
    <h3>linux</h3>

    <ProgressBar  variant="success" now={90} className="mb-3"/>

</Col>
                <Col xs={12} md={6} className="margin-top-4">

                    <h3>java</h3>

                    <ProgressBar  variant="info" now={45} className="mb-3"/>

                    <h3>c#</h3>

                    <ProgressBar  variant="warning" now={50} className="mb-3"/>
                    <h3>mysql</h3>

                    <ProgressBar  variant="warning" now={50} className="mb-3"/>
                    <h3>indesign</h3>

                    <ProgressBar  variant="danger" now={30} className="mb-3"/>
                    <h3>illustrator</h3>

                    <ProgressBar  variant="danger" now={30} className="mb-3"/>
                  </Col>
              </Row>


            </Container>
            <Container>
            <Row className="show-grid">

            <Col xs={12} md={6}>
          <h2>  Education</h2>
            <Card style={{ width: '18rem' }}>

            <Card.Body>
              <Card.Title>Haaga-Helia</Card.Title>
              <Card.Text>
                2018-
                <p>
                Business information technology
                </p>
                    <Button variant="info" href="http://www.haaga-helia.fi/en/frontpage">Info About School</Button>
              </Card.Text>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>

            <Card.Body>
              <Card.Title>Helsinki Business College</Card.Title>
              <Card.Text>
                2015-2018
                <p>
                Web development major
                </p>
                <Button variant="info" href="https://en.bc.fi/">Info About School</Button>

              </Card.Text>
            </Card.Body>
            </Card>
            </Col>
            <Col xs={12} md={6}>
          <h2>  Job experience</h2>
            <Card style={{ width: '18rem' }}>

            <Card.Body>
              <Card.Title>Digitalents Helsinki</Card.Title>
              <Card.Text>
                2018-
                <p>
                Programming websites with javascript
                </p>
                <Button variant="info" href="http://digitalents.munstadi.fi/en/">Info about Job</Button>
              </Card.Text>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>

            <Card.Body>
              <Card.Title>Tapiola library</Card.Title>
              <Card.Text>
                2017-2018
                <p>
                Helping people with technology and immigration
                </p>
                <Button variant="info" href="http://www.helmet.fi/en-US/Libraries_and_services/Tapiola_Library/Librarys_services/Tapiola_Library_Makerspace(45433)">Info about Job</Button>

              </Card.Text>
            </Card.Body>
            </Card>
            </Col>
            </Row>
            </Container>
            <Container>
            <Row className="show-grid">

            <Col xs={12} md={7}>
          <h2>  Hobbies</h2>
            <Card style={{ width: '18rem' }}>

            <Card.Body>
              <Card.Title>Karate</Card.Title>

            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>

            <Card.Body>
              <Card.Title>Cubing</Card.Title>

            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>

            <Card.Body>
              <Card.Title>Swimming</Card.Title>

            </Card.Body>
            </Card>
            </Col>
            <Col xs={6} md={4}>
          <h2>  Certifications</h2>
            <Card style={{ width: '18rem' }}>

            <Card.Body>
              <Card.Title>Linux pro</Card.Title>
              <Card.Text>
                2019
                <p>
Testout                 </p>
              </Card.Text>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>

            <Card.Body>
              <Card.Title>Hygiene passport</Card.Title>
              <Card.Text>
2017
                <p>
Valvira                 </p>
              </Card.Text>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>

            <Card.Body>
              <Card.Title>Uimakandidaatti</Card.Title>
              <Card.Text>
2018
                <p>
Vuosaaren uimahalli                  </p>
              </Card.Text>
            </Card.Body>
            </Card>

            </Col>
            </Row>
            </Container>
      </div>
    );
  }
}

export default App;
