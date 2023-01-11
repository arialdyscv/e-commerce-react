import React, { Component } from "react";
import { connect } from "react-redux";
import { componentHandler } from "../../Client/Client";
import { cartActions } from "../../redux-reducer/cartSlice";
import { UiActions } from "../../redux-reducer/uiSlice";
import {
  AttrName,
  AttrLabel,
} from "../../components/ProductInfo/ProductInfoStyles";
import {
  CartTitle,
  ProductContainer,
  Brand,
  Name,
  Price,
  SpanColor,
  SpanText,
  CartBtnContainer,
  CartBtn,
  ProductQty,
  Splitter,
  TotalsContainer,
  TotalText,
  OrderBtn,
  ClearBtn,
} from "../CartPage/CartPageStyles";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

class CartPage extends Component {
  totalPriceHandler = () => {
    let totalPrice = 0;
    (this.props.cart || []).forEach((element) => {
      const { prices } = element.product;
      prices.forEach((price) => {
        if (this.props.currency.label === price.currency.label) {
          totalPrice += price.amount * element.quantity;
        }
      });
    });

    return totalPrice;
  };
  render() {
    const { cart, cartQuantity, currency } = this.props;
    const TotalPrice = this.totalPriceHandler();
    const TaxAmount = this.totalPriceHandler() * 0.21;

    return (
      <div
        className="cart-page-container"
        onClick={() => this.props.onIsCurrencyVisible()}
      >
        <CartTitle>CART</CartTitle>
        {cart.map((element, index) => (
          <ProductContainer key={index}>
            <div key={element}>
              <Brand>{element.product.brand}</Brand>
              <Name>{element.product.name}</Name>
              <Price>
                {element.product.prices.map(
                  (price) =>
                    price.currency.label === currency.label &&
                    `${price.currency.symbol}${price.amount}`
                )}
              </Price>
              {element.product.attributes.map((attribute) => (
                <div key={attribute.name}>
                  <AttrName key={attribute.id}>
                    {attribute.name.toUpperCase()}:
                  </AttrName>
                  <div key={attribute.type}>
                    {attribute.items &&
                      attribute.items.map((attr, index) =>
                        attribute.type === "swatch" ? (
                          <AttrLabel key={index}>
                            <SpanColor
                              selected={
                                element.selectedAttribute.find(
                                  (selectAttr) => selectAttr.id === attribute.id
                                ) &&
                                element.selectedAttribute.find(
                                  (selectAttr) => selectAttr.id === attribute.id
                                ).value === attr.value
                              }
                              color={attr.value}
                            />
                          </AttrLabel>
                        ) : (
                          <AttrLabel key={index}>
                            <SpanText
                              selected={
                                element.selectedAttribute.find(
                                  (selectAttr) => selectAttr.id === attribute.id
                                ) &&
                                element.selectedAttribute.find(
                                  (selectAttr) => selectAttr.id === attribute.id
                                ).value === attr.value
                              }
                            >
                              {attr.value}
                            </SpanText>
                          </AttrLabel>
                        )
                      )}
                  </div>
                </div>
              ))}
            </div>
            <Splitter>
              <CartBtnContainer>
                <CartBtn onClick={() => this.props.onAddProductToCart(element)}>
                  +
                </CartBtn>
                <ProductQty>{element.quantity}</ProductQty>
                <CartBtn
                  onClick={() => {
                    this.props.onRemoveProduct(element);
                  }}
                >
                  –
                </CartBtn>
              </CartBtnContainer>
              <ImageSlider
                gallery={element.product.gallery}
                productId={element.id}
              />
            </Splitter>
          </ProductContainer>
        ))}
        <TotalsContainer>
          <TotalText>
            Tax 21%: &nbsp;
            <Price>
              {currency.symbol}
              {TaxAmount.toFixed(2)}
            </Price>
          </TotalText>
          <TotalText>
            Quantity: &nbsp;<Price>{cartQuantity}</Price>
          </TotalText>
          <TotalText>
            Total: &nbsp;
            <Price>
              {currency.symbol}
              {(TotalPrice + TaxAmount).toFixed(2)}
            </Price>
          </TotalText>
        </TotalsContainer>
        <OrderBtn>ORDER</OrderBtn>
        <ClearBtn onClick={() => this.props.onClearCart()}>CLEAR CART</ClearBtn>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cartProducts,
    cartQuantity: state.cart.cartTotalProducts,
    currency: state.currency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProductToCart: (product) =>
      dispatch(cartActions.addProductToCart(product)),
    onRemoveProduct: (product) => dispatch(cartActions.removeProduct(product)),
    onIsCurrencyVisible: () => dispatch(UiActions.isCurrencyVisible()),
    onClearCart: () => dispatch(cartActions.clearCart()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(componentHandler(CartPage));
