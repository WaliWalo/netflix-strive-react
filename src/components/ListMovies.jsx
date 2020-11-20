import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

export default class ListMovies extends Component {
  state = {
    harrypoter: [],
    superman: [],
    batman: [],
  };

  myfetch = async (query) => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=41290999&s=${query}`
      );

      let arraymovies = await response.json();
      let movies = arraymovies.Search;

      if (query === "harry") {
        console.log(movies);
        this.setState({ harrypoter: movies });
      } else if (query === "superman") {
        console.log(movies);
        this.setState({ superman: movies });
      } else {
        console.log(movies);
        this.setState({ batman: movies });
      }
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount = async () => {
    await this.myfetch("harry");
    await this.myfetch("superman");
    await this.myfetch("batman");
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.state.harrypoter.map((movie) => (
              <Col
                xs={6}
                md={3}
                lg={2}
                key={`movieId${movie.imdbID}`}
                className="mb-3"
              >
                <SingleMovie obj={movie}></SingleMovie>
              </Col>
            ))}
          </Row>
          <Row>
            {this.state.superman.map((movie) => (
              <Col
                xs={6}
                md={3}
                lg={2}
                key={`movieId${movie.imdbID}`}
                className="mb-3"
              >
                <SingleMovie obj={movie}></SingleMovie>
              </Col>
            ))}
          </Row>
          <Row>
            {this.state.batman.map((movie) => (
              <Col
                xs={6}
                md={3}
                lg={2}
                key={`movieId${movie.imdbID}`}
                className="mb-3"
              >
                <SingleMovie obj={movie}></SingleMovie>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
