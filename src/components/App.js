import React, { Component } from "react";
import NavbarOne from "./NavbarOne";
import NavbarTwo from "./NavbarTwo";
import NavbarThree from "./NavbarThree";
import NavbarFour from "./NavbarFour";
import CarouselBody from "./CarouselBody";
import ImageLayer1 from "./ImageLayer1";
import VideoLayer from "./VideoLayer";
import Specialist from "./Specialist";
import BottomBlocks from "./BottomBlocks";
import LastRow from "./LastRow";
import KnowYourself from "./KnowYourself";
import MoodBoosters from "./MoodBoosters";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarOne />
        <NavbarTwo />
        <NavbarThree />
        <NavbarFour />
        <CarouselBody />
        <ImageLayer1 />
        <VideoLayer />
        <Specialist />
        <BottomBlocks />
        <LastRow />
        <KnowYourself />
        <MoodBoosters />
      </React.Fragment>
    );
  }
}

export default App;
