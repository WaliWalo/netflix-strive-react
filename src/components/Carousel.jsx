import React, { Component } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import One from "../carousel/slide1.jpg"
import Two from "../carousel/slide2.jpg"
import Three from "../carousel/slide3.jpg"


export default class CarouselPage extends Component {
  render() {
    return <div>
        <Row className="justify-content-center mt-5">
          <Col xs={12}>
            <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={One}
                    alt=""
                  />
                  
              </Carousel.Item>
              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Two}
                    alt=""
                  />
                  
              </Carousel.Item>
              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Three}
                    alt=""
                  />
                </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
    </div>;
  }
}
