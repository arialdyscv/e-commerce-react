import React, { Component } from "react";
import { connect } from "react-redux";
import { componentHandler } from "../../Client/Client";
import parse from "html-react-parser";
import {
  InfoContainer,
  ProductBrand,
  ProductName,
  AttributesContainer,
  AttrName,
  Attributes,
  AttrValue,
  AttrLabel,
  SpanText,
  SpanColor,
  PriceSection,
  Price,
  ProductPrice,
  AddButton,
  ProductDesc,
} from ".././ProductInfo/ProductInfoStyles";
import { cartActions } from "../../redux-reducer/cartSlice";

class ProductAttributes extends Component {
  state = {
    selectedAttribute: [],
  };

  handleAttribute = (e) => {
    this.setState({
      selectedAttribute: [
        ...this.state.selectedAttribute,
        {
          id: e.target.name,
          value: e.target.value,
        },
      ],
    });
  };

  handleAddProductToCart = (product) => {
    const { selectedAttribute } = this.state;
    const item = {
      product,
      selectedAttribute,
      quantity: 1,
      id: product.id,
    };

    if (
      Object.keys(product.attributes).length !==
      Object.keys(selectedAttribute).length
    ) {
      alert("Please select a product attribute");
    } else {
      this.props.onAddProductToCart(item);
    }
  };

  render() {
    const { product } = this.props;
    const { brand, name, attributes, prices, inStock, description } = product;

    return (
      <>
        <InfoContainer>
          <ProductBrand>{brand}</ProductBrand>
          <ProductName>{name}</ProductName>
          <AttributesContainer>
            {attributes &&
              attributes.map((attribute) => (
                <div key={attribute.id}>
                  <AttrName>{attribute.name.toUpperCase()} :</AttrName>
                  <Attributes onChange={this.handleAttribute}>
                    {attribute.items &&
                      attribute.items.map((item) => (
                        <div key={item.id}>
                          <AttrValue
                            type="radio"
                            id={`${attribute.name}_${item.id}`}
                            value={item.value}
                            name={attribute.id}
                          />
                          {attribute.type === "text" ? (
                            <AttrLabel htmlFor={`${attribute.name}_${item.id}`}>
                              <SpanText>{item.value}</SpanText>
                            </AttrLabel>
                          ) : (
                            <AttrLabel htmlFor={`${attribute.name}_${item.id}`}>
                              <SpanColor color={item.value} />
                            </AttrLabel>
                          )}
                        </div>
                      ))}
                  </Attributes>
                </div>
              ))}
          </AttributesContainer>
          <PriceSection>
            <Price>PRICE:</Price>
            <ProductPrice>
              {prices &&
                prices.map(
                  (price) =>
                    price.currency.label === this.props.currency.label &&
                    `${price.currency.symbol} ${price.amount}`
                )}
            </ProductPrice>
          </PriceSection>
          {inStock ? (
            <AddButton onClick={() => this.handleAddProductToCart(product)}>
              ADD TO CART
            </AddButton>
          ) : (
            <AddButton type="button" disabled>
              OUT OF STOCK
            </AddButton>
          )}
          <ProductDesc>{parse(description)}</ProductDesc>
        </InfoContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProductToCart: (product) =>
      dispatch(cartActions.addProductToCart(product)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(componentHandler(ProductAttributes));
