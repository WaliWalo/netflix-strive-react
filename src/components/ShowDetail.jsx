import React, { Component } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

export default class ShowDetail extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    let movieIdFromTheSearchBar = this.props.match.params.id;
  }
  render() {
    return (
      <Container>
        {this.state.movie && (
          <div>
            <Row className="my-2">
              <Col md={3}>
                <img
                  src={"/" + this.state.movie.image}
                  alt="movie"
                  className="img-fluid"
                />
              </Col>
              <Col md={9}>
                <Card>
                  <Card.Body>
                    <Card.Title>{this.state.movie.name}</Card.Title>
                    <Card.Subtitle>
                      <Badge variant="danger">{this.state.movie.label}</Badge>
                    </Card.Subtitle>
                    <Card.Text>{this.state.movie.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        )}
        {!this.state.movie && <h1>LOADING</h1>}
      </Container>
    );
  }
}
