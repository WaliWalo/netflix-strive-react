import React, { Component } from "react";

import Carousel from "./Carousel";
import ListMovies from "./ListMovies";
export default class Home extends Component {
  state = {
    query: "",
  };
  render() {
    return (
      <div>
        <h1 style={{ color: "white" }}>{this.props.title}</h1>
        <Carousel />
        <ListMovies query={this.state.query} history={this.props.history} />
      </div>
    );
  }
}
