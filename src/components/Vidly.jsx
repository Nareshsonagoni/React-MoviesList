import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Vidly extends Component {
  state = {
    movies: getMovies(),
    tableHead: ["Title", "Genre", "Stock", "Rate"]
  };

  render() {
    const { movies } = this.state;
    return (
      <React.Fragment>
        <Movies />
      </React.Fragment>
    );
  }
}

export default Vidly;
