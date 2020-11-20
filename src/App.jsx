import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ListMovies from "./components/ListMovies";
import NavBar from "./components/NavBar";
import { Button } from "react-bootstrap";
import MyModal from "./components/MyModal";
function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Comment
      </Button>
      <MyModal
        movie="tt1756545"
        poster="https://m.media-amazon.com/images/M/MV5BNDM0YzMyNGUtMTU1Yy00OTE2LWE5NzYtZDZhMTBmN2RkNjg3XkEyXkFqcGdeQXVyMzU5NjU1MDA@._V1_SX300.jpg"
        moviename="Harry Potter and the Deathly Hallows: Part 2"
        movieyear="2011"
        movietype="movie"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ListMovies />
      <Footer />
    </div>
  );
}

export default App;
