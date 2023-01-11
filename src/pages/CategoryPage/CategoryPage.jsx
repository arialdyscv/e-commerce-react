import React, { Component } from "react";
import { connect } from "react-redux";
import { Query } from "@apollo/client/react/components";
import { CATEGORY } from "../.././queries/queries";
import { componentHandler } from "../../Client/Client";
import { cartActions } from "../../redux-reducer/cartSlice";
import { UiActions } from "../../redux-reducer/uiSlice";
import {
  CategoriesContainer,
  CategoriesTitle,
  CategoriesList,
  Loading,
} from "./CategoryPageStyle";
import ProductPreview from "../../components/ProductPreview/ProductPreview";
import loader from "../../assets/loader .gif";

class CategoryPage extends Component {
  handleAddProductToCart = (product) => {
    let selectedAttribute = [];
    if (product.attributes.length > 0) {
      product.attributes.map((attribute) =>
        selectedAttribute.push({
          id: attribute.id,
          value: attribute.items[0].value,
        })
      );

      const item = {
        product,
        selectedAttribute,
        quantity: 1,
        id: product.id,
      };

      this.props.onAddProductToCart(item);
    } else {
      const item = {
        product,
        selectedAttribute,
        quantity: 1,
        id: product.id,
      };
      this.props.onAddProductToCart(item);
    }
  };
  render() {
    const { params } = this.props;
    const categoryTitle =
      params.category.charAt(0).toUpperCase() + params.category.slice(1);
    return (
      <>
        <CategoriesContainer onClick={() => this.props.onIsCurrencyVisible()}>
          <CategoriesTitle>{categoryTitle}</CategoriesTitle>
          <CategoriesList>
            <Query query={CATEGORY(params.category)}>
              {({ loading, error, data }) => {
                if (loading) {
                  return (
                    <Loading>
                      <img src={loader} alt={loader} />
                    </Loading>
                  );
                }
                if (error) {
                  return <Loading>{error.message}</Loading>;
                }
                if (!loading & !error) {
                  return data.category.products.map((product) => (
                    <ProductPreview
                      key={product.id}
                      product={product}
                      currency={this.props.currency}
                      handleAddProductToCart={this.handleAddProductToCart}
                    />
                  ));
                }
              }}
            </Query>
          </CategoriesList>
        </CategoriesContainer>
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
    onIsCurrencyVisible: () => dispatch(UiActions.isCurrencyVisible()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(componentHandler(CategoryPage));
