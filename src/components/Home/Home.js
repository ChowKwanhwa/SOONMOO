import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Home2 from "./Home2";

function Home() {
  useEffect(() => {
    console.log("Home component mounted");

    if (!window.Jupiter || !window.Jupiter.init) {
      console.error("Jupiter Terminal script not loaded yet");
      return;
    }

    // Initialize Jupiter Terminal
    window.Jupiter.init({
      displayMode: "integrated",
      integratedTargetId: "integrated-terminal",
      endpoint: "https://mainnet.helius-rpc.com/?api-key=558cc937-d2ab-400c-bd0c-b4e0fcac7b68",
      defaultExplorer: "Solscan",
      enableWalletPassthrough: false,
      strictTokenList: false,
      formProps: {
        fixedInputMint: true,
        initialInputMint: 'So11111111111111111111111111111111111111112',
        fixedOutputMint: true,
        initialOutputMint: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
        initialSlippageBps: 500,
      },
    });

    console.log("Jupiter Terminal initialized");
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <strong className="main-name"> $SOONMOO</strong>
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <p className="paragraph">
                $SONMOO dives into the feline <br /> frenzy where every transaction <br /> is a cat-tastic adventure.
              </p>
              <Button variant="primary" href="https://x.com/Soon_moo_cat" className="button-with-high-zindex">
                Visit X/Twitter
              </Button>
              <div style={{ padding: 50, textAlign: "left" }}></div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, height: 'auto' }}>
              <div id="integrated-terminal"></div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
