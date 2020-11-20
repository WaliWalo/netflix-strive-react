import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ListMovies from "./components/ListMovies";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <ListMovies />
      <Footer />
    </div>
  );
}

export default App;
