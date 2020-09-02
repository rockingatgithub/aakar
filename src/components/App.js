import React, { Component } from "react";
import NavbarOne from "./NavbarOne";
import NavbarTwo from "./NavbarTwo";
import NavbarThree from "./NavbarThree";
import NavbarFour from "./NavbarFour";
import CarouselBody from "./CarouselBody";
import ImageLayer1 from "./ImageLayer1";
import VideoLayer from "./VideoLayer";
import Specialist from "./Specialist";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarOne />
        <NavbarTwo />
        <NavbarThree />
        <NavbarFour />
        <CarouselBody />
        <ImageLayer1 />
        <VideoLayer />
        <Specialist />
      </div>
    );
  }
}

export default App;
