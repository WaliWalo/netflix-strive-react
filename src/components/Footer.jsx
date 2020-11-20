import React, { Component } from "react";
import {Container, Row, Col, Button} from "react-bootstrap"
import "../footer/footer.css"


export default class Footer extends Component {
  render() {
    return (
      <div>
        <Footer>
      <Container fluid className="footer">
			  <Row>
				  <Col md={2}></Col>
          <Col md={8}>
				    {/* className="my-2" id="sns"> */}
					    <img src="./img/fb.png" alt="" height="36" />
					    <img src="./img/ig.png" alt="" height="36" />
					    <img src="./img/twitter.png" alt="" height="36" />
					    <img src="./img/yt.png" alt="" height="36" />
            </Col>
            <Col md={2}></Col>
            </Row>
            
            <Row>
              <Col md={2}></Col>
              <Col md={2}>
					      <p>
						    Audio and Subtitles<br />
						    Media Center<br />
						    Privacy <br />
						    Contact Us <br />
					      </p>
					    </Col>
					    <Col md={2}>
					      <p>
						    Audio Description <br />
						    Investor Relations<br />
						    Legal Notices <br />
						    <br />
					      </p>
					    </Col>
					    <Col md={2}>
					      <p>
						    Help Center<br />
						    Jobs<br />
						    Cookie Preferences<br />
						    <br />
					      </p>
					    </Col>
					    <Col md={2}>
					      <p>
						    Gift Cards<br />
						    Terms of Use<br />
						    Corporate Information <br />
						    <br />
					      </p>
              </Col>
              <Col md={2}></Col>
            </Row>
            <Row>
              <Col md={2}></Col>
              <Col md={8}>
				    <div>
					    <Button className="btn btn-outline-dark">
					    Service Code
					    </Button>
				    </div>
				    <div>
					    <img src="./img/cc.png" alt="" height="8" /><span class="text-dark">
					    2020 Stivix CC0 - Freeing content globally without
					    restrictions</span>
				    </div>
          </Col>
          <Col md={2}></Col>
        </Row>
          </Container>
          </Footer>
    </div>
    )
  }
}
