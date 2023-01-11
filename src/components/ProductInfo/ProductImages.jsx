import React, { Component } from "react";
import {
  ThumbnailContainer,
  Thumbnail,
  MainImageContainer,
  MainImage,
} from "./ProductInfoStyles";

export default class ProductDetails extends Component {
  render() {
    const { productImages, updateSelectedImg, SelectedImg } = this.props;
    return (
      <>
        <ThumbnailContainer>
          {productImages &&
            productImages.map((img, index) => (
              <Thumbnail key={index} src={img} onClick={updateSelectedImg} />
            ))}
        </ThumbnailContainer>
        <MainImageContainer>
          {productImages && !SelectedImg ? (
            <MainImage src={productImages[0]} alt={productImages[0]} />
          ) : (
            <MainImage src={SelectedImg} alt={SelectedImg} />
          )}
        </MainImageContainer>
      </>
    );
  }
}
