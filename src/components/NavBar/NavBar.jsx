import React, { Component } from "react";
import { client } from "../../Client/Client";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { UiActions } from "../../redux-reducer/uiSlice";
import { NAVBAR_INFO } from "../.././queries/queries";
import { currencyActions } from "../../redux-reducer/currencySlice";
import {
  NavContainer,
  Categories,
  NavLink,
  CurrencyDropdown,
  ArrowIcon,
  CurrencyModal,
  CurrencyModalContent,
  ModalsContainer,
  CartDropdown,
  Badge,
} from "./NavBarStyles";
import { ReactComponent as Logo } from "../.././assets/brand-icon.svg";
import { ReactComponent as CartIcon } from "../.././assets/empty-cart-icon.svg";
import down from "../.././assets/downward.svg";
import upArrow from "../../assets/upwards.svg";
import CartModal from "../Cart/CartModal";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.nav = React.createRef();
    this.state = {
      navData: [],
    };
  }

  getNavInfo = async () => {
    await client
      .query({
        query: NAVBAR_INFO,
      })
      .then((res) => this.setState({ navData: res.data }));
  };
  componentDidMount() {
    this.getNavInfo();
  }

  handleUpdateCurrency = (currency) => {
    const { label, symbol } = currency;
    this.props.onUpdateCurrency({
      label,
      symbol,
    });

    this.props.onIsCurrencyVisible();
  };

  handleToggleCurrency = () => {
    this.props.onToggleCurrency();
    this.props.onIsCartVisible();
  };

  handleToggleCart = () => {
    this.props.onToggleCart();
    this.props.onIsCurrencyVisible();
  };

  navHandler = (e) => {
    if (e.target === this.nav.current) {
      this.props.onIsCurrencyVisible();
      this.props.onIsCartVisible();
    }
  };

  handleCloseModals = () => {
    this.props.onIsCurrencyVisible();
    this.props.onIsCartVisible();
  };

  render() {
    const { currencyIsVisible, cartIsVisible } = this.props.ui;
    const { categories, currencies } = this.state.navData;
    const { currency, cartQuantity } = this.props;

    return (
      <>
        <NavContainer ref={this.nav} onClick={this.navHandler}>
          <Categories onClick={this.handleCloseModals}>
            {categories &&
              categories.map((category, index) => (
                <NavLink to={`/category/${category.name}`} key={index}>
                  {category.name.toUpperCase()}
                </NavLink>
              ))}
          </Categories>

          <Link to="/" onClick={this.handleCloseModals}>
            <Logo />
          </Link>
          <ModalsContainer>
            <CurrencyDropdown onClick={this.handleToggleCurrency}>
              <span>{currency.symbol}</span>
              {!currencyIsVisible ? (
                <ArrowIcon src={down} alt="down arrow" />
              ) : (
                <ArrowIcon src={upArrow} alt="up arrow" />
              )}
            </CurrencyDropdown>
            {currencyIsVisible && (
              <CurrencyModal>
                {currencies.map((curr, i) => (
                  <CurrencyModalContent
                    key={i}
                    onClick={() => this.handleUpdateCurrency(curr)}
                  >
                    <span>
                      {curr.symbol} {curr.label}
                    </span>
                  </CurrencyModalContent>
                ))}
              </CurrencyModal>
            )}
            <CartDropdown>
              <div onClick={this.handleToggleCart}>
                <CartIcon />
                {cartQuantity >= 1 ? <Badge>{cartQuantity}</Badge> : null}
              </div>
              {cartIsVisible && <CartModal />}
            </CartDropdown>
          </ModalsContainer>
        </NavContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    ui: state.ui,
    cartQuantity: state.cart.cartTotalProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateCurrency: (currency) =>
      dispatch(currencyActions.updateCurrency(currency)),
    onToggleCurrency: () => dispatch(UiActions.toggleCurrency()),
    onIsCurrencyVisible: () => dispatch(UiActions.isCurrencyVisible()),
    onToggleCart: () => dispatch(UiActions.toggleCart()),
    onIsCartVisible: () => dispatch(UiActions.isCartVisible()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
