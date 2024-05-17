import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import cat1 from "../../Assets/CatPic/1.jpg";
import cat2 from "../../Assets/CatPic/2.jpg"; 
import Particle from "../Particle";
import Home2 from "./Home2";
import { CgWebsite } from "react-icons/cg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15}} className="heading">
              <strong className="main-name"> $SOONMOO</strong>
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <p className="paragraph">$SONMOO dives into the feline <br /> frenzy where every transaction <br /> is a cat-tastic adventure. 
              </p>
              <Button variant="primary" href="https://t.me/pumpfunfuck2" className="button-with-high-zindex">
                Join Telegram
              </Button>



              <div style={{ padding: 50, textAlign: "left" }}>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, maxHeight: "450px" }}>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
    
    
  );
}

export default Home;
