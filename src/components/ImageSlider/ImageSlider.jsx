import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  CartImage,
  RightSlide,
  LeftSlide,
  SliderContainer,
} from "../../pages/CartPage/CartPageStyles";
import SlideArrow from "../../assets/upwards.svg";

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  handleSlider = (number) => {
    if (number < 0) {
      return this.props.gallery.length - 1;
    }
    if (number > this.props.gallery.length - 1) {
      return 0;
    }
    return number;
  };

  handleRight = () => {
    let rightSlide = this.state.index + 1;
    this.setState({ index: this.handleSlider(rightSlide) });
  };

  handleLeft = () => {
    let leftSlide = this.state.index - 1;
    this.setState({ index: this.handleSlider(leftSlide) });
  };
  render() {
    const { gallery, productId } = this.props;
    let controlIcon = gallery.length === 1 && "controlIcon";
    return (
      <SliderContainer>
        <Link to={`/product/${productId}`}>
          <CartImage
            src={gallery[this.state.index]}
            alt={gallery[this.state.index]}
          />
        </Link>
        <RightSlide onClick={this.handleRight} className={controlIcon}>
          <img src={SlideArrow} alt={SlideArrow} />
        </RightSlide>
        <LeftSlide onClick={this.handleLeft} className={controlIcon}>
          <img src={SlideArrow} alt={SlideArrow} />
        </LeftSlide>
      </SliderContainer>
    );
  }
}

export default ImageSlider;
