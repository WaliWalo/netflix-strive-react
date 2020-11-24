import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShowDetail from "./components/ShowDetail";
import Home from "./components/Home";
import TvShows from "./components/TvShows";
function App() {
  //state
  //function changes state

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route
          path="/"
          exact
          render={(
            props // props are history, location, match
          ) => <Home title="Home" {...props} />} // in this way you can pass your own props along with the router ones
        />
        <Route
          path="/details/:id"
          exact
          render={(props) => <ShowDetail title="Movie Details" {...props} />}
        />
        <Route
          path="/tvShow/"
          exact
          render={(props) => <TvShows title="TV SHOWS" {...props} />}
        />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
