import React, { Component } from "react";
import SingleMovie from "./SingleMovie";

export default class ListMovies extends Component {
  render() {
    return (
      <div>
        LIST MOVIES
        <SingleMovie />
      </div>
    );
  }
}
