import React, { Component } from "react";
import { connect } from "react-redux";
import { cartActions } from "../../redux-reducer/cartSlice";
import { Link } from "react-router-dom";
import {
  CartModalContainer,
  Overlay,
  ModalProductList,
  ModalTotalPrice,
  CartModalButtons,
  ModalTitle,
  ItemCount,
  ModalProductContainer,
  ProductTitle,
  ModalPrice,
  AttrName,
  AttrContainer,
  ColorSpan,
  TextSpan,
  ModalBtnContainer,
  ModalBtn,
  ModalQuantity,
  ModalImg,
  ModalImgContainer,
  ModalAmount,
  ViewBag,
  CheckOut,
  EmptyModal,
} from "./CartModalStyles";
import { Splitter } from "../../pages/CartPage/CartPageStyles";
import { UiActions } from "../../redux-reducer/uiSlice";

class CartModal extends Component {
  constructor(props) {
    super(props);
    this.modal = React.createRef();
  }

  totalPriceHandler = () => {
    let totalPrice = 0;
    (this.props.cart || []).forEach((item) => {
      const { prices } = item.product;
      prices.forEach((price) => {
        if (this.props.currency.label === price.currency.label) {
          totalPrice += price.amount * item.quantity;
        }
      });
    });

    return totalPrice;
  };

  handleCloseModal = (e) => {
    if (e.target === this.modal.current) {
      this.props.onIsCartVisible();
    }
  };

  render() {
    const { cart, cartQuantity, currency } = this.props;
    const TotalAmount = this.totalPriceHandler();

    return (
      <>
        <Overlay ref={this.modal} id="modal" onClick={this.handleCloseModal}>
          <CartModalContainer>
            <ModalTitle>
              My Bag,{" "}
              <ItemCount>
                {cartQuantity} {cartQuantity === 1 ? "item" : "items"}
              </ItemCount>
            </ModalTitle>
            <ModalProductList>
              {cartQuantity >= 1 ? (
                <div>
                  {cart.map((element, index) => (
                    <ModalProductContainer key={index}>
                      <div>
                        <ProductTitle>
                          {element.product.brand}
                          <br></br>
                          {element.product.name}
                        </ProductTitle>
                        <ModalPrice>
                          {element.product.prices.map(
                            (price) =>
                              price.currency.label === currency.label &&
                              `${price.currency.symbol}${price.amount}`
                          )}
                        </ModalPrice>
                        <div>
                          {element.product.attributes.map((attribute) => (
                            <div key={attribute.id}>
                              <AttrName>{attribute.name}:</AttrName>
                              <div>
                                {attribute.items.map((attr, i) =>
                                  attribute.type === "swatch" ? (
                                    <AttrContainer key={i}>
                                      <ColorSpan
                                        selected={
                                          element.selectedAttribute.find(
                                            (selectedAttr) =>
                                              selectedAttr.id === attribute.id
                                          ) &&
                                          element.selectedAttribute.find(
                                            (selectedAttr) =>
                                              selectedAttr.id === attribute.id
                                          ).value === attr.value
                                        }
                                        color={attr.value}
                                      />
                                    </AttrContainer>
                                  ) : (
                                    <AttrContainer key={i}>
                                      <TextSpan
                                        selected={
                                          element.selectedAttribute.find(
                                            (selectedAttr) =>
                                              selectedAttr.id === attribute.id
                                          ) &&
                                          element.selectedAttribute.find(
                                            (selectedAttr) =>
                                              selectedAttr.id === attribute.id
                                          ).value === attr.value
                                        }
                                      >
                                        {attr.value}
                                      </TextSpan>
                                    </AttrContainer>
                                  )
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Splitter>
                        <ModalBtnContainer>
                          <ModalBtn
                            onClick={() =>
                              this.props.onAddProductToCart(element)
                            }
                          >
                            +
                          </ModalBtn>
                          <ModalQuantity>{element.quantity}</ModalQuantity>
                          <ModalBtn
                            onClick={() => {
                              this.props.onRemoveProduct(element);
                            }}
                          >
                            –
                          </ModalBtn>
                        </ModalBtnContainer>
                        <ModalImgContainer>
                          <Link
                            to={`/product/${element.id}`}
                            onClick={() => this.props.onIsCartVisible()}
                          >
                            <ModalImg src={element.product.gallery[0]} />
                          </Link>
                        </ModalImgContainer>
                      </Splitter>
                    </ModalProductContainer>
                  ))}
                </div>
              ) : (
                <EmptyModal>Cart is empty...</EmptyModal>
              )}
            </ModalProductList>
            <ModalTotalPrice>
              <span>Total</span>
              <ModalAmount>
                {currency.symbol}
                {TotalAmount.toFixed(2)}
              </ModalAmount>
            </ModalTotalPrice>
            <CartModalButtons>
              <ViewBag to="/cart" onClick={() => this.props.onIsCartVisible()}>
                VIEW BAG
              </ViewBag>
              <CheckOut to="/cart" onClick={() => this.props.onIsCartVisible()}>
                CHECK OUT
              </CheckOut>
            </CartModalButtons>
          </CartModalContainer>
        </Overlay>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cartProducts,
    cartQuantity: state.cart.cartTotalProducts,
    currency: state.currency,
    ui: state.ui,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIsCartVisible: () => dispatch(UiActions.isCartVisible()),
    onAddProductToCart: (product) =>
      dispatch(cartActions.addProductToCart(product)),
    onRemoveProduct: (product) => dispatch(cartActions.removeProduct(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
