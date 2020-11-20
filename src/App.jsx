import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
