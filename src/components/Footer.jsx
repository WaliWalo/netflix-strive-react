import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap"
import "../footer/footer.css"
import Facebook from "../footer/fb.png"
import Instagram from "../footer/ig.png"
import Twitter from "../footer/twitter.png"
import Youtube from "../footer/yt.png"
import CC from "../footer/cc.png"


export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
      <Container fluid className="footer text-left">
			  <Row>
				  <Col md={2}></Col>
          <Col md={8}>
				    
					    <a href="#" target="blank"><img src={Facebook} alt="" height="36"  /></a>
					    <a href="#" target="blank"><img src={Instagram} alt="" height="36" /></a>
					    <a href="#" target="blank"><img src={Twitter} alt="" height="36" /></a>
					    <a href="#" target="blank"><img src={Youtube} alt="" height="36" /></a>
            </Col>
            <Col md={2}></Col>
            </Row>
            
            <Row className="mt-5">
              <Col md={2}></Col>
              <Col md={2}>
					      <p>
						    <a href="#">Audio and Subtitles<br /></a>
						    <a href="#">Media Center<br /></a>
						    <a href="#">Privacy <br /></a>
						    <a href="#">Contact Us <br /></a>
					      </p>
					    </Col>
					    <Col md={2}>
					      <p>
						    <a href="#">Audio Description <br /></a>
						    <a href="#">Investor Relations<br /></a>
						    <a href="#">Legal Notices <br /></a>
						    <br />
					      </p>
					    </Col>
					    <Col md={2}>
					      <p>
						    <a href="#">Help Center<br /></a>
						    <a href="#">Jobs<br /></a>
						    <a href="#">Cookie Preferences<br /></a>
						    <br />
					      </p>
					    </Col>
					    <Col md={2}>
					      <p>
						    <a href="#">Gift Cards<br /></a>
						    <a href="#">Terms of Use<br /></a>
						    <a href="#">Corporate Information <br /></a>
						    <br />
					      </p>
              </Col>
              <Col md={2}></Col>
            </Row>
            <Row>
              <Col md={2}></Col>
              <Col md={2}>
				    <div>
					    <Button className="btn btn-outline-dark">
					    Service Code
					    </Button>
							</div>
							</Col>
              <Col md={6}>
				    <div>
					    <a href="#" target="blank"><img src={CC} alt="" height="8" /></a><span class="text-dark">
					    2020 Stivix CC0 - Freeing content globally without
					    restrictions</span>
				    </div>
          </Col>
          <Col md={2}></Col>
        </Row>
          </Container>
          </footer>
    </div>
    )
  }
}
