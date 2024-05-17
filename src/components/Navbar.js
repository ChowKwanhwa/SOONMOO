import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";
import { GiEagleEmblem } from "react-icons/gi"; //<GiEagleEmblem />


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex" style={{ marginLeft: '0.5em' }}>
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item style={{zIndex: "999"}}>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} style={{zIndex: "999"}}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item style={{zIndex: "999"}}>
              <Nav.Link
                href="https://twitter.com/PUMPFUCK176852"
                style={{zIndex: "999"}}
                onClick={() => updateExpanded(false)}
              >
                <FaTwitter style={{ marginBottom: "2px" }} /> X/Twitter
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://t.me/pumpfunfuck2"
                onClick={() => updateExpanded(false)}
              >
                <FaTelegramPlane
                  style={{ marginBottom: "2px" }}
                />{" "}
                Telegram
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href=""
                onClick={() => updateExpanded(false)}
              >
                <FaFileContract style={{ marginBottom: "2px" }} /> Contract
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href=""
              >
                <GiEagleEmblem style={{ marginBottom: "2px" }} /> Dexscreener
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
