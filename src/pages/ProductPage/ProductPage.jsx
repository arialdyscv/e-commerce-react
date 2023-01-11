import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { PRODUCT_BY_ID } from "../.././queries/queries";
import ProductImages from "../../components/ProductInfo/ProductImages";
import ProductAttributes from "../../components/ProductInfo/ProductAttributes";
import { connect } from "react-redux";
import { componentHandler } from "../../Client/Client";
import { UiActions } from "../../redux-reducer/uiSlice";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImg: "",
    };
  }

  handleSelectImage = (e) => {
    this.setState({
      selectedImg: e.target.src,
    });
  };

  render() {
    const { params } = this.props;
    return (
      <Query query={PRODUCT_BY_ID(params.productId)}>
        {({ loading, error, data }) => {
          if (loading) {
            return <p>loading...</p>;
          }
          if (error) {
            return <p>{error.message}</p>;
          }
          if (!loading && !error) {
            return (
              <div
                className="product-page-container"
                onClick={() => this.props.onIsCurrencyVisible()}
              >
                <ProductImages
                  productImages={data.product.gallery}
                  updateSelectedImg={this.handleSelectImage}
                  SelectedImg={this.state.selectedImg}
                />
                <ProductAttributes product={data.product} />
              </div>
            );
          }
        }}
      </Query>
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
    onIsCurrencyVisible: () => dispatch(UiActions.isCurrencyVisible()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(componentHandler(ProductPage));
