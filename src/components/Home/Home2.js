import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cat1 from "../../Assets/CatPic/1.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineTwitter,

} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";
import { GiEagleEmblem } from "react-icons/gi";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" >
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            The purr-fect <br/>world of <br/><span className="purple"> $SOONMOO! </span>
            </h1>
            <p className="home-about-body">
            <span className="purple">Name :</span> SOONMOO <br/>
            <span className="purple">Sex :</span> Boi <br/>
            <span className="purple">AGE :</span> 6 <br/>
            <span className="purple">BIRTH :</span> MICHI 1st, 2016 <br/>
            <span className="purple">FROM :</span> KOREA <br/>
            <br/>
            we want to show the life of a <span className="purple">SOONMOO</span> as it is.<br/>
            We try to film and record the daily life that flows smoothly.<br/>
            Even if special events don't happen every day, <br/>
            even if the routine is always the same, <br/>
            even if it's more than 10 hours of sleep, a <span className="purple">SOONMOO</span> is a <span className="purple">SOONMOO!</span>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={cat1} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND $SONMOO ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://twitter.com/PUMPFUCK176852"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/pumpfunfuck2"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFileContract />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <GiEagleEmblem />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
