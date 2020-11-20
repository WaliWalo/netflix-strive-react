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
        this.setState({ harrypoter: movies.slice(0, 6) });
      } else if (query === "superman") {
        this.setState({ superman: movies.slice(0, 6) });
      } else {
        this.setState({ batman: movies.slice(0, 6) });
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
          <h3>Trending now</h3>
          <Row style={{ marginBottom: "20px" }}>
            {this.state.harrypoter.map((movie) => (
              <Col
                xs={6}
                md={3}
                lg={2}
                key={`movieId${movie.imdbID}`}
                className="mb-5 px-1"
              >
                <SingleMovie obj={movie}></SingleMovie>
              </Col>
            ))}
          </Row>
          <h3>Watch it again</h3>
          <Row style={{ marginBottom: "20px" }}>
            {this.state.superman.map((movie) => (
              <Col
                xs={6}
                md={3}
                lg={2}
                key={`movieId${movie.imdbID}`}
                className="mb-5 px-1"
              >
                <SingleMovie obj={movie}></SingleMovie>
              </Col>
            ))}
          </Row>
          <h3>New Releases</h3>
          <Row>
            {this.state.batman.map((movie) => (
              <Col
                xs={6}
                md={3}
                lg={2}
                key={`movieId${movie.imdbID}`}
                className="mb-3 px-1"
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
