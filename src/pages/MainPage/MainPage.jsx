import React, { Component } from "react";
import { componentHandler } from "../../Client/Client";
import Carousel from "../../components/Carousel/Carousel";
import Banner1 from "../../assets/Banner1.jpg";
import Banner2 from "../../assets/Banner2.jpg";
import Banner3 from "../../assets/Banner3.jpg";

class MainPage extends Component {
  render() {
    const carouselGalley = [Banner1, Banner2, Banner3];
    return (
      <div className="main-Page-container">
        <Carousel gallery={carouselGalley} />
      </div>
    );
  }
}

export default componentHandler(MainPage);
