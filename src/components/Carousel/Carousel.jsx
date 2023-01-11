import React, { Component } from "react";
import {
  Container,
  Wrapper,
  WrapperContent,
  Left,
  Right,
  Content,
} from "./CarouselStyle";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  handleRight = (length) => {
    if (this.state.index < length - 1) {
      this.setState({ index: this.state.index + 1 });
    } else if (this.state.index === length - 1) {
      this.setState({ index: 0 });
    }
  };

  handleLeft = (length) => {
    if (this.state.index > 0 && this.state.index <= length - 1) {
      this.setState({ index: this.state.index - 1 });
    } else if (this.state.index === 0) {
      this.setState({ index: length - 1 });
    }
  };
  render() {
    const { gallery } = this.props;
    return (
      <Container>
        <Wrapper>
          <Left onClick={() => this.handleLeft(gallery.length)}>&lt;</Left>
          <WrapperContent>
            <Content src={gallery[this.state.index]} />
            {setTimeout(() => this.handleRight(gallery.length), 5000) &&
              clearTimeout()}
          </WrapperContent>
          <Right onClick={() => this.handleRight(gallery.length)}>&gt;</Right>
        </Wrapper>
      </Container>
    );
  }
}

export default Carousel;
